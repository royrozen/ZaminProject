using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Zamin.Models.General;
using Zamin.WebModels;

namespace Zamin.Server.Controllers
{
    public class TagController : BaseController
    {
        // GET: Tag
        public JsonResult GetTags()
        {
            var tags = UOW.TagRepository.GetTags();
            var webModels = tags.Select(AutoMapper.Mapper.Map<Tag, TagWebModel>);
            return Json(webModels, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult GetFilterTags(string filterTagName)
        {
            var tags = UOW.TagRepository.GetFilterTags(filterTagName);
            var webModel = tags.Select(AutoMapper.Mapper.Map<Tag, TagWebModel>).ToList();


            return new JsonResult()
            {
                Data = new
                {
                    tags = webModel,
                }
            };
        }




        [Authorize]
        [HttpPost]
        public JsonResult SaveTag(TagWebModel tag)
        {
            var success = -1;
            if (tag.TagName != null)
            {
                //if success == -1 
                success = tag.Id == 0 ? UOW.TagRepository.CreateTag(tag) : UOW.TagRepository.UpdateTag(tag);
            }
            return new JsonResult()
            {
                Data = new
                {
                    Success = success != -1, 
                    Id = success
                }
            };

        }
        [Authorize]
        [HttpPost]
        public JsonResult DeleteTag(int tagId)
        {
            var success = UOW.TagRepository.DeleteTag(tagId);
            return Json(success);
        }

    }
}