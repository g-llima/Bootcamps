using System.ComponentModel.DataAnnotations;

public class RegistrarViewModelInput
{
    [Required(ErrorMessage = "O login é obrigatório")]
    public string Login { get; set; }

    [Required(ErrorMessage = "O e-mail é obrigatório")]
    public string Email { get; set; }

    [Required(ErrorMessage = "A senha é obrigatório")]
    public string Senha { get; set; }
}
