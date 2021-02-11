export function ifThen(obj, predicate, then) {
    return predicate(obj) ? then : obj;
}
