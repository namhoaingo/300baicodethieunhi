using System;

namespace DateTimeTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var today = DateTime.Today;
            var currentMoth = new DateTime(today.Year, today.Month, 1);

            // Minus 1
            var minus1 = currentMoth.AddMonths(-1);
        }
    }
}
