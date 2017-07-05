using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Enums;
using Zamin.Helpers;
using Zamin.Models.Content;
using Zamin.Models.Likes;
using Zamin.WebModels;

namespace Zamin.Repositories
{
    public class LessonRepository : RepositoryBase<DataContext>, ILessonRepository
    {
        public LessonRepository()
        {

        }
        public LessonRepository(DataContext dataContext)
            : base(dataContext)
        {

        }
        public List<Lesson> GetLessonsByCourseId(int courseId)
        {
            return DataContext.Lesson.Where(l => l.IsActive && l.CourseId == courseId).ToList();
        }

        public Lesson GetLesson(int lessonId)
        {
            return DataContext.Lesson.Include(l => l.Tags).FirstOrDefault(l => l.Id == lessonId);
        }


        public bool CreateLesson(LessonWebModel lesson)
        {
            var dbModel = AutoMapper.Mapper.Map<LessonWebModel, Lesson>(lesson);

            //Save tags
            if (lesson.Tags != null)
            {
                foreach (var tagWebModel in lesson.Tags)
                {
                    dbModel.Tags.Add(DataContext.Tags.First(t => t.Id == tagWebModel.Id));
                }
            }

            //Save image file
            //var fileName = Guid.NewGuid() + ".png";
            //dbModel.ImageFileName = fileName;
            dbModel.IsActive = true;
            dbModel.CreateDate = DateTime.Now;
            //FileHelper.SaveFile(poster.ImageFile, DirectoriesEnum.Posters, fileName);

            DataContext.Lesson.Add(dbModel);
            return Save();
        }

        public bool DeleteLesson(int lessonId)
        {
            var lesson = DataContext.Lesson.FirstOrDefault(l => l.Id == lessonId);
            if (lesson == null) return false;

            lesson.IsActive = false;
            return Save();
        }


        public bool UpdateLesson(LessonWebModel lesson)
        {
            var dbModel = DataContext.Lesson.Include(l => l.Tags).SingleOrDefault(l => l.Id == lesson.Id);
            if (dbModel == null) return false;

            var oldUrl = dbModel.VideoUrl;
            AutoMapper.Mapper.Map(lesson, dbModel);


            // if url has changed Update created Date
            if (oldUrl != lesson.VideoUrl)
            {
                dbModel.CreateDate = DateTime.Now;
            }






            //save Tags
            if (lesson.Tags != null && lesson.Tags.Count > 0)
            {
                foreach (var tagDb in dbModel.Tags.ToList())
                {
                    //Doesnt exist in webModel (removed by client)
                    if (!lesson.Tags.Any(t => t.Id == tagDb.Id))
                    {
                        dbModel.Tags.Remove(tagDb);
                    }
                }
                foreach (var tagWebModel in lesson.Tags.ToList())
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
            //if (video.ImageFile != null)
            //{
            //    var fileName = Guid.NewGuid() + ".png";
            //    dbModel.ImageFileName = fileName;
            //    dbModel.Active = true;
            //    FileHelper.SaveFile(video.ImageFile, DirectoriesEnum.Courses, fileName);
            //}
            return Save();
        }

        public bool LikeLesson(string loginToken, int lessonId)
        {
            var user = DataContext.WebsiteUsers.FirstOrDefault(u => u.LoginToken == loginToken);
            var lesson = DataContext.Lesson.Include(l => l.WebsiteUserLessonLike).FirstOrDefault(l => l.Id == lessonId);
            if (user == null || lesson == null) return false;
            if (!lesson.WebsiteUserLessonLike.Any(l => l.WebsiteUserId == user.Id))
            {
                lesson.WebsiteUserLessonLike.Add(new WebsiteUserLessonLike() { WebsiteUserId = user.Id });
                lesson.NumOfLikes++;
            }
           return Save();
        }
    }
}
