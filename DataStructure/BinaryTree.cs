using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructure
{
    // A normal tree does not have any limitation on the value between the root, left, and the right
    class BinaryTree
    {
        BTNode<string> root = new BNode<string>("root");
        BTNode<string> left = new BTNode<string>("left");
        BTNode<string> right = new BTNode<string>("right");

        public BinaryTree()
        {
            root.Left = left;
            root.Right = right;
        }
    }

    class BTNode<T>
    {
        public BTNode(T value)
        {
            Data = value;
        }

        public T Data;
        public BTNode<T> Left;
        public BTNode<T> Right;

    }
}
