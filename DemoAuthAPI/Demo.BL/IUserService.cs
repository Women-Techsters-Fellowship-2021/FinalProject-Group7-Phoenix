using Demo.DB.DTOS;
using System.Threading.Tasks;

namespace Demo.BL
{
    public interface IUserService
    {
        Task<bool> DeleteUser(string userId);
        Task<UserResponseDTO> GetUser(string userId);
        Task<bool> Update(string userId, UpdateUserRequest updateUser);
    }
}