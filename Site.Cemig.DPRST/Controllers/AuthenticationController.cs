using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Site.Cemig.DPRST.Controllers
{
    public class AuthenticationController : Controller
    {
        // GET: Authentication
        [HttpPost]
        public ActionResult LogOn(string userName, string password, string returnUrl)
        {
            return View();
        }
    }
}