using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MentorMate.Restaurant.Api.Data;
using MentorMate.Restaurant.Api.Dtos;
using MentorMate.Restaurant.Api.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace MentorMate.Restaurant.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuItemsController : ControllerBase
    {
        public MenuItemsController(IMenuItemRepo menuItemRepo, IMapper mapper)
        {
            _mapper = mapper;
            _menuItemRepo = menuItemRepo;
        }

        private readonly IMapper _mapper;
        private readonly IMenuItemRepo _menuItemRepo;

        [HttpGet]
        public ActionResult<IEnumerable<MenuItemReadDto>> GetAllMenuitems()
        {
            var commandItem = _menuItemRepo.GetAllMenuItems();
            return Ok(_mapper.Map<IEnumerable<MenuItemReadDto>>(commandItem));
        }

        // GET: api/menuitems/{id}
        [HttpGet("{id}", Name = "GetMenuItemById")]
        public ActionResult<MenuItemReadDto> GetMenuItemById(int id)
        {
            var commandItem = _menuItemRepo.GetElementById(id);
            if(commandItem == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<MenuItemReadDto>(commandItem));
        }

        // POST: api/menuitems/
        [HttpPost]
        public ActionResult<MenuItemReadDto> CreateMenuItem(MenuUtemCreateDto menuItemCreateDto)
        {
            var menuItemModel = _mapper.Map<MenuItem>(menuItemCreateDto);
            _menuItemRepo.CreateCommand(menuItemModel);
            _menuItemRepo.SaveChanges();

            var commandReadDto = _mapper.Map<MenuItemReadDto>(menuItemModel);

            return CreatedAtRoute(nameof(GetMenuItemById), new { Id = commandReadDto.Id}, commandReadDto);
        }

        // PUT: api/menuitems/{id}
        [HttpPut("id")]
        public ActionResult<MenuItemReadDto> UpdateMenuItem(int id, [FromBody] MenuItemUpdateDto menuItemUpdateDto)
        {
            var menuItemModelFromRepo = _menuItemRepo.GetElementById(id);
            if (menuItemModelFromRepo == null)
            {
                return NotFound();
            }

            _mapper.Map(menuItemUpdateDto, menuItemModelFromRepo);
            _menuItemRepo.UpdateMenuItem(menuItemModelFromRepo);
            _menuItemRepo.SaveChanges();

            return NoContent();
        }

        // PATCH: api/menuitems/{id}
        [HttpPatch("id")]
        public ActionResult<MenuItemReadDto> PartialUpdateMenuItem(int id, [FromBody] JsonPatchDocument<MenuItemUpdateDto> patchDocument)
        {
            var menuItemModelFromRepo = _menuItemRepo.GetElementById(id);
            if (menuItemModelFromRepo == null)
            {
                return NotFound();
            }

            var menuItemPatch = _mapper.Map<MenuItemUpdateDto>(menuItemModelFromRepo);
            patchDocument.ApplyTo(menuItemPatch, ModelState);
            if (!TryValidateModel(menuItemPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(menuItemPatch, menuItemModelFromRepo);
            _menuItemRepo.UpdateMenuItem(menuItemModelFromRepo);
            _menuItemRepo.SaveChanges();

            return NoContent();
        }

        // DELETE: api/menuitems/{id}
        [HttpDelete("id")]
        public ActionResult<MenuItemReadDto> DeleteMenuItem(int id)
        {
            var menuItemModelFromRepo = _menuItemRepo.GetElementById(id);
            if (menuItemModelFromRepo == null)
            {
                return NotFound();
            }

            _menuItemRepo.DeleteMenuItem(menuItemModelFromRepo);
            _menuItemRepo.SaveChanges();

            return NoContent();
        }
    }
}
