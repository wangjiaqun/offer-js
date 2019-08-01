/**
 * @description 跳台阶
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）
 * @author wangjiaqun 044033
 * @param {Number} number 台阶总级数
 * @return
 */
// 同Fibonacci数列
// 不同点：fib: [1, 1, 2, 3, 5, 8...]; 本题目: [1, 2, 3, 5, 8...];
function jumpFloor(number) {
    if (number <= 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }
    var fib1 = 1,
        fib2 = 1,
        result;
    for (var i = 2; i <= number; i++) {
        result = fib1 + fib2;
        fib1 = fib2;
        fib2 = result;
    }
    return result;
}