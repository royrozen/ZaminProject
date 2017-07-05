using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.WebModels;
using Zamin.Models.Content;
namespace Zamin.Repositories
{
    public interface IVideoRepository : IDisposable
    {
        List<Video> GetVideos(int videoType);
        Video GetVideo(int videoId);
        bool CreateVideo(VideoWebModel video);
        bool DeleteVideo(int videoId );
        bool UpdateVideo(VideoWebModel video);
        List<Video> GetYouTubeVideos(bool isAuthorized);
    }
}