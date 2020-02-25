/**
 * @description 链表中环的入口结点
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 * @author wangjiaqun
 * @param {ListNode} pHead 链表的头节点
 * @return 入口节点对象 如果没有输出null
 */
function ListNode(x) {
    this.val = x;
    this.next = null;
}
// 设置快慢指针，都从链表头出发，快指针每次走两步，慢指针一次走一步，
// 假如有环，一定相遇于环中某点(结论1)。
// 接着让两个指针分别从相遇点和链表头出发，两者都改为每次走一步，最终相遇于环入口(结论2)。
// 两个结论：
// 1、设置快慢指针，假如有环，他们最后一定相遇。
// 2、两个指针分别从链表头和相遇点继续出发，每次走一步，最后一定相遇与环入口。
// 证明结论1：设置快慢指针fast和low，fast每次走两步，low每次走一步。假如有环，两者一定会相遇（因为low一旦进环，可看作fast在后面追赶low的过程，每次两者都接近一步，最后一定能追上）。
// 证明结论2：
// 设：
// 链表头到环入口长度为--a
// 环入口到相遇点长度为--b
// 相遇点到环入口长度为--c
// -------a--------.入口点---------|
//                 |               |
//                 |               |
//                 |               |
//                 c               b
//                 |               |
//                 |               |
//                 |_____.相遇点___|
// 则：相遇时
// 快指针路程=a+(b+c)k+b ，k>=1  其中b+c为环的长度，k为绕环的圈数（k>=1,即最少一圈，不能是0圈，不然和慢指针走的一样长，矛盾）。
// 慢指针路程=a+b
// 快指针走的路程是慢指针的两倍，所以：
// （a+b）*2=a+(b+c)k+b
// 化简可得：
// a=(k-1)(b+c)+c 这个式子的意思是： 链表头到环入口的距离=相遇点到环入口的距离+（k-1）圈环长度。其中k>=1,所以k-1>=0圈。所以两个指针分别从链表头和相遇点出发，最后一定相遇于环入口。
function entryNodeOfLoop(pHead) {
    if (pHead === null || pHead.next === null || pHead.next.next === null) {
        return null;
    }
    var fast = pHead.next.next;
    var slow = pHead.next;
    while (fast && slow) {
        if (fast !== slow) {
            fast = fast.next.next; // 快的每次两个节点
            slow = slow.next; // 慢的每次一个节点
        } else {
            break
        }
    }
    if (fast === null || slow === null) {
        return null;
    }
    fast = pHead; // 快的放到头节点处 慢的还停留在相遇点 同速往入口点走
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
}