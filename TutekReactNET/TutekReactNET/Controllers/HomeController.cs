using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TutekReactNET.Models;

namespace TutekReactNET.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CommentModel> _comments;
        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id=1,
                    Author="Marcin",
                    Text="Tu Marcin z ReactJS.NET"
                },
                new CommentModel
                {
                    Id=2,
                    Author="Rafał",
                    Text="Garage webSERVICE"
                },
                new CommentModel
                {
                    Id=3,
                    Author="Agnieszka",
                    Text="*Świetny artykuł"
                }
            };
        }
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        [OutputCache(Location =System.Web.UI.OutputCacheLocation.None)]
        public ActionResult Comments()
        {
            return Json(_comments, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult AddComment(CommentModel comment)
        {
            //badamy ostatnie ID i zwiekszamy
            comment.Id = _comments.Count + 1;
            _comments.Add(comment);
            return Content("Success :)");
        }
    }
}