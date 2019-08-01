/**
 * @description 替换空格
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy
 * @author wangjiaqun 044033
 * @param {String} 要替换的字符串
 * @return {String} 替换后的字符串
 */
function replaceSpace(str) {
    return str.replace(/\s/g, '%20');
}