using StrategyDesignPattern.DiscountStrategy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StrategyDesignPattern
{
    public class Ticket
    {
        private double _price;
        private IPromotionStrategy _promotionStrategy;

        public Ticket(IPromotionStrategy promotionStrategy)
        {
            this._promotionStrategy = promotionStrategy;
        }

        public void SetPromotionStategy(IPromotionStrategy promotionStrategy)
        {
            _promotionStrategy = promotionStrategy;
        }

        public void SetPrice(double price)
        {
            _price = price;
        }

        public double GetPromotionPrice()
        {
            return _promotionStrategy.DoDiscount(this._price);  
        }
    }
}
