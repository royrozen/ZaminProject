using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Net.WebSockets;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using System.Threading.Tasks;
using Zamin.Enums;
using Zamin.Models.General;

namespace Zamin.Models.Content
{
    public class Video
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }

        private ICollection<Tag> _tags;

        public ICollection<Tag> Tags
        {
            get { return _tags ?? (_tags = new List<Tag>()); }
            set { _tags = value; }
        }
   
        public DateTime? CreateDate { get; set; }

        public string Description { get; set; }

        public int VideoTypeId { get; set; }

        [NotMapped]
        public VideoType VideoType
        {
            get { return (VideoType)VideoTypeId; }
            set { VideoTypeId = (int)value; }
        }

        public int NumOfLikes { get; set; }
        public int NumOfViews { get; set; }
        public bool IsAuthorizedContent { get; set; }
        public bool IsActive { get; set; }

        private ICollection<WebsiteUser> _likedUsers;
        public ICollection<WebsiteUser> LikedUsers
        {
            get { return _likedUsers ?? (_likedUsers = new List<WebsiteUser>()); }
            set { _likedUsers = value; }
        }

    }

}