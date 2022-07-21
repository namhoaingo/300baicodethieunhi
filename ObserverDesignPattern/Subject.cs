using ObserverDesignPattern.Observers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverDesignPattern
{
    public class Subject
    {
        private List<ObserverNotification> _observers = new List<ObserverNotification> ();    

        public void AttachObserver(ObserverNotification observerNotification)
        {
            _observers.Add(observerNotification);   
        }

        public void DeleteObserver(ObserverNotification observerNotification)
        {
            _observers.Remove(observerNotification);
        }

        public void NotifyAllObservers(Subject subject, Object? arg)
        {
            _observers.ForEach(ob => ob.NotifyObserver(subject, arg));
        }
    }
}
