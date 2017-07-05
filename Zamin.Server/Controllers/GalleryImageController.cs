﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Zamin.Models.Content;
using Zamin.WebModels;

namespace Zamin.Server.Controllers
{
    [Authorize]
    public class GalleryImageController : BaseController
    {
        // GET: GalleryImage
        public JsonResult GetGalleryImages()
        {
            var galleryImage = UOW.GalleryImageRepository.GetGalleryImages();
            var webModels = galleryImage.Select(AutoMapper.Mapper.Map<GalleryImage, GalleryImageWebModel>);
            return Json(webModels, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetGalleryImage(int galleryImageId)
        {
            var galleryImage = UOW.GalleryImageRepository.GetGalleryImage(galleryImageId);
            var webModel = AutoMapper.Mapper.Map<GalleryImage, GalleryImageWebModel>(galleryImage);
            return Json(webModel, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SaveGalleryImage(GalleryImageWebModel galleryImage)
        {
            var success = false;
            success = galleryImage.Id == 0 ? UOW.GalleryImageRepository.CreateGalleryImage(galleryImage) : UOW.GalleryImageRepository.UpdateGalleryImage(galleryImage);

            return Json(success);
        }

        [HttpPost]

        public JsonResult DeleteGalleryImage(int galleryImageId)
        {
            var success = UOW.GalleryImageRepository.DeleteGalleryImage(galleryImageId);
            return Json(success);
        }
    }
}