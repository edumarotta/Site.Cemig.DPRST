using System.Web;
using System.Web.Mvc;

namespace Site.Cemig.DPRST
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
