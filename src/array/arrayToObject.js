const arrayToObject = (arrayOfObjects, keyGetter, valueGetter) => {
    const _keyGetter =
        typeof keyGetter === 'function' ? keyGetter : (obj) => obj[keyGetter];

    const _valueGetter =
        valueGetter == null
            ? (obj) => obj
            : typeof valueGetter === 'function'
            ? valueGetter
            : (obj) => obj[valueGetter];

    return arrayOfObjects.reduce((table, obj) => {
        table[_keyGetter(obj)] = _valueGetter(obj);
        return table;
    }, {});
};

export default arrayToObject;
