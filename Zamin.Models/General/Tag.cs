﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models.Content;

namespace Zamin.Models.General
{
    public class Tag
    {
        public int Id { get; set; }
        public string TagName { get; set; }
        public bool Active { get; set; }

        private ICollection<Poster> _posters;
        public ICollection<Poster> Posters
        {
            get { return _posters ?? (_posters = new List<Poster>()); }
            set { _posters = value; }
        }

        private ICollection<Activity> _activities;
        public ICollection<Activity> Activities
        {
            get { return _activities ?? (_activities = new List<Activity>()); }
            set { _activities = value; }
        }

        private ICollection<Article> _articles;
        public ICollection<Article> Articles
        {
            get { return _articles ?? (_articles = new List<Article>()); }
            set { _articles = value; }
        }

        private ICollection<GalleryImage> _galleryImages;
        public ICollection<GalleryImage> GalleryImages
        {
            get { return _galleryImages ?? (_galleryImages = new List<GalleryImage>()); }
            set { _galleryImages = value; }
        }

        private ICollection<LessonPlan> _lessonPlan;
        public ICollection<LessonPlan> LessonPlans
        {
            get { return _lessonPlan ?? (_lessonPlan = new List<LessonPlan>()); }
            set { _lessonPlan = value; }
        }

        private ICollection<Presentation> _presentations;
        public ICollection<Presentation> Presentations
        {
            get { return _presentations ?? (_presentations = new List<Presentation>()); }
            set { _presentations = value; }
        }

        private ICollection<WrittenLessonPlan> _writtenLessonPlans;
        public ICollection<WrittenLessonPlan> WrittenLessonPlans
        {
            get { return _writtenLessonPlans ?? (_writtenLessonPlans = new List<WrittenLessonPlan>()); }
            set { _writtenLessonPlans = value; }
        }

        private ICollection<Video> _videos;
        public ICollection<Video> Videos
        {
            get { return _videos ?? (_videos = new List<Video>()); }
            set { _videos = value; }
        }


        private ICollection<Course> _courses;
        public ICollection<Course> Courses
        {
            get { return _courses ?? (_courses = new List<Course>()); }
            set { _courses = value; }
        }


        private ICollection<Lesson> _lessons;
        public ICollection<Lesson> Lessons
        {
            get { return _lessons ?? (_lessons = new List<Lesson>()); }
            set { _lessons = value; }
        }


        private ICollection<WebsiteUser> _websiteUsers;
        public ICollection<WebsiteUser> WebsiteUsers
        {
            get { return _websiteUsers ?? (_websiteUsers = new List<WebsiteUser>()); }
            set { _websiteUsers = value; }
        }


    }
}