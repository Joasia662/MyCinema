using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Movie
    {       
        public int Id { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public string ImageUrl { get; set; }
        public int Year { get; set; }
        public string Description { get; set; }
    }
}
