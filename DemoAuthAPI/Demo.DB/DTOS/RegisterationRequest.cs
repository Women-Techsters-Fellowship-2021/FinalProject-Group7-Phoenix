using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Demo.DB.DTOS
{
    public class RegisterationRequest
    {
        [Required]
        public string FistName { get; set; }
        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
