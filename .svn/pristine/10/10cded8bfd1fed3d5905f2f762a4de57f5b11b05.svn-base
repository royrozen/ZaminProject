using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models.Content;
using Zamin.WebModels;

namespace Zamin.Repositories
{
    public interface ILessonPlanRepository : IDisposable 
    {
        List<LessonPlan> GetLessonPlans();
        LessonPlan GetLessonPlan(int lessonPlanId);
        bool CreateLessonPlan(LessonPlanWebModel lessonPlan);
        bool DeleteLessonPlan(int lessonPlanId);
        bool UpdateLessonPlan(LessonPlanWebModel lessonPlan);
        bool LikeLessonPlan(string loginToken, int lessonPlanId);

    }
}
