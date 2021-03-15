module.exports = function check(str, bracketsConfig) {
    let chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (chars[i - 1] === bracketsConfig[j][0] && chars[i] === bracketsConfig[j][1]) {
                chars.splice(i - 1, 2);
                i = 0;
                break;
            }
        }
    }
    return chars < 1;
}