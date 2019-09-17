using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Site.Cemig.DPRST.Entidades
{
    public class EntidadeBase
    {

        [Key]
        public string ID { get; set; }

        public string UniqueKey { get; set; }

        public string UsuarioInclusao { get; set; }

        public DateTime DataInclusao { get; set; }

        public string UsuarioExclusao { get; set; }

        public DateTime DataExclusao { get; set; }

    }
}