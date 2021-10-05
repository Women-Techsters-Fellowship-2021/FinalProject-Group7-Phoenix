using Demo.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.DB.DTOS.Mappings
{
    public class UserMappings
    {
        public static UserResponseDTO GetUserResponse(AppUser user)
        {
            return new UserResponseDTO
            {
                Email = user.Email,
                LastName = user.LastName,
                FirstName = user.FirstName,
                PhoneNumber = user.PhoneNumber,
                Id = user.Id
            };
        }

        public static AppUser GetUser(RegisterationRequest request)
        {
            return new AppUser
            {
                Email = request.Email,
                PhoneNumber = request.PhoneNumber,
                LastName = request.LastName,
                FirstName = request.FistName,
                UserName = string.IsNullOrWhiteSpace(request.UserName) ? request.Email : request.UserName,
            };
        }
    }
}
