export default function swapProperties(object, propertyA, propertyB) {
    var temp = object[propertyA];
    object[propertyA] = object[propertyB];
    object[propertyB] = temp;
}
//# sourceMappingURL=swapProperties.js.map