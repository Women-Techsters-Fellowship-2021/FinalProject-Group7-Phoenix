using Demo.Models;
using System.Threading.Tasks;

namespace Demo.BL
{
    public interface ITokenGenerator
    {
        Task<string> GenerateToken(AppUser user);
    }
}