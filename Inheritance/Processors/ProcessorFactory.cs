using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance.Processors
{
    public class ProcessorFactory
    {
        public IProcessor GetProcessorBySoftwareSystem(string softwareSystem)
        {
            return new ProcessorNorthAmerica();
        }
    }
}
