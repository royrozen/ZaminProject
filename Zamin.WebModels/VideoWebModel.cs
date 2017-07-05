using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zamin.WebModels
{
    public class VideoWebModel
    {

        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        public string CreateDate { get; set; }

        //public int CourseCategoryId { get; set; }

        //public string CourseCategoryName { get; set; }

        public bool IsAuthorizedContent { get; set; }

        //public bool IsActive { get; set; }

        public int NumOfLikes { get; set; }

        public int NumOfViews { get; set; }

        public string Url { get; set; }
        
        public List<TagWebModel> Tags { get; set; }

        public int VideoTypeId { get; set; }





    }
}
