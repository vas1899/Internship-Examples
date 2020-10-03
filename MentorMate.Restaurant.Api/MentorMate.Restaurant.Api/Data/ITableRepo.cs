using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.Xml;
using System.Threading.Tasks;
using MentorMate.Restaurant.Api.Models;
using Microsoft.EntityFrameworkCore.Update.Internal;

namespace MentorMate.Restaurant.Api.Data
{
    public interface ITableRepo
    {
        bool SaveChanges();
        IEnumerable<Table> GetAllCommands();
        Table GetElementById(int Id);
        void CreateCommand(Table table);
        void UpdateTable(Table table);
        void DeleteTable(Table table);
    }
}
