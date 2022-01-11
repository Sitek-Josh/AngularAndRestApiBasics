using AngularAndRestAPI.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAndRestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTeachers()
        {
            var teachers = new List<TeacherDto>
            {
                new TeacherDto{ Id = 1, FirstName = "John", LastName = "Doe"},
                new TeacherDto{ Id = 1, FirstName = "Jane", LastName = "Doe"},
                new TeacherDto{ Id = 1, FirstName = "Jim", LastName = "Harrison"},
                new TeacherDto{ Id = 1, FirstName = "Ken", LastName = "Hammond"},
            };
            return Ok(teachers);
        }
        [HttpPost]
        public IActionResult AddTeacher()
        {
            return Ok(null);
        }
        [HttpPut]
        public IActionResult UpdateTeacher()
        {
            return NoContent();
        }
        [HttpDelete]
        public IActionResult DeleteTeacher()
        {
            return NoContent();
        }
    }
}
