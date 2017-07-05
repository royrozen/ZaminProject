using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Enums;
using Zamin.Helpers;
using Zamin.Models.Content;
using Zamin.WebModels;
namespace Zamin.Repositories
{
    public class GalleryImageRepository : RepositoryBase<DataContext>, IGalleryImageRepository
    {
          public GalleryImageRepository()
        {

        }

          public GalleryImageRepository(DataContext dataContext)
            : base(dataContext)
        {

        }

        public List<GalleryImage> GetGalleryImages()
        {
            return  DataContext.GalleryImage.Where(g=> g.IsActive).ToList();
        }

        public GalleryImage GetGalleryImage(int galleryImageId)
        {
            return DataContext.GalleryImage.Include(g => g.Tags).FirstOrDefault(g => g.Id == galleryImageId);
        }

        public bool CreateGalleryImage(GalleryImageWebModel galleryImage)
        {
            var dbModel = AutoMapper.Mapper.Map<GalleryImageWebModel, GalleryImage>(galleryImage);

            //Save tags
            if (galleryImage.Tags != null)
            {
                foreach (var tagWebModel in galleryImage.Tags)
                {
                    dbModel.Tags.Add(DataContext.Tags.First(t => t.Id == tagWebModel.Id));
                }
            }

            //Save image file
            var fileName = Guid.NewGuid() + ".png";
            dbModel.ImageFileName = fileName;
            dbModel.IsActive = true;
            dbModel.CreateDate=DateTime.Now;
            FileHelper.SaveFile(galleryImage.ImageFile, DirectoriesEnum.GalleryImages, fileName);

            DataContext.GalleryImage.Add(dbModel);
            return Save();
        }

        public bool DeleteGalleryImage(int galleryImageId)
        {
            var galleryImage = DataContext.GalleryImage.FirstOrDefault(g => g.Id == galleryImageId);
            if (galleryImage == null) return false;

            galleryImage.IsActive = false;
            return Save();
        }

        public bool UpdateGalleryImage(GalleryImageWebModel galleryImage)
        {
            var dbModel = DataContext.GalleryImage.Include(g => g.Tags).SingleOrDefault(g => g.Id == galleryImage.Id);
            if (dbModel == null) return false;

            AutoMapper.Mapper.Map(galleryImage, dbModel);

            //save Tags
            if (galleryImage.Tags != null && galleryImage.Tags.Count > 0)
            {
                foreach (var tagDb in dbModel.Tags.ToList())
                {
                    //Doesnt exist in webModel (removed by client)
                    if (!galleryImage.Tags.Any(t => t.Id == tagDb.Id))
                    {
                        dbModel.Tags.Remove(tagDb);
                    }
                }
                foreach (var tagWebModel in galleryImage.Tags.ToList())
                {
                    //Doesnt exist in db (added by client)
                    if (!dbModel.Tags.Any(t => t.Id == tagWebModel.Id))
                    {
                        dbModel.Tags.Add(DataContext.Tags.First(t => t.Id == tagWebModel.Id));
                    }
                }
            }
            else //All tags were deleted
            {
                foreach (var tag in dbModel.Tags.ToList())
                {
                    dbModel.Tags.Remove(tag);
                }
            }
            if (galleryImage.ImageFile != null)
            {
                var fileName = Guid.NewGuid() + ".png";
                dbModel.ImageFileName = fileName;
                dbModel.CreateDate = DateTime.Now;
                dbModel.IsActive = true;
                FileHelper.SaveFile(galleryImage.ImageFile, DirectoriesEnum.GalleryImages, fileName);
            }
            return Save();
        }
    }
}