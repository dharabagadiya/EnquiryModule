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
        public List<Offer> GetOffers()
        { return Context.Offers.ToList(); }
    }
}
