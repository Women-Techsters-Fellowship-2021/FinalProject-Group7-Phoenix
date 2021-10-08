using Demo.DB.DTOS;
using System.Threading.Tasks;

namespace Demo.BL
{
    public interface IAuthentication
    {
        Task<UserResponseDTO> Login(UserRequest userRequest);
        Task<UserResponseDTO> Register(RegisterationRequest registerationRequest);
    }
}