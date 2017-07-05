using System;
using System.Collections.Generic;
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
    public class LessonController : BaseController
    {
        // GET: Lesson
     public JsonResult GetLessonsByCourseId(int courseId)
        {
            var lesson = UOW.LessonRepository.GetLessonsByCourseId(courseId);
            var webModels = lesson.Select(AutoMapper.Mapper.Map<Lesson,LessonWebModel>);
            return Json(webModels, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetLesson(int lessonId)
        {

            var lesson = UOW.LessonRepository.GetLesson(lessonId);
            var webModel = AutoMapper.Mapper.Map<Lesson,LessonWebModel>(lesson);
            return Json(webModel, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SaveLesson(LessonWebModel lesson)
        {
            var success = false;
            success = lesson.Id == 0 ? UOW.LessonRepository.CreateLesson(lesson) : UOW.LessonRepository.UpdateLesson(lesson);

            return Json(success);
        }

        [HttpPost]

        public JsonResult DeleteLesson(int lessonId)
        {
            var success = UOW.LessonRepository.DeleteLesson(lessonId);
            return Json(success);
        }
    }
}