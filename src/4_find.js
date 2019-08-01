/**
 * @description 二维数组中的查找
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @author wangjiaqun 044033
 * @param {Number} target 待判断的整数
 * @param {Array} array 输入的二维数组
 * @return {Boolean} true:存在 false:不存在
 */
function find(target, array) {
    // 判断数字类型
    if (typeof target !== 'number') {
        return false;
    }
    // 判断数组非空
    if (!array || array.length === 0 || array[0].length === 0) {
        return false;
    }

    // 两次for循环遍历 这种粗暴的遍历不好
    // var row = array.length,
    //     col = array[0].length;
    // for (var i = 0; i < row; i++) {
    //     for (var j = 0; j < col; j++) {
    //         if (array[i][j] === target) {
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // while循环尝试一下
    var r = 0,
       c = col - 1;
    while(r <= row - 1 && c >= 0){
      if(target === array[r][c]){
          return true;
      } else if(target > array[r][c]){
          ++r;
      } else {
         --c;
      }
    }
    return false;
}

// 二维数组是矩阵 for循环从左上角最小值开始从左到右再换行以此查找
// while循环从右上角开始 比较和target大小 如果target大就同行向左 如果target小就同列向下 这样只循环1/2长度得数组
// 如果target很小 for循环速度快 但是target很大 while优势就出来了