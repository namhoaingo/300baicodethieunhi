using System;
using System.Threading;
using System.Threading.Tasks;

namespace StaticAsyncLocalVsStaticThread
{
    public static class Program
    {
        //[ThreadStatic]
        //public static string Ts;

        // Nomal static
        public static string Ts;

        public static AsyncLocal<string> Al = new AsyncLocal<string>();

        public static void Main(string[] args)
        {
            // Start 1 first context
            Task.Run(async () =>{
                Ts = "thread1";
                Al.Value = "11";
                await doStuff();
            });

            Console.ReadLine();
            //print();
            // Start 2 first context
            Task.Run(async () => {
                Ts = "thread2";
                Al.Value = "22";
                await doStuff();
            });
            Console.ReadLine();

            //print();
        }

        private static async Task doStuff()
        {
         //   print();

            Task t = Task.Run(async () =>
            {
                await Task.Delay(1000);
                print();
            });

           // print();

            await t;

            //print();
        }

        private static void print()
        {
            Console.WriteLine("Managed Thread ID {0}", Thread.CurrentThread.ManagedThreadId);
            Console.WriteLine("TS: {0}", Ts ?? "null");
            Console.WriteLine("AL: {0}", Al.Value ?? "null");
        }
    }
}