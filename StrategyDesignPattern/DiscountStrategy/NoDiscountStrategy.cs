using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StrategyDesignPattern.DiscountStrategy
{
    public class NoDiscountStrategy : IPromotionStrategy
    {
        public double DoDiscount(double price)
        {
            return price;
        }
    }
}
