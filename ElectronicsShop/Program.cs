using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Program
{

    /*
     * Complete the getMoneySpent function below.
     */
    static int getMoneySpent(int[] keyboards, int[] drives, int b)
    {
        var solution = new Program();        
        solution.sort(keyboards);
        solution.sort(drives);

        var max = 0;
        for (int i = keyboards.Length -1; i >= 0; i--)
        {
            for (int n = drives.Length - 1; n >= 0; n--)
            {
                var temp = keyboards[i] + drives[n];
                if (max < b)
                {
                    max = Math.Max(max, temp);
                }
                else continue;
            }
        }
        return max;

    }

    /// <summary>
    /// This function is to sort the entire array from the max heap
    /// </summary>
    /// <param name="arr"></param>
    public void sort(int[] arr)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            max_heapify(arr, arr.Length - i, 0);
            // Push max to the end
            var swap = arr[0];
            arr[0] = arr[arr.Length - i - 1];
            // Move the last to the begin
            arr[arr.Length - i - 1] = swap;
        }
    }

    /// <summary> 
    /// This function is to construct the max heap for a certain array
    /// </summary>
    /// <param name="arr"></param>
    /// <param name="heapsize"></param>
    /// <param name="rootIndex"></param>
    void max_heapify(int[] arr, int heapsize, int rootIndex)
    {
        var leftIndex = rootIndex * 2 + 1;
        var rightIndex = rootIndex * 2 + 2;

        // assume that the root is the biggest
        var max = rootIndex;
        if (leftIndex <= heapsize - 1 && arr[leftIndex] > arr[rootIndex])
        {
            max = leftIndex;
        }

        if (rightIndex <= heapsize - 1 && arr[rightIndex] > arr[max])
        {
            max = rightIndex;
        }

        // if changes happen
        if (max != rootIndex)
        {
            var temp = arr[rootIndex];
            arr[rootIndex] = arr[max];
            arr[max] = temp;

            // boi vi max element da thay doi
            // nen can sort lai cai max element do
            max_heapify(arr, heapsize, max);
        }

    }

    static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] bnm = Console.ReadLine().Split(' ');

        int b = Convert.ToInt32(bnm[0]);

        int n = Convert.ToInt32(bnm[1]);

        int m = Convert.ToInt32(bnm[2]);

        int[] keyboards = Array.ConvertAll(Console.ReadLine().Split(' '), keyboardsTemp => Convert.ToInt32(keyboardsTemp))
        ;

        int[] drives = Array.ConvertAll(Console.ReadLine().Split(' '), drivesTemp => Convert.ToInt32(drivesTemp))
        ;
        /*
         * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
         */

        int moneySpent = getMoneySpent(keyboards, drives, b);

        textWriter.WriteLine(moneySpent);

        textWriter.Flush();
        textWriter.Close();
    }
}