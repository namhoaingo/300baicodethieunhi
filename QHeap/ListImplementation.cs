using System;
using System.Collections.Generic;
using System.Linq;

namespace QHeap
{
    class Program
    {
        private static List<Step> prepareFromFile()
        {
            int counter = 0;
            string line;
            List<Step> steps = new List<Step>();
            // Read the file and display it line by line.  
            System.IO.StreamReader file =
                new System.IO.StreamReader(@"E:\300baicodethieunhi\300baicodethieunhi\QHeap\input.txt");
            while ((line = file.ReadLine()) != null)
            {
                if (counter > 0)
                {
                    Step operationStep;
                    //var stepString = Console.ReadLine();
                    var details = line.Split(" ");
                    if (details.Length > 1)
                    {
                        operationStep = new Step(Convert.ToInt32(details[0]), Convert.ToInt32(details[1]));
                    }
                    else
                    {
                        operationStep = new Step(Convert.ToInt32(details[0]));
                    }
                    steps.Add(operationStep);
                }
                counter++;
            }

            file.Close();
            System.Console.WriteLine("There were {0} lines.", counter);

            return steps;
            //var inputCount = Console.ReadLine();
            //List<Step> steps = new List<Step>() { };
            //for (int i = 0; i < Convert.ToInt32(inputCount); i++)
            //{
            //    Step operationStep;
            //    var stepString = Console.ReadLine();
            //    var details = stepString.Split(" ");
            //    if (details.Length > 1)
            //    {
            //        operationStep = new Step(Convert.ToInt32(details[0]), Convert.ToInt32(details[1]));
            //    }
            //    else
            //    {
            //        operationStep = new Step(Convert.ToInt32(details[0]));
            //    }
            //    steps.Add(operationStep);
            //}


        }
        static void Main(string[] args)
        {


            List<Step> steps = prepareFromFile();

            MinHeap heap = new MinHeap(new List<int>());

            foreach (Step step in steps)
            {
                switch (step.Operation)
                {
                    case Operation.Add:
                        heap.Insert(step.Value.Value);
                        break;
                    case Operation.Delete:
                        heap.Delete(step.Value.Value);
                        break;
                    case Operation.Print:
                        heap.GetMin();
                        break;
                }

            }
        }

        public static void PrintArray(List<int> array)
        {
            var output = "";
            foreach (int a in array)
            {
                output += a + "";
            }
            Console.WriteLine(output);
        }
    }

    class MinHeap
    {        
        private List<int> _array;

        public List<int> CurrentMinHeap
        {
            get
            {
                return _array;
            }
        }
        public MinHeap(List<int> array)
        {
            _array = array;
            SortMinHeap();
        }

        // Insert at the bottom
        public void Insert(int num)
        {
            _array.Add(num);
            SortMinHeapAfterInsertion();
        }

        public void GetMin()
        {
            Console.WriteLine(_array[0]);
        }

        //Delete
        public void Delete(int num)
        {
            // loop through the list and create a new one without num
            int index = _array.IndexOf(num);
            _array.RemoveAt(index);
            SortMinHeapAfterInsertion();
        }

        private void SortMinHeapAfterInsertion()
        {
            // Sau khi insert thi value moi luon o cuoi. 
            // Go back to the parent 
            int lastIndex = _array.Count - 1;
            while (lastIndex / 2 > 0 || lastIndex > 0)
            {
                int smaller = 0;
                int parent = 0;
                if (lastIndex == 1 || lastIndex == 2)
                {
                    parent = 0;
                }
                else
                {
                    // Neu ko phai la 1 hoac 2
                    parent = lastIndex / 2;
                }

                smaller = parent;
                if (_array[parent] > _array[lastIndex])
                {
                    smaller = lastIndex;
                }

                if (smaller != parent)
                {
                    //swap
                    var temp = _array[lastIndex];
                    _array[lastIndex] = _array[parent];
                    _array[parent] = temp;
                }

                lastIndex = lastIndex / 2;
            }
        }



        public void SortMinHeap()
        {
            for (int i = _array.Count - 1; i >= 0; i--)
            {
                Min_Heaptify(_array, _array.Count, i);
            }
        }

        // Min Heap nhe
        private void Min_Heaptify(List<int> arr, int sizeOfHeap, int startIndex)
        {
            // 0 base index array
            int left = startIndex * 2 + 1;
            int right = startIndex * 2 + 2;

            // Assume the startindex is the min
            int currentMinIndexBetween_current_left_right = startIndex;
            if (left <= arr.Count - 1 && arr[left] < arr[currentMinIndexBetween_current_left_right])
            {
                currentMinIndexBetween_current_left_right = left;
            }

            if (right <= arr.Count - 1 && arr[right] < arr[currentMinIndexBetween_current_left_right])
            {
                currentMinIndexBetween_current_left_right = right;
            }

            // Check xem co su thay doi hay ko
            if (currentMinIndexBetween_current_left_right != startIndex)
            {
                //swap
                var temp = arr[currentMinIndexBetween_current_left_right];
                arr[currentMinIndexBetween_current_left_right] = arr[startIndex];
                arr[startIndex] = temp;

                Min_Heaptify(arr, arr.Count, currentMinIndexBetween_current_left_right);
            }
        }
    }

    class Step
    {
        public Operation Operation;
        public int? Value;

        public Step(int operationInt, int? value = null)
        {
            Operation = (Operation)operationInt;
            if (value.HasValue)
            {
                Value = value.Value;
            }
        }
    }

    enum Operation
    {
        Add = 1,
        Delete = 2,
        Print = 3
    }
}

