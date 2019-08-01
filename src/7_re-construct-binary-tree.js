/**
 * @description 重建二叉树
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回
 * @author wangjiaqun 044033
 * @param {Array} pre 前序遍历数组
 * @param {Array} vin 中序遍历数组
 * @return {TreeNode} 树中的某个节点
 */
// 先序遍历第一个位置是根节点treeNode，中序遍历的根节点位置在中间p
// 中序遍历里，在p左边的肯定是treeNode的左子树的中序数组，p右边的肯定是treeNode的右子树的中序数组
// 先序遍历的第二个位置到p，也是treeNode左子树的先序子数组，剩下p右边的就是treeeNode的右子树的先序子数组
// 把四个数组找出来，分左右递归调用即可。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin) {
    if (!pre || pre.length === 0) {
        return;
    }
    var treeNode = new TreeNode(pre[0]);
    for (var i = 0; i < pre.length; i++) {
        if (vin[i] === pre[0]) {
            treeNode.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
            treeNode.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1));
        }
    }
    return treeNode;
}
var pre = [1, 2, 4, 7, 3, 5, 6, 8];
var vin = [4, 7, 2, 1, 5, 3, 8, 6];
var test = reConstructBinaryTree(pre, vin);
console.log('test--->', test);