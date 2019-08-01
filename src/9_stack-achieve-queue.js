/**
 * @description 用两个栈实现队列
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作，队列中的元素为int类型。
 * 
 * 入队：和入栈操作一样
 * 出队：判断stack2是否为空，如果为空，则将stack1中所有元素pop，并push进stack2，stack2出栈； 如果不为空，stack2直接出栈。
 * @author wangjiaqun 044033
 */
var Stack = require("../common-class/stack"); // 导入栈
// 新建两个栈
var stack1 = new Stack();
var stack2 = new Stack();

function push(node) {
    stack1.push(node);
}
function pop() {
    // 判断非空
    if (stack1.isEmpty() && stack2.isEmpty()) {
        throw new Error("queue is empty");
    }
    // stack1非空时 挨个出栈并入栈到stack2
    while (!stack1.isEmpty()) {
        var node = stack1.pop();
        stack2.push(node);
    }
    // stack2的栈尾就是stack1的栈顶
    var result = stack2.pop();
    // 将剩余的stack2里的元素移回stack1中
    while (!stack2.isEmpty()) {
        var ele = stack2.pop();
        stack1.push(ele);
    }
    return result;
}
var test = push('123');
pop();
console.log('test--->', test);