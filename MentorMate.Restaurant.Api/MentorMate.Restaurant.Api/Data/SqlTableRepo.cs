using MentorMate.Restaurant.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MentorMate.Restaurant.Api.Data
{
    public class SqlTableRepo : ITableRepo
    {
        private readonly RestaurantContext _restaurantContext;

        public SqlTableRepo(RestaurantContext restaurantContext)
        {
            _restaurantContext = restaurantContext;
        }

        public void CreateCommand(Table table)
        {
            if (table == null)
            {
                throw new ArgumentNullException(nameof(table));
            }
            _restaurantContext.Tables.Add(table);
        }

        public void DeleteTable(Table table)
        {
            if (table == null)
            {
                throw new ArgumentNullException(nameof(table));
            }
            _restaurantContext.Tables.Remove(table);
        }

        public IEnumerable<Table> GetAllCommands()
        {
            return _restaurantContext.Tables.ToList();
        }

        public Table GetElementById(int Id)
        {
            return _restaurantContext.Tables.FirstOrDefault(p => p.Id == Id);
        }

        public bool SaveChanges()
        {
            return (_restaurantContext.SaveChanges() >= 0);
        }

        public void UpdateTable(Table table)
        {
            
        }
    }
}
