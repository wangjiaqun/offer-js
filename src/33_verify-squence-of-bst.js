/**
 * @description 二叉搜索树的后序遍历序列
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果
 * 如果是则输出Yes,否则输出No
 * 假设输入的数组的任意两个数字都互不相同。
 * @author wangjiaqun 044033
 * @param {Array} sequence
 * @return
 */
// 思路：最后一项为根节点 从头遍历 小于根节点的连续元素是左子树 大于根节点的连续是右子树 递归遍历
function verifySquenceOfBST(sequence) {
    if (sequence.length <= 0) {
        return false;
    }
    var posIndex; // 找到第一次出现比最后元素大的那一项的索引
    var root = sequence[sequence.length - 1]; // 最后一项元素 即根元素
    // 找出根节点上的左子树
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] > root) {
            posIndex = i;
            break;
        }
    }
    // 找出根节点上的右子树
    for (var j = posIndex; j < sequence.length - 1; j++) {
        if (sequence[j] < root) {
            return false;
        }
    }
    var left = true;
    if (posIndex > 0) {
        var leftArr = sequence.slice(0, posIndex);
        left = verifySquenceOfBST(leftArr);
    }
    var right = true;
    if (posIndex < sequence.length - 1) {
        var rightArr = sequence.slice(posIndex, sequence.length - 1);
        right = verifySquenceOfBST(rightArr)
    }
    return left && right;
}
var test = verifySquenceOfBST([2, 6, 4, 12, 18, 15, 10])
console.log('test--->', test);