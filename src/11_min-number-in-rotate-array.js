/**
 * @description 旋转数组的最小数字
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1
 * NOTE：给出的所有元素都大于0，若数组大小为0，请返回0
 * @author wangjiaqun 044033
 * @param {Array} rotateArray 旋转后的数组
 * @return
 */
// 如果仅仅是一次for循环 复杂度O(n)
// 1 数组长度为0 返回0
// 2 数组长度为1 返回唯一元素
// 3 arr[0] < arr[arr.length - 1] 说明数组未旋转 返回arr[0]
// 4 如果没有重复元素 取首中末三点 二分法排查
// 5 如果首末重复了 也可二分法 向中末那1/2即可
function minNumberInRotateArray(rotateArray) {
    if (!(rotateArray instanceof Array)) {
        return 0;
    }
    if (rotateArray.length === 0) {
        return 0;
    }
    // 数组长度为1返回第一项 或者 数组第一项比最后一项小 说明没有旋转 也返回第一项
    if (rotateArray.length === 1 || rotateArray[0] < rotateArray[rotateArray.length - 1]) {
        return rotateArray[0];
    }
    var low = 0,
        high = rotateArray.length - 1,
        middle;
    while (high - low >= 1) {
        if (high - low === 1) { // 当high和low挨着时 high就是最小值
            break;
        }
        middle = Math.floor((low + high) / 2)
        // 二分法比较
        if (rotateArray[low] <= rotateArray[middle]) {
            low = middle;
        } else if (rotateArray[middle] <= rotateArray[high]) {
            high = middle;
        }
    }
    return rotateArray[high];
}
var test = minNumberInRotateArray([3,3,3,1,3]);
console.log('test--->', test);