/**
 * @description 链表中倒数第k个节点
 * 输入一个链表，输出该链表中倒数第k个结点。
 * @author wangjiaqun
 * @param
 * @return
 */
function ListNode(x) {
    this.val = x;
    this.next = null;
}
// 思路：定义两个指针a和b，a先走k-1步，到第k个节点
// 两个指针同时向后移动，当a到达末尾时，b所在位置就是倒数第k个节点
function findKthToTail(head, k) {
    // 非空判断
    if (head === null || k <= 0) {
        return;
    }
    var pre = head; // 这个指针先走
    var post = head; // 这个指针后走
    // 先将pre指针先走k-1步
    for (var i = 0; i < k - 1; i++) {
        if (pre.next !== null) {
            pre = pre.next;
        } else {
            return;
        }
    }
    // 再将pre和post同时往下走，知道pre到末尾
    while (pre.next !== null) {
        pre = pre.next;
        post = post.next;
    }
    return post;
}
// 另一个思路（仅限JavaScript）：取arr[arr.length - k]即可