using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MentorMate.Restaurant.Api.Dtos
{
    public class TableUpdateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
