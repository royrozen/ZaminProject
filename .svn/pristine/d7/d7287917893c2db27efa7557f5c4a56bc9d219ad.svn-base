using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models.Content;

namespace Zamin.Models.General
{
    public class Presentation
    {
        public int Id { get; set; }
        public string FileUrl{ get; set; }
        public int LessonPlanId { get; set; }

        [ForeignKey("LessonPlanId")]
        public LessonPlan LessonPlan { get; set; }

        private ICollection<WebsiteUser> _likedUsers;
        public ICollection<WebsiteUser> LikedUsers
        {
            get { return _likedUsers ?? (_likedUsers = new List<WebsiteUser>()); }
            set { _likedUsers = value; }
        }
    }
}
