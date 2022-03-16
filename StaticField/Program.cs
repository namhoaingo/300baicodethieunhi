using System;

namespace StaticField
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("100 time class without static") ;
            for (var i = 0; i < 100; i++)
            {
                var nonStaticClass = new NormalClassWithoutStatic();
                Console.WriteLine("nonStaticClass Name: "+ nonStaticClass.Name);
            }

            Console.WriteLine("100 time class with static");
            for (var i = 0; i < 100; i++)
            {
                var nonStaticClass = new NormalClassWithStatic();
                Console.WriteLine("normal class with static Name: " + NormalClassWithStatic.Name);
            }


            Console.WriteLine("100 time static class with static");
            for (var i = 0; i < 100; i++)
            {
                Console.WriteLine("static class Name: " + StaticClass.Name);
            }
        }
    }

    class NormalClassWithoutStatic
    {
        public string Name { get; } = Guid.NewGuid().ToString();
    }


    class NormalClassWithStatic
    {
        // Get keyword return the same instance
        //public static string Name { get; } = Guid.NewGuid().ToString();

        // => return different instance
        public static string Name => Guid.NewGuid().ToString();

    }

    static class StaticClass
    {
        public static string Name { get; } = Guid.NewGuid().ToString();
    }
}
