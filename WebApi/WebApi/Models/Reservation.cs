using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Reservation {
       // [Key]
        public long Id {get; set;}

       // [Key]
       //[ForeignKey("Seats")]
        public int SeatID { get; set; }

       // [Key]
       // [ForeignKey("Users")]
        public int UserID { get; set; }

       // [Key]
       public int SessionID { get; set; }
    }
}
