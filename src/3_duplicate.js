/**
 * @description 数组中的重复数字
 * 在一个长度为n的数组里的所有数字都在0到n-1的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。
 * 请找出数组中任意一个重复的数字。
 * 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 * @author wangjiaqun 044033
 * @param {Array} arr
 * @param {Array} duplication
 * @return {Boolean} true:重复 false:不重复
 */
/**
 * 排序后挑重复 O(n^2) 不好
 * 注意: 所有的数字都在0~n-1范围 不是任意数字
 * 可以把数组中的每个值放到对应的下标的位置上
 * 1.从头到尾依次扫描这个数组中的每个数字
 * 2.当扫描下标为i的数字时，首先比较这个数字(用m表示)是不是等于i
 * 3.如果是，则接着扫描下一个数字，如果不是，则再拿它和第m个数字进行比较
 * 4.如果它和第m个数字相等，就找到一个重复的数字（该数字在下标i和m的位置都出现了）
 * 5.如果它和第m个数字不相等，就把第i个数字和第m个数字交换，把m放到属于它的位置
 * 6.重复比较交换过程，直到我们发现一个重复的数字  
 * 总结 [2, 4, 3, 1, 2, 2] i为0时值是2 所以始终在0这个位置和arr[arr[i]]交换值 直到arr[0]和arr[arr[i]]相等就是重复数字
 */
function duplicate(numbers, duplication) {
    // 这是最易理解的新创建一个临时数组来判断 如果临时数组中没有就存进去 如果已存在说明重复
    // 非空判断
    if (!numbers || numbers.length <= 0) {
        return false;
    }
    // 元素边界值判断
    for (var n = 0; n < numbers.length; n++) {
        if (numbers[n] < 0 || numbers[n] >= numbers.length) {
            return false;
        }
    }
    var singleArr = [];
    for (var i = 0; i < numbers.length; i++) {
        // 如果singleArr里没有numbers这一项 就放进去 如果检测已经有了 说明重复
        if (singleArr.indexOf(numbers[i]) === -1) {
            singleArr.push(numbers[i]);
        } else {
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
}
function duplicate(numbers, duplication) {
    // 这种代码不需要重新开辟变量 只在原数组上变化
    // 非空判断
    if (!numbers || numbers.length <= 0) {
        return false;
    }
    // 元素边界值判断
    for (var n = 0; n < numbers.length; n++) {
        if (numbers[n] < 0 || numbers[n] >= numbers.length) {
            return false;
        }
    }
    for (var i = 0; i < numbers.length; i++) {
        while (numbers[i] !== i) {
            if (numbers[i] === numbers[numbers[i]]) {
                duplication[0] = numbers[i];
                return true;
            }
            var tmp = numbers[i];
            numbers[i] = numbers[tmp];
            numbers[tmp] = tmp;
        }
    }
    return false;
}