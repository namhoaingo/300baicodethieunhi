// C# program for implementation of Heap Sort
using System;

public class HeapSort
{
    /// <summary>
    /// This function is to sort the entire array from the max heap
    /// </summary>
    /// <param name="arr"></param>
    public void sort(int[] arr)
    {
        for(int i = 0; i < arr.Length; i++)
        {
            max_heapify(arr, arr.Length-i, 0);
            // Push max to the end
            var swap = arr[0];
            arr[0] = arr[arr.Length - i - 1];
            // Move the last to the begin
            arr[arr.Length - i-1] = swap;
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
        if(leftIndex <= heapsize - 1 && arr[leftIndex] > arr[rootIndex])
        {
            max = leftIndex;
        }

        if(rightIndex <= heapsize - 1 && arr[rightIndex] > arr[max])
        {
            max = rightIndex;
        }

        // if changes happen
        if(max != rootIndex)
        {
            var temp = arr[rootIndex];
            arr[rootIndex] = arr[max];
            arr[max] = temp;

            // boi vi max element da thay doi
            // nen can sort lai cai max element do
            max_heapify(arr, heapsize, max);
        }

    }

    /* A utility function to print array of size n */
    static void printArray(int[] arr)
    {
        int n = arr.Length;
        for (int i = 0; i < n; ++i)
            Console.Write(arr[i] + " ");
        Console.Read();
    }

    // Driver code
    public static void Main()
    {
        int[] arr = { 8,2,4,1,1 };
        int n = arr.Length;

        HeapSort ob = new HeapSort();
        ob.sort(arr);

        Console.WriteLine("Sorted array is");
        printArray(arr);
    }
}
