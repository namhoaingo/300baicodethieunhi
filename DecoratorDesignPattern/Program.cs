// See https://aka.ms/new-console-template for more information
using DecoratorDesignPattern;
using DecoratorDesignPattern.Decorators;

Console.WriteLine("Hello, World!");


var ourMilkTea = new BlackSugar(new Bubble(new MilkTea()));
