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
    public class TablesController : ControllerBase
    {
        public TablesController(ITableRepo tableRepo, IMapper mapper)
        {
            _tableRepo = tableRepo;
            _mapper = mapper;
        }

        private readonly ITableRepo _tableRepo;
        private readonly IMapper _mapper;

        [HttpGet]
        public ActionResult<IEnumerable<Table>> GetAllTables()
        {
            var commandsItem = _tableRepo.GetAllCommands();
            return Ok(commandsItem);
        }

        // GET: api/menuitems/5
        [HttpGet("{id}", Name = "GetTableById")]
        public ActionResult<TableReadDto> GetTableById(int id)
        {
            var commandItem = _tableRepo.GetElementById(id);
            if (commandItem == null)
            {
                return NotFound();
            }

            return _mapper.Map<TableReadDto>(commandItem);
        }

        // POST: api/menuitems/
        [HttpPost]
        public ActionResult<MenuItemReadDto> CreateMenuItem(TableCreateDto tableCreateDto)
        {
            var tableModel = _mapper.Map<Table>(tableCreateDto);
            _tableRepo.CreateCommand(tableModel);
            _tableRepo.SaveChanges();

            var commandReadDto = _mapper.Map<MenuItemReadDto>(tableModel);

            return CreatedAtRoute(nameof(GetTableById), new { Id = commandReadDto.Id }, commandReadDto);
        }

        // PUT: api/tables/{id}
        [HttpPut]
        public ActionResult<MenuItemReadDto> UpdateTable(int id, [FromBody] MenuItemUpdateDto tableUpdateDto)
        {
            var tableModelFromRepo = _tableRepo.GetElementById(id);
            if (tableModelFromRepo == null)
            {
                return NotFound();
            }

            _mapper.Map(tableUpdateDto, tableModelFromRepo);
            _tableRepo.UpdateTable(tableModelFromRepo);
            _tableRepo.SaveChanges();

            return NoContent();
        }

        // PATCH: api/tables/{id}
        [HttpPatch("id")]
        public ActionResult<TableUpdateDto> PartialUpdateTable(int id, [FromBody] JsonPatchDocument<TableUpdateDto> patchDocument)
        {
            var tableModelFromRepo = _tableRepo.GetElementById(id);
            if (tableModelFromRepo == null)
            {
                return NotFound();
            }

            var tablePatch = _mapper.Map<TableUpdateDto>(tableModelFromRepo);
            patchDocument.ApplyTo(tablePatch, ModelState);
            if (!TryValidateModel(tablePatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(tablePatch, tableModelFromRepo);
            _tableRepo.UpdateTable(tableModelFromRepo);
            _tableRepo.SaveChanges();

            return NoContent();
        }

        // DELETE: api/tables/{id}
        [HttpDelete("id")]
        public ActionResult<MenuItemReadDto> DeleteTables(int id)
        {
            var tableModelFromRepo = _tableRepo.GetElementById(id);
            if (tableModelFromRepo == null)
            {
                return NotFound();
            }

            _tableRepo.DeleteTable(tableModelFromRepo);
            _tableRepo.SaveChanges();

            return NoContent();
        }
    }
}
