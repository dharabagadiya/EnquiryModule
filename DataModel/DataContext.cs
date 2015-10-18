
#region Using Namespaces
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using DataModel.Modal;
using CustomAuthentication;
#endregion

namespace DataModel
{
    public class DataContext : DbContext
    {
        public DataContext() : base("DefaultConnection")
        {
        }
        public DataContext(string connectionName) : base(connectionName)
        {
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //CustomAuthentication.CustomMembershipProvider.OnModelCreating(modelBuilder);
            //UserManager.OnModelCreating(modelBuilder);
        }
        public DbSet<Enquiry> Enquires { get; set; }
        public DbSet<Enquiry3> Enquires3 { get; set; }
        public DbSet<Enquiry4> Enquires4 { get; set; }
        public DbSet<Solar> Solars { get; set; }
        public DbSet<Wind> Winds { get; set; }
        public DbSet<JoinInstallerNetwork> JoinInstallerNetworks { get; set; }
    }
}