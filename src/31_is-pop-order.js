/**
 * @description 栈的压入、弹出序列
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。
 * 例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 * 注意：这两个序列的长度是相等的
 * @author wangjiaqun
 * @param {Array} pushV 入栈顺序
 * @param {Array} popV 出栈顺序
 * @return {Boolean} true是弹出序列 false不是
 */
// 思路：创建辅助栈 根据两个序列模拟流程 进行压入后和弹出序列比较 相等则出栈
// 例如：入栈1 和4比较 不相等
//     入栈2 和4比较 不相等
//     入栈3 和4比较 不相等
//     入栈4 和4比较 相等 出栈
//     此时栈顶是3 和5比较(此时弹出序列4已经兑掉了 换5比较) 不相等
//     入栈5 和5比较 相等 出栈
//     此时栈顶是3 和3比较 相等 出栈
//     此时栈顶是2 和2比较 相等 出栈
//     此时栈顶是1 和1比较 相等 出栈
//     此时辅助栈空了 返回true
function IsPopOrder(pushV, popV) {
    if (pushV.length !== popV.length || pushV.length === 0 || popV.length === 0) {
        return;
    }
    var stack = []; // 模拟栈即可 无需创建栈对象
    for (var i = 0, j = 0; i < pushV.length; i++) {
        stack.push(pushV[i]);
        while (stack.length && stack[stack.length - 1] === popV[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
}