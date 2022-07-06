using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverDesignPattern.Observers
{
    public abstract class ObserverNotification
    {
        protected Subject subject = new Subject();
        public abstract void NotifyObserver(Subject subject, Object? arg);   
    }
}
