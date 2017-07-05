﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Zamin.WebModels
{
   public class LessonPlanWebModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        public string CreateDate { get; set; }

        public bool IsAuthorizedContent { get; set; }

        public int NumOfLikes { get; set; }

        public int NumOfViews { get; set; }

        public int NumOfDownloads { get; set; }

        public List<string> PresentationFilesUrl { get; set; }

        public List<string> PresentationUrlsToDelete { get; set; }

        public List<HttpPostedFileBase> PresentationFiles { get; set; }

        public List<string> WrittenLessonPlansFilesUrl { get; set; }

        public List<string> WrittenLessonPlansUrlsToDelete { get; set; }

        public List<HttpPostedFileBase> WrittenLessonPlansFiles { get; set; }

        public List<TagWebModel> Tags { get; set; }

 
       
    }
}