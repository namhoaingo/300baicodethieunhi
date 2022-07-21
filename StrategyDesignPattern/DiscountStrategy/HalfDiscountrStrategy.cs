using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StrategyDesignPattern.DiscountStrategy
{
    public class HalfDiscountrStrategy : IPromotionStrategy
    {
        const double _halfDiscountRate = 0.5;
        public double DoDiscount(double price)
        {
            return price * _halfDiscountRate;
        }
    }
}
