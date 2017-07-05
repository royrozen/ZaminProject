using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models.General;

namespace Zamin.Models.Content
{

      public class GalleryImage
      {
          public int Id { get; set; }

          public DateTime? CreateDate { get; set; }

          public string Name { get; set; }

          public string ImageFileName { get; set; }

          private ICollection<Tag> _tags;

          public ICollection<Tag> Tags
          {
              get { return _tags ?? (_tags = new List<Tag>()); }
              set { _tags = value; }
          }
          public int NumOfLikes { get; set; }
          public int NumOfDownloads { get; set; }
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

