using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Zamin.Server.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public RedirectResult Index()
        {
            return Redirect("Http://ec2-52-213-66-116.eu-west-1.compute.amazonaws.com/FrontClient/index.html");
        }
        public RedirectResult Admin()
        {
            return Redirect("Http://ec2-52-213-66-116.eu-west-1.compute.amazonaws.com/FrontAdmin/index.html");
        }
    }
}