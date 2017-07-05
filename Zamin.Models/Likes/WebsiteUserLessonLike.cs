using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models.Content;

namespace Zamin.Models.Likes
{
    public class WebsiteUserLessonLike
    {
        public int Id { get; set; }

        public int WebsiteUserId { get; set; }

        [ForeignKey("WebsiteUserId")]
        public WebsiteUser WebsiteUser { get; set; }

        public int LessonId { get; set; }
        
        [ForeignKey("LessonId")]
        public Lesson Lesson { get; set; }
    }
}
