using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractFatory.Animal
{
    internal class Duck : TwoLegsAnimal
    {
        public override string GetName()
        {
            return "I am a Duck";
        }
    }
}
