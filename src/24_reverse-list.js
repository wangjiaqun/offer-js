/**
 * @description 反转链表
 * 输入一个链表，反转链表后，输出新链表的表头
 * @author wangjiaqun
 * @param {ListNode} pHead 链表的头节点
 * @return
 */
function ListNode(x) {
    this.val = x;
    this.next = null;
}
// a -> b -> c -> d
// a    b -> c -> d
// a <- b    c -> d
// a <- b <- c    d
// a <- b <- c <- d
function reverseList(pHead) {
    var head = pHead;
    if (pHead === null || pHead.next === null) {
        return pHead;
    }
    var prev = null;
    var next = null;
    while (head !== null) {
        next = head.next; // 先把head.next存起来备用
        head.next = prev; // 本来head.next为next 这一步使head.next变为prev实现局部的链表反转
        prev = head; // 3
        head = next; // 4 3和4这两步是当前节点后移一位 注意顺序
    }
    return prev;
}