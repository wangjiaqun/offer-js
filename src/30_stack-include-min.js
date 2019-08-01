/**
 * @description 包含min函数的栈
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数，时间复杂度应为O(1)
 * @author wangjiaqun
 */
// 思路：两个栈 一个正常存放 另一个只存最小值 如果新加进来的更小 再B中入栈 保证栈顶永远最小
var stack = [];
var stackMin = []; // 用于存放最小值
function push(node) {
    stack.push(node);
    if (stackMin.length === 0 || stackMin[stackMin.length - 1] > node) {
        stackMin.push(node); // 这样保证栈顶是最小值
    }
}
function pop() {
    if (stack.length === 0) {
        return null;
    }
    var node = stack.pop();
    if (stackMin[stackMin.length - 1] === node) {
        stackMin.pop();
    }
    return node;
}
function top() {
    if (stack.length === 0) {
        return null;
    } else {
        return stack[stack.length - 1];
    }
}
function min() {
    if (stack.length === 0) {
        return null;
    } else {
        return stackMin[stackMin.length - 1];
    }
}