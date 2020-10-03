using AutoMapper;
using MentorMate.Restaurant.Api.Dtos;
using MentorMate.Restaurant.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MentorMate.Restaurant.Api.Profiles
{
    public class TableProfile : Profile
    {
        public TableProfile()
        {
            CreateMap<Table, TableReadDto>();
            CreateMap<TableCreateDto, Table>();
            CreateMap<TableUpdateDto, Table>();
            CreateMap<Table, TableUpdateDto>();
        }
    }
}
