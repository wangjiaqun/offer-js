/**
 * @description 队列
 * @author wangjiaqun
 */
function Queue() {
    var items = [];
    // 入队
    this.enqueue = function (element) {
        items.push(element);
    };
    // 出队
    this.dequeue = function () {
        return items.shift();
    };
    // 队列头
    this.front = function () {
        return items[0];
    };
    // 是否为空
    this.isEmpty = function () {
        return items.length === 0;
    };
    // 长度
    this.size = function () {
        return items.length;
    };
    // 打印队列
    this.print = function () {
        console.log(items.toString());
    };
}
module.exports = Queue;
