using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Zamin.Models.Membership;
using Zamin.Repositories;
using Zamin.Repositories.CFMembership;
using Zamin.Models;
using Zamin.Models.General;
using Zamin.WebModels;


namespace Zamin.Repositories
{
    public class UsersRepository : RepositoryBase<DataContext>, IUsersRepository
    {
        public UsersRepository()
        {

        }

        public UsersRepository(DataContext dataContext)
            : base(dataContext)
        {

        }

        public User GetUser(string userName)
        {
            return DataContext.Users.SingleOrDefault(u => u.Username == userName);
        }

        public User GetUserById(int userId)
        {
            return
                DataContext.Users.FirstOrDefault(u => u.Id == userId);
        }

        public bool IsWebsiteUserExsist(string userName, string password)
        {
            
               var websiteUser= DataContext.WebsiteUsers.FirstOrDefault(u => u.Email == userName && Crypto.HashPassword(password) == u.Password);
            if (websiteUser == null) return false;
            //update last Login
                 websiteUser.LastLogin=DateTime.Now;
            return Save();


        }

        public bool IsEmailExists(string email)
        {
            return DataContext.WebsiteUsers.Any(u => u.Email == email);
        }
        public bool AddOrUpdateUser(WebsiteUser user, List<TagWebModel> tags)
        {
            if (tags != null)
            {
                user.Tags = new List<Tag>();
                foreach (var tagWebModel in tags)
                {
                    user.Tags.Add(DataContext.Tags.FirstOrDefault(t=>t.Id == tagWebModel.Id));
                }
            }
            DataContext.WebsiteUsers.Add(user);
            return Save();
        }
    }
}
