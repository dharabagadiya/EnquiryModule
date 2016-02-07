
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
        public DbSet<Hydro> Hydros { get; set; }
        public DbSet<HydroService> HydroServices { get; set; }
        public DbSet<Bio> Bios { get; set; }
        public DbSet<BioService> BioServices { get; set; }
        public DbSet<Solar> Solars { get; set; }
        public DbSet<SolarRoofTop> SolarRoofTops { get; set; }
        public DbSet<SolarPark> SolarParks { get; set; }
        public DbSet<SolarPump> SolarPumps { get; set; }
        public DbSet<SolarWaterHeater> SolarWaterHeaters { get; set; }
        public DbSet<SolarService> SolarServices { get; set; }
        public DbSet<SolarEquipment> SolarEquipments { get; set; }
        public DbSet<Wind> Winds { get; set; }
        public DbSet<WindService> WindServices { get; set; }
        public DbSet<JoinInstallerNetwork> JoinInstallerNetworks { get; set; }
        public DbSet<Offer> Offers { get; set; }
        public DbSet<UserDetail> UserDetails { get; set; }
        public DbSet<FeedBack> FeedBacks { get; set; }
        public DbSet<UploadDocument> UploadDocuments { get; set; }
    }
}