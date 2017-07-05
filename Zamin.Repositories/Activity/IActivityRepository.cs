using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.WebModels;
using Zamin.Models.Content;

namespace Zamin.Repositories
{
    public interface IActivityRepository : IDisposable
    {
        List<Activity> GetActivities();
        Activity GetActivity(int activityId);
        bool CreateActivity(ActivityWebModel activity);
        bool DeleteActivity(int activityId);
        bool UpdateActivity(ActivityWebModel activity);

        bool LikeActivity(string loginToken, int activityId);
    }
}
