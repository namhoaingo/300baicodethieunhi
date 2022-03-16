using System;

namespace Stopwatch
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Calculate performance");

            var stopWatch = new System.Diagnostics.Stopwatch();
            stopWatch.Start();
            System.Threading.Thread.Sleep(100);
            stopWatch.Stop();
            Console.WriteLine("Elapse time 1 --" + stopWatch.ElapsedMilliseconds);

            System.Threading.Thread.Sleep(200);

            stopWatch.Start();
            System.Threading.Thread.Sleep(200);
            stopWatch.Stop();

            Console.WriteLine("Elapse time 2 --" + stopWatch.ElapsedMilliseconds); 

        }
    }
}
