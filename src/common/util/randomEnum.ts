export default function randomEnum<TEnum>(enumThing: TEnum) {
    const candidates = Object.values(enumThing).filter((x) => typeof x === 'string');
    const rand = Math.floor(Math.random() * candidates.length);
    const key = candidates[rand];
    return enumThing[key as keyof TEnum];
}
