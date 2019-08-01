/**
 * @description 栈
 * @author wangjiaqun
 */
function Stack() {
    var items = []; // 初始化数组做栈体
    // 入栈
    this.push = function (element) {
        items.push(element);
    };
    // 出栈
    this.pop = function () {
        return items.pop();
    };
    // 栈顶
    this.peek = function () {
        return items[items.length - 1];
    };
    // 是否为空
    this.isEmpty = function () {
        return items.length === 0;
    };
    // 栈长度
    this.size = function () {
        return items.length;
    };
    // 清空栈
    this.clear = function () {
        items = [];
    };
    // 打印栈
    this.print = function () {
        console.log(items.toString());
    };
}
module.exports = Stack;