using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models.Content;
using Zamin.WebModels;

namespace Zamin.Repositories
{
   public interface IGalleryImageRepository : IDisposable
    {
        List<GalleryImage> GetGalleryImages();
        GalleryImage GetGalleryImage(int galleryImageId);
        bool CreateGalleryImage(GalleryImageWebModel galleryImage);
        bool DeleteGalleryImage(int galleryImageId);
        bool UpdateGalleryImage(GalleryImageWebModel galleryImage);
    }
}
