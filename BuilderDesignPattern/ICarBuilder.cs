﻿using BuilderDesignPattern.CarParts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuilderDesignPattern
{
    public interface ICarBuilder
    {
        ICarBuilder AddEnginer(Engine engine);
        ICarBuilder AddWindScreen(Windscreeen windscreeen);

        ICarBuilder AddWheels(Wheels wheels);

        Car Build();

    }
}
