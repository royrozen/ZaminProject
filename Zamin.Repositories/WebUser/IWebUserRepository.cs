using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models;
using Zamin.WebModels;

namespace Zamin.Repositories 
{
    public interface IWebUserRepository: IDisposable
    {
        List<WebsiteUser> GetWebsiteUsers();
        List<WebsiteUser> GetWebUsersByFilter(WebsiteUserFilter filter);
        byte[] ExportWebUsersCsv(WebsiteUserFilter filter);

        WebsiteUser GetWebsiteUser(int websiteUserId);
        bool CreateWebsiteUser(WebsiteUserWebModel websiteUser);
        bool DeleteWebsiteUser(int websiteUserId);
        bool UpdateWebsiteUser(WebsiteUserWebModel websiteUser);
        WebsiteUser GetCurrentUserByLoginToken(string loginToken);
        WebsiteUser WebsiteLogin(string email, string password);
        bool IsAuthenticated(string loginToken);
    }
}
