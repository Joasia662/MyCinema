using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace WebApi.Models
{
    public class Session
    {
        public int Id { get; set; }

       // [Key]
       // [ForeignKey("MoviesId")]
        public int MovieID { get; set; }
        
      //  [Key]
       // [ForeignKey("RoomsId")]
        public int RoomID { get; set; }

        [DataType(DataType.Date)]
        public DateTime startDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime endDate { get; set; }

        public string picture { get; set; }



    }
}
