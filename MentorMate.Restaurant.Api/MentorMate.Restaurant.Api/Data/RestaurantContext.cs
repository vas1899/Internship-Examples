using MentorMate.Restaurant.Api.Controllers;
using MentorMate.Restaurant.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MentorMate.Restaurant.Api.Data
{
    public class RestaurantContext : DbContext
    {
        public RestaurantContext(DbContextOptions<RestaurantContext> opt) : base(opt)
        {

        }

        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<Table> Tables { get; set; }
    }
}
