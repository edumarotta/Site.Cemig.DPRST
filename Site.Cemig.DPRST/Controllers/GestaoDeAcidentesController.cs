using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Site_DPRST.Controllers
{
    public class GestaoDeAcidentesController : Controller
    {
        // GET: GestaoDeAcidentes
        public ActionResult ClassificacaoDeAcidentes()
        {
            return View();
        }

        public ActionResult CadastroDeAcidentes()
        {
            return View();
        }

        public ActionResult EstatisticasDeAcidentes()
        {
            return View();
        }

    }
}