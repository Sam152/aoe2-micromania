export default function randomEnum(enumThing) {
    var candidates = Object.values(enumThing).filter(function (x) { return typeof x === "string"; });
    var rand = Math.floor(Math.random() * candidates.length);
    var key = candidates[rand];
    return enumThing[key];
}
//# sourceMappingURL=randomEnum.js.map