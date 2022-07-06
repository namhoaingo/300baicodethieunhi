using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DecoratorDesignPattern.Decorators
{
    public class Bubble : MilkTeaDecorator
    {
        public Bubble(IMilkTea inner): base(inner)
        {

        }

        public override double Cost()
        {
            return 1d + base.Cost();
        }
    }
}
