/**
 * @description 二叉树的镜像
 * 二叉树的镜像定义：
 *       源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
 * @author wangjiaqun 044033
 * @param {TreeNode} root 树根节点
 */
// 思路：左右节点交换 递归
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function mirror(root) {
    if (!root) {
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    mirror(root.left);
    mirror(root.right);
}