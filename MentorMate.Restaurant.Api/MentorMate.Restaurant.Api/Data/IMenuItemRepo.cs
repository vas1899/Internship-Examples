using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MentorMate.Restaurant.Api.Models;

namespace MentorMate.Restaurant.Api.Data
{
    public interface IMenuItemRepo
    {
        bool SaveChanges();
        IEnumerable<MenuItem> GetAllMenuItems();
        MenuItem GetElementById(int Id);
        void CreateCommand(MenuItem menuItem);
        void UpdateMenuItem(MenuItem menuItem);
        void DeleteMenuItem(MenuItem menuItem);
        
    }
}
