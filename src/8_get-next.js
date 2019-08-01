/**
 * @description 二叉树的下一个结点
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回
 * 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针
 * @author wangjiaqun 044033
 * @param {TreeLinkNode} pNode 树中的某个节点
 * @return {TreeLinkNode}下一节点
 */
// 思路：
// 1 该节点有右子树 下一节点为右子树的最左子节点 即右子树的中序遍历数组第一项
// 2 该节点无右子树
//     2.1 该节点为父节点的左子节点 下一节点为父节点
//     2.2 该节点为父节点的右子节点 沿着父节点向上找 直到找到某节点A的父节点的左子节点是其本身A 则A的父节点是下一节点
function TreeLinkNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}
function getNext(pNode) {
    if (pNode === null) {
        return null;
    }
    if (pNode.right !== null) { // 条件(1)
        pNode = pNode.right;
        while (pNode.left !== null) {
            pNode = pNode.left;
        }
        return pNode;
    } else if (pNode.next !== null && pNode.next.left === pNode) { // 条件(2.1)
        return pNode.next;
    } else if (pNode.next !== null && pNode.next.right === pNode) { // 条件(2.2)
        while (pNode.next !== null && pNode.next.left !== pNode) {
            pNode = pNode.next;
        }
        return pNode.next;
    } else { // 该节点为根节点
        return null;
    }
}