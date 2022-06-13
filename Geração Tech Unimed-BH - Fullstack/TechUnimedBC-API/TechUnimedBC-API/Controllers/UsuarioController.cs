using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TechUnimedBC_API.Controllers
{
    [Route("api/v1/usuario")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        [HttpPost]
        [Route("logar")]
        public IActionResult Logar(LoginViewModelInput loginViewModelInput)
        {
            return Ok(loginViewModelInput);
        }

        [HttpPost]
        [Route("registrar")]
        public IActionResult Registrar(RegistrarViewModelInput registerViewModelInput)
        {
            return Created("", registerViewModelInput);
        }
    }
}
