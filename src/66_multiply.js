/**
 * @description 构建乘积数组
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
 * 不能使用除法。
 * 注意: B[i]的计算方法中乘数没有A[i]
 * | B0     | 1   | A1  | A2  | ...    | A(n-2) | A(n-1) |
 * | B1     | A0  | 1   | A2  | ...    | A(n-2) | A(n-1) |
 * | B2     | A0  | A1  | 1   | ...    | A(n-2) | A(n-1) |
 * | ...                    | 1      |
 * | B(n-2) | A0  | A1  | ... | A(n-3) | 1      | A(n-1) |
 * | B(n-1) | A0  | A1  | ... | A(n-3) | A(n-2) | 1      |
 * @author wangjiaqun 044033
 * @param {Array} array 给定的数组A
 * @return 组成的新数组B
 */
function multiply(array) {
    // 数组A长度为1
    if(array.length <= 1){
        return array;
    }
    var arrB = [];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        // i位置之前所有数乘积
        var bPre = 1;
        for (var j = 0; j < i; j++) {
            bPre *= array[j];
        }
        // i位置之后所有数乘积
        var bNext = 1;
        for (var k = i + 1; k < len; k++) {
            bNext *= array[k];
        }
        arrB.push(bPre * bNext);
    }
    
    return arrB;
}