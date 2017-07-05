﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models.General;

namespace Zamin.Models.Content
{
   public class Activity
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public DateTime? CreateDate { get; set; }

        private ICollection<Tag> _tags;

        public ICollection<Tag> Tags
        {
            get { return _tags ?? (_tags = new List<Tag>()); }
            set { _tags = value; }
        }
        private ICollection<WebsiteUser> _websiteUserActivityLike;
        public ICollection<WebsiteUser> WebsiteUserActivityLike
        {
            get { return _websiteUserActivityLike ?? (_websiteUserActivityLike = new List<WebsiteUser>()); }
            set { _websiteUserActivityLike = value; }
        }

        public string FileUrl { get; set; }
        public string Description { get; set; }
        public int NumOfLikes { get; set; }
        public int NumOfDownloads { get; set; }
        public bool IsAuthorizedContent { get; set; }

        public bool IsActive { get; set; }
    }
}