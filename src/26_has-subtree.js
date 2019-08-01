/**
 * @description 树的子结构
 * 输入两棵二叉树A，B，判断B是不是A的子结构
 * ps：我们约定空树不是任意一个树的子结构
 * @author wangjiaqun 044033
 * @param {TreeNode} pRoot1 树A根节点
 * @param {TreeNode} pRoot2 树B根节点
 * @return
 */
// 思路：递归判断A的节点是否等于B的根节点
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function hasSubtree(pRoot1, pRoot2) {
    if (pRoot1 === null || pRoot2 === null) {
        return false;
    }
    return isSubtree(pRoot1, pRoot2) || hasSubtree(pRoot1.left, pRoot2) || hasSubtree(pRoot1.right, pRoot2);
}
/**
 * @description A的节点和B的根节点相等时判断子树是否相等
 * @param {TreeNode} root1 A的相等片段的根节点
 * @param {TreeNode} root2 B的根节点
 */
function isSubtree(root1, root2) {
    if (root2 === null) {
        return true;
    }
    if (root1 === null) {
        return false;
    }
    if (root1.val === root2.val) {
        return isSubtree(root1.left, root2.left) && isSubtree(root1.right, root2.right);
    } else {
        return false;
    }
}