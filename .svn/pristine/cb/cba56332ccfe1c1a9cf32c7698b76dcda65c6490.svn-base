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
    public class LessonPlanController : BaseController
    {
        // GET: Poster
        public JsonResult GetLessonPlans()
        {
            var lessonPlans = UOW.LessonPlanRepository.GetLessonPlans();
            var webModels = lessonPlans.Select(AutoMapper.Mapper.Map<LessonPlan, LessonPlanWebModel>).ToList();



            foreach (var lessonPlan in lessonPlans)
            {

               var lessonWebModel = webModels.First(w => w.Id == lessonPlan.Id);

                lessonWebModel.PresentationFilesUrl = new List<string>();
                foreach (var presentationUrl in lessonPlan.Presentations)
                {
                    lessonWebModel.PresentationFilesUrl.Add(presentationUrl.FileUrl);
                }

                lessonWebModel.WrittenLessonPlansFilesUrl = new List<string>();
                foreach (var writtenPlanUrl in lessonPlan.WrittenLessonPlans)
                {
                    lessonWebModel.WrittenLessonPlansFilesUrl.Add(writtenPlanUrl.FileUrl);
                }
                        
            }


            return Json(webModels, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetLessonPlan(int lessonPlanId)
        {
            var lessonPlan = UOW.LessonPlanRepository.GetLessonPlan(lessonPlanId);

            var webModel = AutoMapper.Mapper.Map<LessonPlan, LessonPlanWebModel>(lessonPlan);


                  webModel.PresentationFilesUrl = new List<string>();
                foreach (var presentationUrl in lessonPlan.Presentations)
                {
                webModel.PresentationFilesUrl.Add(presentationUrl.FileUrl);
                }

                     webModel.WrittenLessonPlansFilesUrl = new List<string>();
                foreach (var writtenPlanUrl in lessonPlan.WrittenLessonPlans)
                {
                  webModel.WrittenLessonPlansFilesUrl.Add(writtenPlanUrl.FileUrl);
                }

 

            return Json(webModel, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SaveLessonPlan(LessonPlanWebModel lessonPlan)
        {
            var success = false;
            success = lessonPlan.Id == 0 ? UOW.LessonPlanRepository.CreateLessonPlan(lessonPlan) : UOW.LessonPlanRepository.UpdateLessonPlan(lessonPlan);

            return Json(success);
        }

        [HttpPost]

        public JsonResult DeleteLessonPlan(int lessonPlanId)
        {
            var success = UOW.LessonPlanRepository.DeleteLessonPlan(lessonPlanId);
            return Json(success);
        }
    }
}