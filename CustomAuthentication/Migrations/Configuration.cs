namespace CustomAuthentication.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CustomAuthentication.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(CustomAuthentication.DataContext context)
        {
            //// Default Roles --- No Changes In Role List
            //var userRoles = new List<Role>();
            //userRoles.Add(new Role { RoleName = "Admin" });
            //userRoles.Add(new Role { RoleName = "Anonymous" });
            //context.Roles.AddRange(userRoles);
            //context.SaveChanges();
        }
    }
}
