using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.DB.DTOS
{
    public class UpdateUserRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
