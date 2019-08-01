/**
 * @description 从上往下打印二叉树
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * @author wangjiaqun 044033
 * @param {TreeNode} root 根节点
 * @return
 */
// 思路：
// 两个数组 一个队列存对象节点 一个普通数组存值
// 队列根据层顺序入队 出队取值 这样保证先入队的先拿值
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function printFromTopToBottom(root) {
    if (root === null) {
        return [];
    }
    var queue = [root]; // 这个数组用于存节点对象
    var result = []; // 这个数组用于存值
    while (queue.length) {
        var ele = queue.shift();
        result.push(ele.val);
        // 以根节点为例 先入队根节点(root) 再入队左节点(root.l) 再入队右节点(root.r)
        // 取值时先取根节点 再取左节点 取左节点时的循环 入队左节点的左右节点(root.l.l 和 root.l.r)
        // 此时队列状态 [(root.r), (root.l.l), (root.l.r)] 下一轮循环出队的是(root.r) 入队的是(root.r.l)和(root.r.r)
        // 此时状态[(root.l.l), (root.l.r), (root.r.l), (root.r.r)] 此时队列中都是第三层节点 并且从左向右排列
        if (ele.left !== null) {
            queue.push(ele.left);
        }
        if (ele.right !== null) {
            queue.push(ele.right);
        }
    }
    return result;
}