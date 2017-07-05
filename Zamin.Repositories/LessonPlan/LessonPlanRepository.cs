using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Zamin.Enums;
using Zamin.Helpers;
using Zamin.Models.Content;
using Zamin.Models.General;
using Zamin.WebModels;

namespace Zamin.Repositories
{
    public class LessonPlanRepository : RepositoryBase<DataContext>, ILessonPlanRepository
    {
        public LessonPlanRepository()
        {

        }

        public LessonPlanRepository(DataContext dataContext)
            : base(dataContext)
        {

        }


        public List<LessonPlan> GetLessonPlans()
        {

            return DataContext.LessonPlan.Include(l=>l.WrittenLessonPlans).Include(l=>l.Presentations).Where(l => l.IsActive).ToList();
        }

        public LessonPlan GetLessonPlan(int lessonPlanId)
        {

            return DataContext.LessonPlan.Include(l => l.Tags).Include(l => l.Presentations).Include(l => l.WrittenLessonPlans).FirstOrDefault(l => l.Id == lessonPlanId);

        }

        public bool CreateLessonPlan(LessonPlanWebModel lessonPlan)
        {
            var dbModel = AutoMapper.Mapper.Map<LessonPlanWebModel, LessonPlan>(lessonPlan);


            //Save tags
            if (lessonPlan.Tags != null)
            {
                foreach (var tagWebModel in lessonPlan.Tags)
                {
                    dbModel.Tags.Add(DataContext.Tags.First(t => t.Id == tagWebModel.Id));
                }
            }

            ////Save image file
            //var fileName = Guid.NewGuid() + ".png";
            //dbModel.ImageFileName = fileName;
            //FileHelper.SaveFile(lessonPlan.ImageFile, DirectoriesEnum.Posters, fileName);
            dbModel.CreateDate = DateTime.Now;
            dbModel.IsActive = true;

            DataContext.LessonPlan.Add(dbModel);
            var status = Save(dbModel);

            if (!status.Success) { return false; }

            var addedSuccessfully = AddPresentationFilesToLessonPlan(lessonPlan.PresentationFiles, dbModel.Id, true);
            addedSuccessfully= AddWrittenLessonPlansFilesToLessonPlan(lessonPlan.WrittenLessonPlansFiles, dbModel.Id, false);

            return (status.Success && addedSuccessfully);
        }
       

        public bool DeleteLessonPlan(int lessonPlanId)
        {
            var lessonPlan = DataContext.LessonPlan.FirstOrDefault(p => p.Id == lessonPlanId);
            if (lessonPlan == null) return false;

            lessonPlan.IsActive = false;
            return Save();

        }

        public bool UpdateLessonPlan(LessonPlanWebModel lessonPlan)
        {
            var dbModel = DataContext.LessonPlan.Include(l => l.Tags).SingleOrDefault(l => l.Id == lessonPlan.Id);
            if (dbModel == null) return false;

            AutoMapper.Mapper.Map(lessonPlan, dbModel);

            //save Tags
            if (lessonPlan.Tags != null && lessonPlan.Tags.Count > 0)
            {
                foreach (var tagDb in dbModel.Tags.ToList())
                {
                    //Doesnt exist in webModel (removed by client)
                    if (!lessonPlan.Tags.Any(t => t.Id == tagDb.Id))
                    {
                        dbModel.Tags.Remove(tagDb);
                    }
                }
                foreach (var tagWebModel in lessonPlan.Tags.ToList())
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

            if (lessonPlan.PresentationUrlsToDelete != null)
            {
                var fileNames = new List<string>();

                foreach (var url in lessonPlan.PresentationUrlsToDelete)
                {
                    var split = url.Split('/');
                    if (split.Length == 0) { continue; }
                    fileNames.Add(split[split.Length - 1]);
                    FileHelper.DeleteFile(url);
                }

                foreach (var fileName in fileNames)
                {
                    var presentationDb = dbModel.Presentations.SingleOrDefault(g => g.FileUrl.Contains(fileName));
                    if (presentationDb == null) { continue; }
                    DataContext.Presentation.Remove(presentationDb);
                }
            }

            var addedSuccessfully = AddPresentationFilesToLessonPlan(lessonPlan.PresentationFiles, dbModel.Id, false);
            addedSuccessfully= AddWrittenLessonPlansFilesToLessonPlan(lessonPlan.WrittenLessonPlansFiles, dbModel.Id, false);
            dbModel.CreateDate = DateTime.Now;
            var success = Save();

            return (success && addedSuccessfully) ;
        }
        private bool AddPresentationFilesToLessonPlan(List<HttpPostedFileBase> presentationFiles, int lessonPlanId, bool saveToDb)
        {
            if (presentationFiles == null || presentationFiles.Count == 0) { return true; }

            foreach (var file in presentationFiles)
            {
                var fileType = file.FileName.Split('.');
                var fileName = Guid.NewGuid() + "." + fileType[fileType.Length - 1];

                var fileSaveSuccess = FileHelper.SaveFile(file, DirectoriesEnum.Presentations, fileName, lessonPlanId);
                if (fileSaveSuccess)
                {
                    DataContext.Presentation.Add(new Presentation
                    {
                        LessonPlanId = lessonPlanId,
                        FileUrl = string.Format("{0}/{1}", lessonPlanId, fileName)
                    });
                }
            }

            return DataContext.SaveChanges() > -1;
        }

        private bool AddWrittenLessonPlansFilesToLessonPlan(List<HttpPostedFileBase> WrittenLessonPlansFiles, int lessonPlanId, bool saveToDb)
        {
            if (WrittenLessonPlansFiles == null || WrittenLessonPlansFiles.Count == 0) { return true; }

            foreach (var file in WrittenLessonPlansFiles)
            {
                var fileType = file.FileName.Split('.');
                var fileName = Guid.NewGuid() + "." + fileType[fileType.Length - 1];

                var fileSaveSuccess = FileHelper.SaveFile(file, DirectoriesEnum.WrittenLessonPlans, fileName, lessonPlanId);
                if (fileSaveSuccess)
                {
                    DataContext.WrittenLessonPlan.Add(new WrittenLessonPlan
                    {
                        LessonPlanId = lessonPlanId,
                        FileUrl = string.Format("{0}/{1}", lessonPlanId, fileName)
                    });
                }
            }

            return DataContext.SaveChanges() > -1;
        }
        public bool LikeLessonPlan(string loginToken, int lessonPlanId)
        {
            var user = DataContext.WebsiteUsers.FirstOrDefault(u => u.LoginToken == loginToken);
            var lessonPlan = DataContext.LessonPlan.Include(a => a.WebsiteUserLessonPlanLike).FirstOrDefault(l => l.Id == lessonPlanId);
            if (user == null || lessonPlan == null) return false;
            if (!lessonPlan.WebsiteUserLessonPlanLike.Any(l => l.Id == user.Id))
            {
                lessonPlan.WebsiteUserLessonPlanLike.Add(user);
                lessonPlan.NumOfLikes++;
            }
            return Save();
        }

    }
}