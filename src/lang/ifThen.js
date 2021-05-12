const ifThen = (obj, predicate, then) => predicate(obj) ? then : obj;

export default ifThen;