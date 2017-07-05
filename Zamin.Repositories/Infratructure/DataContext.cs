using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models;
using Zamin.Models.Content;
using Zamin.Models.General;
using Zamin.Models.Likes;
using Zamin.Models.Membership;


namespace Zamin.Repositories
{
    public class DataContext : DbContext, IDisposedTracker
    {
        public bool IsDisposed { get; set; }


        public DbSet<User> Users { get; set; }
        public DbSet<WebsiteUser> WebsiteUsers { get; set; }

        public DbSet<Course>Course { get; set; }

        public DbSet<Lesson> Lesson { get; set; }

        public DbSet<LessonPlan> LessonPlan { get; set; }
        public DbSet<Presentation> Presentation { get; set; }

        public DbSet<WrittenLessonPlan> WrittenLessonPlan { get; set; }

        public DbSet<Poster> Poster { get; set; }

        public DbSet<Article> Article { get; set; }

        public DbSet<Activity> Activity { get; set; }

        public DbSet<GalleryImage> GalleryImage { get; set; }

        public DbSet<Video> Video { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<CourseCategory> CourseCategories { get; set; }

        public DbSet <WebsiteUserLessonLike> WebsiteUserLessonLikes{ get; set; }



        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }

}
