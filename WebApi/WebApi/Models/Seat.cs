using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Seat
    {
        public int Id { get; set; }

      //  [Key]
      //  [ForeignKey("RoomsId")]
        public int RoomID { get; set; }
        public Boolean Taken { get; set; }
        public int  Row { get; set; }
        public int Column { get; set; }
    }
}
