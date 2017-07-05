using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Zamin.Enums;
using Zamin.Helpers;
using Zamin.Models;
using Zamin.Models.Content;
using Zamin.Models.General;
using Zamin.Repositories.CFMembership;
using Zamin.WebModels;


namespace Zamin.Repositories
{
   public class WebUserRepository :RepositoryBase<DataContext> , IWebUserRepository
    {
       public WebUserRepository()
        {

        }

       public WebUserRepository(DataContext dataContext)
            : base(dataContext)
        {

        }
        public List<WebsiteUser> GetWebsiteUsers()
        {
            return DataContext.WebsiteUsers.Include(w=>w.LessonsWatched).Include(w=>w.LikedActivities).Include(w=>w.LikedArticles).Include(w=>w.LikedGalleryImages)
                .Include(w => w.LikedLessonPlans).Include(w => w.WebsiteUserLessonLike).Include(w => w.LikedVideo).Where(w => w.IsActive).ToList();
        }

        public List<WebsiteUser> GetWebUsersByFilter(WebsiteUserFilter filter)
        {
            var filteredUsers = DataContext.WebsiteUsers.Include(w => w.LessonsWatched).Include(w => w.LikedActivities).Include(w => w.LikedArticles).Include(w => w.LikedGalleryImages)
               .Include(w => w.LikedLessonPlans).Include(w => w.WebsiteUserLessonLike).Include(w => w.LikedVideo).Where(w => w.IsActive ).ToList();
            if (!string.IsNullOrEmpty(filter.name))
            {
                filteredUsers =
                    filteredUsers.Where(
                        u =>
                            u.FirstName.ToLower().Contains(filter.name.ToLower()) ||
                            u.LastName.ToLower().Contains(filter.name.ToLower()) ||
                            (u.FirstName + " " + u.LastName).ToLower().Contains(filter.name.ToLower()) ||
                            (u.LastName + " " + u.FirstName).ToLower().Contains(filter.name.ToLower())).ToList();
            }
            if (!string.IsNullOrEmpty(filter.phone))
            {
                filteredUsers =
                    filteredUsers.Where(
                        u =>
                            u.Phone.Contains(filter.phone)).ToList();
            }


            return filteredUsers;
        }

        public byte[] ExportWebUsersCsv(WebsiteUserFilter filter)
        {
            var webUsers = GetWebUsersByFilter(filter);
            var sb = new StringBuilder();

            sb.Append(Helper.CsvHelper.CreatCsvLine("שם פרטי", "שם משפחה", "טלפון", "סוג משתמש"));
            foreach (var user in webUsers)
            {
                sb.Append(Helper.CsvHelper.CreatCsvLine(user.FirstName,
                                                         user.LastName,
                                                         user.Phone,
                                                         user.UserType
                                                        ));
            }

            var data = Encoding.UTF8.GetBytes(sb.ToString());
            var byteArr = Encoding.UTF8.GetPreamble().Concat(data).ToArray();

            return byteArr;
        }

        public WebsiteUser GetWebsiteUser(int websiteUserId)
        {
            return DataContext.WebsiteUsers.FirstOrDefault(w => w.Id == websiteUserId);

        }

        public bool CreateWebsiteUser(WebsiteUserWebModel websiteUser)
        {
            var dbModel = AutoMapper.Mapper.Map<WebsiteUserWebModel, WebsiteUser>(websiteUser);

            dbModel.Password = Crypto.HashPassword(websiteUser.Password);
            dbModel.IsActive= true;
            dbModel.CreateDate=DateTime.Now;
            dbModel.LoginToken = Guid.NewGuid().ToString();
            DataContext.WebsiteUsers.Add(dbModel);
            return Save();
        }

        public bool DeleteWebsiteUser(int websiteUserId)
        {
            var websiteUser = DataContext.WebsiteUsers.FirstOrDefault(w => w.Id == websiteUserId);
            if (websiteUser == null) return false;
            websiteUser.IsActive = false;
            return Save();
        }

        public bool UpdateWebsiteUser(WebsiteUserWebModel websiteUser)
        {
            var dbModel = DataContext.WebsiteUsers.SingleOrDefault(w => w.Id == websiteUser.Id);
            if (dbModel == null) return false;
            AutoMapper.Mapper.Map(websiteUser, dbModel);


            //Save tags
            if (websiteUser.Tags != null && websiteUser.Tags.Count > 0)
            {
                foreach (var tagDb in dbModel.Tags.ToList())
                {
                    //Doesnt exist in webModel (removed by client)
                    if (!websiteUser.Tags.Any(t => t.Id == tagDb.Id))
                    {
                        dbModel.Tags.Remove(tagDb);
                    }
                }
                foreach (var tagWebModel in websiteUser.Tags.ToList())
                {
                    //Doesnt exist in db (added by client)
                    if (!dbModel.Tags.Any(t => t.Id == tagWebModel.Id))
                    {
                        dbModel.Tags.Add(DataContext.Tags.First(t => t.Id == tagWebModel.Id));
                    }
                }
            }
            else //All tags were deleted
            {
                foreach (var tag in dbModel.Tags.ToList())
                {
                    dbModel.Tags.Remove(tag);
                }
            }

            return Save();
        }

       public WebsiteUser GetCurrentUserByLoginToken(string loginToken)
       {
           return DataContext.WebsiteUsers.FirstOrDefault(w => w.LoginToken == loginToken && w.IsActive);
       }

       public WebsiteUser WebsiteLogin(string email, string password)
       {
           var user = DataContext.WebsiteUsers.FirstOrDefault(w => w.Email == email && w.IsActive);
           if (user != null)
           {
               if (Crypto.VerifyHashedPassword(user.Password, password))
               {
                   user.LastLogin=DateTime.Now;
                   return user;
               }
           }
           return null;
       }

       public bool IsAuthenticated(string loginToken)
       {
           return DataContext.WebsiteUsers.Any(w => w.LoginToken == loginToken && w.IsActive);
       }
    }
}
