// See https://aka.ms/new-console-template for more information
using BuilderDesignPattern;

Console.WriteLine("Hello, World!");


var car = new CarBuilder()
    .AddWindScreen(new BuilderDesignPattern.CarParts.Windscreeen())
    .Build();
