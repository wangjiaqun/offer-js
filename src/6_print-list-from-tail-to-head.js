/**
 * @description 从尾到头打印链表
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 * @author wangjiaqun 044033
 * @param {ListNode} head 链表的头元素
 * @return {Array} reverse数组
 */
function ListNode(x) {
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head) {
    var arr = [];
    while (head !== null && head !== undefined) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}