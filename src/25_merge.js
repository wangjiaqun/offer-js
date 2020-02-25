/**
 * @description 合并两个排序的链表
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 * @author wangjiaqun
 * @param {ListNode} pHead1
 * @param {ListNode} pHead2
 * @return
 */
function ListNode(x) {
    this.val = x;
    this.next = null;
}
// 递归思想 比大小 小的保留 然后小的next和大的接着比
function merge(pHead1, pHead2) {
    var node = null;
    if (pHead1 === null) {
        return pHead2;
    }
    if (pHead2 === null) {
        return pHead1;
    }
    if (pHead1.val > pHead2.val) {
        node = pHead2;
        node.next = merge(pHead1, pHead2.next);
    } else {
        node = pHead1;
        node.next = merge(pHead1.next, pHead2);
    }
    return node;
}