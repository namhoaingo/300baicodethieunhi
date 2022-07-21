using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingletonDesignPattern
{
    public class OngDevSingleton
    {
        private static OngDevSingleton uniqueInstance;
        private int _index;
        private static readonly object lockObject = new object();
        private OngDevSingleton(int index) {
            _index = index;
        }
        public static OngDevSingleton GetInstance()
        {
            lock (lockObject)
            {
                if (uniqueInstance == null)
                {
                    uniqueInstance = new OngDevSingleton(new Random().Next());
                }
                return uniqueInstance;
            }
        }

        public void OngDevSayHi()
        {
            Console.WriteLine(this._index);
        }
    }
}
