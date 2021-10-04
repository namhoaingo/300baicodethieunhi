using Inheritance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance.Processors
{
    public class ProcessorChina: ProcessorBase, IProcessor
    {
        public override ProductChina PopuulateProductVM()
        {
            throw new NotImplementedException();
        }
    }
}
