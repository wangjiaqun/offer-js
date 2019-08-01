/**
 * @description 栈
 * @author wangjiaqun
 */
function Stack() {
    var items = []; // 初始化数组做栈体
    this.push = function (element) { // 入栈
        items.push(element);
    };
    this.pop = function () { // 出栈
        return items.pop();
    };
    this.peek = function () { // 栈顶
        return items[items.length - 1];
    };
    this.isEmpty = function () { // 是否为空
        return items.length === 0;
    };
    this.size = function () { // 栈长度
        return items.length;
    };
    this.clear = function () { // 清空栈
        items = [];
    };
    this.print = function () { // 打印栈
        console.log(items.toString());
    };
}
module.exports = Stack;