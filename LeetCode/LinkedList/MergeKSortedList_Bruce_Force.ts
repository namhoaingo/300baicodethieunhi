//https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 

};

function mergeSort_linkedList(start: number, end: number, lists: Array<ListNode | null>): ListNode{
    let mid = Math.floor((start + end)/2);
    let left = mergeSort_linkedList(start, mid, lists);
    let right = mergeSort_linkedList(mid, end, lists);
    let result = merge_linkedList(left, right);
    return result;
}

function merge_linkedList(l1: ListNode, l2: ListNode): ListNode{

}