/**
 * @description 链表
 * @author wangjiaqun
 */
function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null;
    // 尾部追加节点
    this.append = function (element) {
        var node = new Node(element);
        var current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    // 特定位置插入节点
    this.insert = function (position, element) {
        if (position > -1 && position <= length) {
            var node = new Node(element),
                current = head,
                index = 0,
                previous;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    // 删除指定位置节点
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head,
                index = 0,
                previous;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    // 移除指定元素
    this.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    // 获取元素在列表中索引
    this.indexOf = function (element) {
        var current = head,
            index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    // 是否为空
    this.isEmpty = function () {
        return length === 0;
    };
    // 元素个数
    this.size = function () {
        return length;
    };
    this.getHead = function () {
        return head;
    };
    this.toString = function () {
        var current = head,
            string = '';
        while (current) {
            string += current.element + ' ';
            current = current.next;
        }
        return string;
    };
    this.print = function () {
        console.log(this.toString());
    };

}
module.exports = LindedList;