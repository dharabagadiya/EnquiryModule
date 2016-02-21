using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel.Modal;

namespace DataModel
{
    public class OfferManager
    {
        private DataContext Context = new DataContext();
        public List<Offer> GetOffers(string offerType)
        { return Context.Offers.Where(model => model.ReType == offerType).ToList(); }
        public List<Offer> GetOffersOnUserId(int userId)
        {
            var offerIds = Context.UserOffers.Where(model => model.UserId == userId).Select(model => model.OfferId).ToList();
            return Context.Offers.Where(model => model.IsDeleted == false && offerIds.Contains(model.OfferID)).ToList();
        }
        public int MapOffer(int OfferId, int userId)
        {
            try
            {
                var userOffer = new Modal.UserOffer
                {
                    OfferId = OfferId,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.UserOffers.Add(userOffer);
                Context.SaveChanges();
                return userOffer.UserOfferID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
