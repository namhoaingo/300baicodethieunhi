using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StrategyDesignPattern.DiscountStrategy
{
    public interface IPromotionStrategy
    {
        double DoDiscount(double price);
    }
}
