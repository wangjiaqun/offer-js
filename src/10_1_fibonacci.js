/**
 * @description 斐波那契数列
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39
 * @author wangjiaqun 044033
 * @param {Number} n 一个整数
 * @return {Number} 第n项
 */
// 递归写法可能会内存溢出 不推荐 复杂度O(2^n)
// function Fibonacci(n) {
//     if (n <= 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     return Fibonacci(n - 1) + Fibonacci(n - 2);
// }
// 不用递归 复杂度O(n)
function Fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    var fibOne = 0,
        fibTwo = 1,
        num;
    for (var i = 2; i <= n; i++) {
        num = fibOne + fibTwo;
        fibOne = fibTwo;
        fibTwo = num;
    }
    return num;
}
var aa = Fibonacci(2);
console.log('aa--->', aa);