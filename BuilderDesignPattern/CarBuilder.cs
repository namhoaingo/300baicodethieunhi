using BuilderDesignPattern.CarParts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuilderDesignPattern
{
    public class CarBuilder : ICarBuilder
    {
        private Windscreeen _windscreeen;
        private Wheels _wheels;
        private Engine _engine;

        public ICarBuilder AddEnginer(Engine engine)
        {
            _engine = engine;
            return this;
        }

        public ICarBuilder AddWheels(Wheels wheels)
        {
            _wheels = wheels;
            return this;

        }

        public ICarBuilder AddWindScreen(Windscreeen windscreeen)
        {
            _windscreeen = windscreeen;
            return this;

        }

        public Car Build()
        {
            return new Car(_windscreeen, _wheels, _engine);    
        }
    }
}
