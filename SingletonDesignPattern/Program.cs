// See https://aka.ms/new-console-template for more information
using SingletonDesignPattern;

Console.WriteLine("Hello, World!");

var thread1 = new Thread(() => OngDevSingleton.GetInstance().OngDevSayHi());
var thread2 = new Thread(() => OngDevSingleton.GetInstance().OngDevSayHi());


thread1.Start();
thread2.Start();
Console.ReadLine();
