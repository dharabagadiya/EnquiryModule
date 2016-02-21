using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class ServiceManager
    {
        private DataContext Context = new DataContext();
        public int MapService(string ServiceType, int ServiceId, int userId)
        {
            try
            {
                var userService = new Modal.UserService
                {
                    ServiceId = ServiceId,
                    ServiceType = ServiceType,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.UserServices.Add(userService);
                Context.SaveChanges();
                return userService.UserServiceID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
