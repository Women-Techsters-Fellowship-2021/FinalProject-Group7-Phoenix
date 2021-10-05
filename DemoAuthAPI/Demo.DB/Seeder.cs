using Demo.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.DB
{
    public class Seeder
    {
        public async static Task Seed(RoleManager<IdentityRole> roleManager, UserManager<AppUser> userManager, DemoContext context)
        {
            await context.Database.EnsureCreatedAsync();
            if (!context.Users.Any())
            {
                List<string> roles = new List<string> { "Admin", "Regular"};

                foreach (var role in roles)
                {
                  await  roleManager.CreateAsync(new IdentityRole { Name = role });
                }


                List<AppUser> users = new List<AppUser>
                {
                    new AppUser
                    {
                        FirstName = "John",
                        LastName = "James",
                        Email = "JJ@gmail.com",
                        UserName = "JJgh",
                        PhoneNumber = "080479379494"
                    },
                     new AppUser
                    {
                        FirstName = "Anne",
                        LastName = "Perry",
                        Email = "AnneP@gmail.com",
                        UserName = "Annie",
                        PhoneNumber = "080745379494"
                    }
                };


                foreach (var user in users)
                {
                   await userManager.CreateAsync(user, "P@ssW0rd");
                    if (user == users[0])
                    {
                        await userManager.AddToRoleAsync(user, "Admin");
                    }
                    else
                    {
                        await userManager.AddToRoleAsync(user, "Admin");
                        await userManager.AddToRoleAsync(user, "Regular");
                    }

                }
            }
        }
    }
}
