﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel.Modal;

namespace DataModel
{
    public class JoinInstallerNetworkManager
    {
        private DataContext Context = new DataContext();
        public bool Add(string name, string email, string mobileNumber, string designation, string deskNumber, string companyName, string additionalNotes, string radioField, string checkboxField)
        {
            try
            {
                Context.JoinInstallerNetworks.Add(new Modal.JoinInstallerNetwork
                {
                    Name = name,
                    Email = email,
                    MobileNumber = mobileNumber,
                    Designation = designation,
                    DeskNumber = deskNumber,
                    CompanyName = companyName,
                    AdditionalNotes = additionalNotes,
                    RadioField = radioField,
                    CheckboxField = checkboxField,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                });
                var status = Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

    }
}