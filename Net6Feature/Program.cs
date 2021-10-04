using System;

namespace Net6Feature
{
    class Program
    {
        static void Main(string[] args)
        {
            // GUID
            //"N", "D", "B", "P", or "X
            var guid = Guid.NewGuid();
            Console.WriteLine("N");
            Console.WriteLine(guid.ToString("N"));

            Console.WriteLine("D");
            Console.WriteLine(guid.ToString("D"));

            Console.WriteLine("B");
            Console.WriteLine(guid.ToString("B"));

            Console.WriteLine("P");
            Console.WriteLine(guid.ToString("P"));

            Console.WriteLine("X");
            Console.WriteLine(guid.ToString("X"));
        }
    }
}
