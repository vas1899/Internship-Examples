using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MentorMate.Restaurant.Api.Dtos
{
    public class MenuItemReadDto
    {
        // Add only the ones that needs to be presented from the MenuItem.cs
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Picture { get; set; }
        public string Ingredients { get; set; }
        public double Price { get; set; }
        public bool IsEnabled { get; set; }
    }
}
