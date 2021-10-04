using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructure
{
    /// <summary>
    /// A Binary tree where nodes with lessor values are placed to the left of the root, and nodes with equal or greater values are placed to the right
    /// 1. Smallest value will be on the left most node
    /// 2. Biggest value will be on the right most node
    /// </summary>
    class BinarySearchTree<T> where T : IComparable<T> // We can compare T
    {
        public BSTNode<T> root;
        public void Init(T value)
        {            
            BSTNode<T> root = new BSTNode<T>(value);
        }

        public void AddValueToTree(BSTNode<T> currentNode,  T value)
        {
            // Lessor goes left
            if (root.Data.CompareTo(value) < 0)
            {
                if (root.Left == null)
                {
                    var newNode = new BSTNode<T>(value);
                    root.Left = newNode;
                }
                else
                {
                    AddValueToTree(root.Left, value);
                }
            }
            else
            {
                if (root.Right == null)
                {
                    var newNode = new BSTNode<T>(value);
                    root.Right = newNode;
                }
                else
                {
                    AddValueToTree(root.Right, value);
                }
            }
        }

        // 1. Get Data from Current Node 
        // 2. Get Data from the Left Node
        // 3. Get Data from the right node
        // PreOrderTraversal is good for copying a tree
        public void PreOrderTraversal(Action<T> action, BSTNode<T> currentNode)
        {
            if (currentNode != null)
            {
                action(currentNode.Data);
                PreOrderTraversal(action, currentNode.Left);
                PreOrderTraversal(action, currentNode.Right);
            }
        }

        // 1. Vist the left child
        // 2. Process the current value 
        // 3. Visit the right child
        // This is good to print out all the items 
        // in the tree from lowest to biggest
        public void InOrderTraversal(Action<T> action, BSTNode<T> currentNode)
        {
            // Nếu current node là Null, thì coi như 
            // không cần process cái gì cả. 
            // đây cũng là một ý tưởng hay

            if (currentNode != null)
            {
                InOrderTraversal(action, currentNode.Left);
                action(currentNode.Data);
                InOrderTraversal(action, currentNode.Right);
            }

        }

        /// <summary>
        /// 1. Visit the left child
        /// 2. Visit the right child
        /// 3. Visit the current value
        /// Usage Case: Delete All the Nodes in the tree
        /// </summary>
        /// <param name="action"></param>
        /// <param name="currentNode"></param>
        public void PostOrderTraversal(Action<T> action, BSTNode<T> currentNode)
        {
            if (currentNode != null)
            {
                PostOrderTraversal(action, currentNode.Left);
                PostOrderTraversal(action, currentNode.Right);
                action(currentNode.Data);
            }
        }

        /// <summary>
        /// Search in the tree, techinically is O(log n), but we can have a bad tree, 
        /// which will cause O(n)
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public BSTNode<T> Find(T value, BSTNode<T> currentNode)
        {
            if(currentNode.Data.CompareTo(value) == 0)
            {
                return currentNode;
            }
            else if(currentNode.Data.CompareTo(value) < 0)
            {
                return Find(value, currentNode.Left);
            }
            else            
            {
               return Find(value, currentNode.Right);
            }
        }

        
    }

    class BSTNode<T>
    {
        public BSTNode(T value)
        {
            Data = value;
        }

        public T Data;
        public BSTNode<T> Left;
        public BSTNode<T> Right;
    }
}
