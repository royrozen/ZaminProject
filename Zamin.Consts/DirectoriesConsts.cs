﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zamin.Consts
{
    public static class DirectoriesConsts
    {
        public static string  PostersFolder
        {
            get { return ConfigurationManager.AppSettings["postersFolder"]; }
        }
        public static string GalleryImagesFolder
        {
            get { return ConfigurationManager.AppSettings["galleryImagesFolder"]; }
        }

        public static string CoursesFolder
        {
            get { return ConfigurationManager.AppSettings["coursesFolder"]; }
        }

        public static string LessonPlansPresentationsFolder
        {
            get { return ConfigurationManager.AppSettings["lessonPlansPresentationsFolder"]; }
        }

        public static string LessonPlansWrittenFolder
        {
            get { return ConfigurationManager.AppSettings["lessonPlansWrittenFolder"]; }

        }
        public static string ArticlesFolder
        {
            get { return ConfigurationManager.AppSettings["articlesFolder"]; }
        }

        public static string ActivitiesFolder
        {
            get { return ConfigurationManager.AppSettings["activitiesFolder"]; }
        }
        public static string ZipFolder
        {
            get { return ConfigurationManager.AppSettings["zipFolder"]; }
        }
        
        



    }
}