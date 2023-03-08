export default function columnize(input, columns) {
    var newArray = [];
    var indexMax = input.length - 1;
    input.forEach(function (item, index) {
        var newIndex = index === indexMax ? indexMax : ((index * columns) % indexMax);
        newArray[newIndex] = item;
    });
    return newArray;
}
//# sourceMappingURL=columnize.js.map