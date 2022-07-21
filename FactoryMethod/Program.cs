// See https://aka.ms/new-console-template for more information
using FactoryMethod.Factory;

Console.WriteLine("Hello, World!");

IAnimalFactory animalFactory;
Random random = new Random(); 
int type = random.Next(0,1);

if(type == 0)
{
    animalFactory = new BasicAnimalFactory();
}
else
{
    animalFactory = new RandomAnimalFactory();
}