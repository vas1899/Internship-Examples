using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MentorMate.Restaurant.Api.Dtos;
using MentorMate.Restaurant.Api.Models;
using Microsoft.EntityFrameworkCore.Update.Internal;

namespace MentorMate.Restaurant.Api.Profiles
{
    public class MenuItemProfile : Profile
    {
        public MenuItemProfile()
        {
            CreateMap<MenuItem, MenuItemReadDto>();
            CreateMap<MenuUtemCreateDto, MenuItem>();
            CreateMap<MenuItemUpdateDto, MenuItem>();
            CreateMap<MenuItem, MenuItemUpdateDto>();
        }
    }
}
