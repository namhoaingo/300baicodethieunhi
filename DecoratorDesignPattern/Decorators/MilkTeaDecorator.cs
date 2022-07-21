using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DecoratorDesignPattern.Decorators
{
    public class MilkTeaDecorator : IMilkTea
    {
        private IMilkTea _milkTea;

        // Object milkTea duoc boc boi cai decorator
        protected MilkTeaDecorator(IMilkTea milkTea)
        {
            _milkTea = milkTea;
        }

        public virtual double Cost()
        {
            return _milkTea.Cost();
        }
    }
}
