using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Zamin.Models.Content;
using Zamin.WebModels;


namespace Zamin.Server.Controllers
{
    [Authorize]
    public class VideoController : BaseController
    {
        // GET: Video
        public JsonResult GetVideos( int Videotype)
        {
            var videos = UOW.VideoRepository.GetVideos(Videotype);
            var webModels = videos.Select(AutoMapper.Mapper.Map<Video, VideoWebModel>);        
            
            return Json(webModels, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetVideo(int videoId)
        {

            var video = UOW.VideoRepository.GetVideo(videoId );
            var webModel = AutoMapper.Mapper.Map<Video, VideoWebModel>(video);
            return Json(webModel, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SaveVideo(VideoWebModel video)
        {
            var success = false;
            success = video.Id == 0 ? UOW.VideoRepository.CreateVideo(video) : UOW.VideoRepository.UpdateVideo(video);

            return Json(success);
        }

        [HttpPost]

        public JsonResult DeleteVideo(int videoId)
        {
            var success = UOW.VideoRepository.DeleteVideo(videoId);
            return Json(success);
        }
    }
}