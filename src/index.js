module.exports = function longestConsecutiveLength(array) {
    var arr = array.slice();
    var max = 0;
    var obj = {};

    if (!arr) {
        return 0;
    }
    for (var i = 0; i < arr.length; i++)
        obj[arr[i]] = 1;

    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        var currentElement = arr[i];
        while (obj[currentElement++]) {
            sum++;
        }
        if (sum > max)
            max = sum;
    }
    return max;
}
