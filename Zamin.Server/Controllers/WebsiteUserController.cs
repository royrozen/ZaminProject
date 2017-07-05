﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Zamin.Models;
using Zamin.WebModels;

namespace Zamin.Server.Controllers
{
    [Authorize]
    public class WebsiteUserController : BaseController
    {
        // GET: All WebSiteUsers
        public JsonResult GetAllWebsiteUsers()
        {
            var websiteUsers = UOW.WebUserRepository.GetWebsiteUsers();
            var webModels = websiteUsers.Select(AutoMapper.Mapper.Map<WebsiteUser, WebsiteUserWebModel>);
            return Json(webModels, JsonRequestBehavior.AllowGet); 
            
        }

        [HttpPost]
        public JsonResult GetAppUsersByFilter(WebsiteUserFilter filter)
        {
            var appUsers = UOW.WebUserRepository.GetWebUsersByFilter(filter);
            var webModel = appUsers.Select(AutoMapper.Mapper.Map<WebsiteUser, WebsiteUserWebModel>).ToList();

            
            return new JsonResult()
            {
                Data = new
                {
                    appUsers = webModel,
                }
            };
        }

        [HttpGet]
        public FileResult ExportWebUsersCsv(WebsiteUserFilter filter)
        {
            var byteArr = UOW.WebUserRepository.ExportWebUsersCsv(filter);
            return File(byteArr, "text/csv", "WebsiteUsers.csv");
        }



        public JsonResult GetWebSiteUser(int userId)
        {
            var websiteUser = UOW.WebUserRepository.GetWebsiteUser(userId);
            var webModel = AutoMapper.Mapper.Map<WebsiteUser, WebsiteUserWebModel>(websiteUser);
            return Json(webModel, JsonRequestBehavior.AllowGet); 
        }

        [HttpPost]
        public JsonResult SaveWebSiteUser(WebsiteUserWebModel websiteUser)
        {
            var success = false;
            success = websiteUser.Id == 0 ? UOW.WebUserRepository.CreateWebsiteUser(websiteUser) : UOW.WebUserRepository.UpdateWebsiteUser(websiteUser);

            return Json(success);
        }

        [HttpPost]
        public JsonResult DeleteWebSiteUser(int websiteUserId)
        {
            var success = UOW.WebUserRepository.DeleteWebsiteUser(websiteUserId);
            return Json(success);
        }
    }
}
 