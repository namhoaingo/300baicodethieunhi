using FactoryMethod.Animal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethod.Factory
{
    internal class RandomAnimalFactory : IAnimalFactory
    {
        public IAnimal CreateAnimal()
        {
            Random random = new Random();
            int type = random.Next(0,2);
            switch (type)
            {
                case 0: return new Cat();
                case 1: return new Dog();
                case 2: return new Duck();
                default: return new Duck();
            } 
        }
    }
}
