using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel.Modal;

namespace DataModel
{
    public class SolarManager
    {
        private DataContext Context = new DataContext();
        public int Add(string SolarServiceType, string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacityKW, float ShadowFreeArea, string IntallationReqForm, string CompanyName, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var Solar = new Modal.Solar
                {
                    SolarServiceType = SolarServiceType,
                    ApplicantType = ApplicantType,
                    Pincode = pincode,
                    Address = address,
                    MonthlyElectricityBill = MonthlyElectricityBill,
                    ProposedCapacityKW = ProposedCapacityKW,
                    ShadowFreeArea = ShadowFreeArea,
                    IntallationReqForm = IntallationReqForm,
                    CompanyName = CompanyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    UserId = userId,
                    Location = location,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.Solars.Add(Solar);
                Context.SaveChanges();
                return Solar.SolarID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int AddSolarRoofTop(string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacityKW, float ShadowFreeArea, string CompanyName, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var SolarRoofTop = new Modal.SolarRoofTop
                {
                    ApplicantType = ApplicantType,
                    Pincode = pincode,
                    Address = address,
                    MonthlyElectricityBill = MonthlyElectricityBill,
                    ProposedCapacityKW = ProposedCapacityKW,
                    ShadowFreeArea = ShadowFreeArea,
                    CompanyName = CompanyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    UserId = userId,
                    Location = location,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.SolarRoofTops.Add(SolarRoofTop);
                Context.SaveChanges();
                return SolarRoofTop.SolarRoofTopID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int AddSolarPark(string ApplicantType, string pincode, string address, float EstimatedCost, float ProposedCapacityKW, float ShadowFreeArea, string CompanyName, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var SolarPark = new Modal.SolarPark
                {
                    ApplicantType = ApplicantType,
                    Pincode = pincode,
                    Address = address,
                    EstimatedCost = EstimatedCost,
                    ProposedCapacityKW = ProposedCapacityKW,
                    ShadowFreeArea = ShadowFreeArea,
                    CompanyName = CompanyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    UserId = userId,
                    Location = location,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.SolarParks.Add(SolarPark);
                Context.SaveChanges();
                return SolarPark.SolarParkID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int AddSolarPumps(string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacityHP, float ShadowFreeArea, string CompanyName, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var SolarPump = new Modal.SolarPump
                {
                    ApplicantType = ApplicantType,
                    Pincode = pincode,
                    Address = address,
                    MonthlyElectricityBill = MonthlyElectricityBill,
                    ProposedCapacityHP = ProposedCapacityHP,
                    FarmArea = ShadowFreeArea,
                    CompanyName = CompanyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    UserId = userId,
                    Location = location,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.SolarPumps.Add(SolarPump);
                Context.SaveChanges();
                return SolarPump.SolarPumpID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int AddSolarWaterHeaters(string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacity, float ShadowFreeArea, string CompanyName, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var SolarWaterHeater = new Modal.SolarWaterHeater
                {
                    ApplicantType = ApplicantType,
                    Pincode = pincode,
                    Address = address,
                    MonthlyElectricityBill = MonthlyElectricityBill,
                    ProposedCapacity = ProposedCapacity,
                    ShadowFreeArea = ShadowFreeArea,
                    CompanyName = CompanyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    UserId = userId,
                    Location = location,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.SolarWaterHeaters.Add(SolarWaterHeater);
                Context.SaveChanges();
                return SolarWaterHeater.SolarWaterHeaterID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int AddSolarEquipments(string SolarServiceType, string ApplicantType, string pincode, string address, float Budget, float EquipmentNumber, string Message, string CompanyName, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var SolarEquipment = new Modal.SolarEquipment
                {
                    SolarServiceType = SolarServiceType,
                    ApplicantType = ApplicantType,
                    Pincode = pincode,
                    Address = address,
                    Budget = Budget,
                    EquipmentNumber = EquipmentNumber,
                    Message = Message,
                    CompanyName = CompanyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    UserId = userId,
                    Location = location,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.SolarEquipments.Add(SolarEquipment);
                Context.SaveChanges();
                return SolarEquipment.SolarEquipmentID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int AddServices(string address, string pincode, string servicelookingtype, string servicerequesttype, string servicerequestmsg, string companyname, string contactpersonname, string email, string mobileno, int userId, string location)
        {
            try
            {
                var solarService = new Modal.SolarService
                {
                    Pincode = pincode,
                    Address = address,
                    ServiceLookingType = servicelookingtype,
                    ServiceRequestType = servicerequesttype,
                    ServiceRequestMsg = servicerequestmsg,
                    CompanyName = companyname,
                    ContactPersonName = contactpersonname,
                    MobileNo = mobileno,
                    Email = email,
                    Location = location,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.SolarServices.Add(solarService);
                Context.SaveChanges();
                return solarService.SolarServiceID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public List<SolarService> GetSolarService()
        { return Context.SolarServices.ToList(); }
    }
}
