using Inheritance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance.Processors
{
    public class ProcessorNorthAmerica:  ProcessorBase, IProcessor
    {
        public override ProductNorthAmerica PopuulateProductVM()
        {
            throw new NotImplementedException();
        }
    }
}
