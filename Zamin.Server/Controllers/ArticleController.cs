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
    public class ArticleController : BaseController
    {
        // GET: Article
        public JsonResult GetArticles()
        {
            var article = UOW.ArticleRepository.GetArticles();
            var webModels = article.Select(AutoMapper.Mapper.Map<Article, ArticleWebModel>);
            return Json(webModels, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetArticle(int articleId)
        {
            var article = UOW.ArticleRepository.GetArticle(articleId);
            var webModel = AutoMapper.Mapper.Map<Article, ArticleWebModel>(article);
            return Json(webModel, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SaveArticle(ArticleWebModel article)
        {
            var success = false;
            success = article.Id == 0 ? UOW.ArticleRepository.CreateArticle(article) : UOW.ArticleRepository.UpdateArticle(article);

            return Json(success);
        }

        [HttpPost]

        public JsonResult DeleteArticle(int articleId)
        {
            var success = UOW.ArticleRepository.DeleteArticle(articleId);
            return Json(success);
        }
    }
}