using MentorMate.Restaurant.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MentorMate.Restaurant.Api.Data
{
    public class SqlMenuItemRepo : IMenuItemRepo
    {
        private readonly RestaurantContext _restaurantContext;

        public SqlMenuItemRepo(RestaurantContext restaurantContext)
        {
            _restaurantContext = restaurantContext;
        }

        public void CreateCommand(MenuItem menuItem)
        {
            if(menuItem == null)
            {
                throw new ArgumentNullException(nameof(menuItem));
            }
            _restaurantContext.MenuItems.Add(menuItem);
        }

        public void DeleteMenuItem(MenuItem menuItem)
        {
            if (menuItem == null)
            {
                throw new ArgumentNullException(nameof(menuItem));
            }
            _restaurantContext.MenuItems.Remove(menuItem);
        }

        public IEnumerable<MenuItem> GetAllMenuItems()
        {
            return _restaurantContext.MenuItems.ToList();
        }

        public MenuItem GetElementById(int Id)
        {
            return _restaurantContext.MenuItems.FirstOrDefault(p => p.Id == Id);
        }

        public bool SaveChanges()
        {
            return (_restaurantContext.SaveChanges() >= 0);
        }

        public void UpdateMenuItem(MenuItem menuItem)
        {
            
        }
    }
}
