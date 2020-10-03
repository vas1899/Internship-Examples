using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MentorMate.Restaurant.Api.Dtos
{
    public class MenuUtemCreateDto
    {
        [Required]
        public string Type { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Picture { get; set; }
        [Required]
        public string Ingredients { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public bool IsEnabled { get; set; }
    }
}
