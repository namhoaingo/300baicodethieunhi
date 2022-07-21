using FactoryMethod.Animal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethod.Factory
{
    internal class BasicAnimalFactory : IAnimalFactory
    {
        IAnimal IAnimalFactory.CreateAnimal()
        {
            throw new NotImplementedException();
        }
    }
}
