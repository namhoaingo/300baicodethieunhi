// See https://aka.ms/new-console-template for more information
using StrategyDesignPattern;
using StrategyDesignPattern.DiscountStrategy;

Console.WriteLine("Start ticket calculation");


// Create three ticket with different price

for (int i = 0; i < 3; i++)
{
    var ticket = new Ticket(new NoDiscountStrategy());
    ticket.SetPrice(new Random().NextDouble());
    Console.WriteLine($"Ticket price {ticket.GetPromotionPrice()}");
}
