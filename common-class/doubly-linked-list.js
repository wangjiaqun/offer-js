/**
 * @description 双向链表
 * @author wangjiaqun
 */
function DoublyLinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null; // 后置指针
        this.prev = null; // 前置指针
    };
    var length = 0,
        head = null,
        tail = null; // 尾巴
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { // 往链表头部插入元素
                if (!head) { // 空链表
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) { // 链表尾部插入元素
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }

    };
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            if (position === 0) { // 移除第一项
                head = current.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length) { // 移除最后一项
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
}
module.exports = DoublyLinkedList;