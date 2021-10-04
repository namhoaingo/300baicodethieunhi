using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructure
{
    /// <summary>
    /// https://app.pluralsight.com/course-player?clipId=b8159d71-2c72-44dd-be38-10d9d2ce7bc3
    /// Hashing ALgorithms
    /// Hash function
    ///     1. Stable: give the same result for the same input
    ///     2. Uniform: distribute its reulting hash value uniformly throughout the output space
    ///     3. Security: cannot be inverted
    ///     Hash Collision
    ///         When multiple distint keys would be inserted at the same hash table index
    ///     strategy to resolve the conflict
    ///         Collisions in a hash table are chained together into a linked list whose root node is the hash table array entry
    /// Fill Factor
    ///     The percentage of capcity representing the maximum number of entries before the table will grow. EG: 0.80
    /// </summary>
    class HashTable<TKey, TValue>
    {
        TValue[] table = new TValue[4];

        private uint Hash(TKey key)
        {

        }

        public TValue this[TKey key]
        {
            get => table[Index(key)];
            get => table[Index(key)] = value;
        }

        private uint Index(TKey key)
        {
            return Hash(key) % table.Length;
        }
    }    
}
