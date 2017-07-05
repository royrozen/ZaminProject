using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Enums;
using Zamin.Helpers;
using Zamin.Models.Content;
using Zamin.WebModels;

namespace Zamin.Repositories
{
    public class VideoRepository : RepositoryBase<DataContext>, IVideoRepository
    {
        public VideoRepository()
        {

        }
        public VideoRepository(DataContext dataContext)
            : base(dataContext)
        {

        }


        public List<Video> GetVideos(int videoType)
        {
            //TODO  check videoType 
            return DataContext.Video.Where(v => v.IsActive && v.VideoTypeId==videoType).ToList();
        }


        public Video GetVideo(int videoId)
        {
            //TODO  check videoType 
            return DataContext.Video.Include(v => v.Tags).FirstOrDefault(v => v.Id == videoId);
        }

        public bool CreateVideo(VideoWebModel video)
        {
            var Checkvideo = DataContext.Video.FirstOrDefault(v => v.Url == video.Url);

            // video url already exist in db
            if (Checkvideo != null)
            {
                return false;
            }

            var dbModel = AutoMapper.Mapper.Map<VideoWebModel, Video>(video);

           

           

            //Save tags
            if (video.Tags != null)
            {
                foreach (var tagWebModel in video.Tags)
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

            DataContext.Video.Add(dbModel);
            return Save();
        }

        public bool DeleteVideo(int videoId)
        {
            var video = DataContext.Video.FirstOrDefault(v => v.Id == videoId);
            if (video == null) return false;

            video.IsActive = false;
            return Save();
        }

        public bool UpdateVideo(VideoWebModel video)
        {


            var dbModel = DataContext.Video.Include(v => v.Tags).SingleOrDefault(v => v.Id == video.Id);
            if (dbModel == null) return false;

            var oldUrl = dbModel.Url;
            AutoMapper.Mapper.Map(video, dbModel);


            // if url has changed Update created Date
            if (oldUrl != video.Url)
            {
                dbModel.CreateDate = DateTime.Now;
            }






            //save Tags
            if (video.Tags != null && video.Tags.Count > 0)
            {
                foreach (var tagDb in dbModel.Tags.ToList())
                {
                    //Doesnt exist in webModel (removed by client)
                    if (!video.Tags.Any(t => t.Id == tagDb.Id))
                    {
                        dbModel.Tags.Remove(tagDb);
                    }
                }
                foreach (var tagWebModel in video.Tags.ToList())
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

        public List<Video> GetYouTubeVideos(bool isAuthorized)
        {
            var youTubeVideoType = (int)VideoType.YouTube;
            var youtube = DataContext.Video.Where(v => v.VideoTypeId == youTubeVideoType && v.IsActive);
            if (!isAuthorized) youtube = youtube.Where(y => y.IsAuthorizedContent);
            return youtube.ToList();
        }
    }
}
