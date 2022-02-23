using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            List<TierPrice> tiers = PrepareData();
            DateTime startFilter = DateTime.UtcNow.AddDays(-1);
            DateTime endFilter = DateTime.UtcNow.AddDays(5);

            List<TierPrice> filterTiers = tiers.Where(x => x.StartDateTime >= startFilter && x.EndDateTime <= endFilter)
                .GroupBy(x => new { x.StartDateTime, x.EndDateTime })
                .Select(group => group.OrderByDescending(x => x.TimeStamp).FirstOrDefault()).ToList();
                     
        }

        public static List<TierPrice> PrepareData()
        {
            var dateTimeNow = DateTime.UtcNow;
            return new List<TierPrice>
            {
                new TierPrice()
                {
                    TimeStamp = dateTimeNow,
                    StartDateTime = dateTimeNow.AddDays(1),
                    EndDateTime = dateTimeNow.AddDays(2)
                },
                new TierPrice()
                {
                    TimeStamp = dateTimeNow.AddMinutes(5),
                    StartDateTime = dateTimeNow.AddDays(1),
                    EndDateTime = dateTimeNow.AddDays(2)
                },
                new TierPrice()
                {
                    TimeStamp = dateTimeNow.AddMinutes(6),
                    StartDateTime = dateTimeNow.AddDays(1),
                    EndDateTime = dateTimeNow.AddDays(2)
                },

                 new TierPrice()
                {
                    TimeStamp = dateTimeNow,
                    StartDateTime = dateTimeNow.AddDays(2),
                    EndDateTime = dateTimeNow.AddDays(3)
                },

                  new TierPrice()
                {
                    TimeStamp = dateTimeNow,
                    StartDateTime = dateTimeNow.AddDays(3),
                    EndDateTime = dateTimeNow.AddDays(4)
                },

                   new TierPrice()
                {
                    TimeStamp = dateTimeNow,
                    StartDateTime = dateTimeNow.AddDays(4),
                    EndDateTime = dateTimeNow.AddDays(5)
                },
            };
        }
        
    }

    class TierPrice
    {
        public DateTime TimeStamp { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public int Price { get; set; }
    }
}
