using Demo.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.DB
{
    public class DemoContext : IdentityDbContext<AppUser>
    {
        public DemoContext(DbContextOptions<DemoContext> options): base(options)
        {

        }
    }
}
