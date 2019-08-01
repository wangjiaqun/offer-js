/**
 * @description 对称的二叉树
 * 请实现一个函数，用来判断一颗二叉树是不是对称的
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的
 * @author wangjiaqun 044033
 * @param {TreeNode} pRoot
 * @return {Boolean} true对称 false不对称
 */
// 思路：递归比较节点的左右子节点
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function isSymmetrical(pRoot) {
    if (!pRoot) {
        return true;
    }
    return isEqual(pRoot.left, pRoot.right);
}
/**
 * @param {*} left 左节点
 * @param {*} right 右节点
 * @return {Boolean} true对称 false不对称
 */
function isEqual(left, right) {
    // 左右节点都没有
    if (!left && !right) {
        return true;
    }
    // 只有左节点或者只有右节点
    if (!left || !right) {
        return false;
    }
    // 两个节点都有 递归比较
    return left.val !== right.val ? false : isEqual(left.left, right.right) && isEqual(left.right, right.left);
}