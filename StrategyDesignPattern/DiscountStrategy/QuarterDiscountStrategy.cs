using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StrategyDesignPattern.DiscountStrategy
{
    public class QuarterDiscountStrategy : IPromotionStrategy
    {
        const double _quarterRate = 0.25;
        public double DoDiscount(double price)
        {
            return price * _quarterRate;
        }
    }
}
