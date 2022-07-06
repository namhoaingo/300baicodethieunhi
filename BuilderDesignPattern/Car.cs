using BuilderDesignPattern.CarParts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuilderDesignPattern
{
    public class Car
    {
        private Windscreeen _windscreeen;
        private Wheels _wheels;
        private Engine _engine;

        public Car(Windscreeen windscreeen, Wheels wheels, Engine engine)
        {
            _windscreeen = windscreeen;
            _wheels = wheels;
            _engine = engine;
        }
    }
}
