using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace UI.Models
{
    public class Customer
    {
        [Key]
        public int IDcc { get; set; }
        public string IdPerson { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string ImageView { get; set; }
        public string Phone { get; set; }
        public int? Coins { get; set; }
    }
}