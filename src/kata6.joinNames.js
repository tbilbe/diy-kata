const joinNames = (namesObj) => {

    const resultsArray = namesObj.map((itemObj, i, arr) => {
        if (arr.length - 1 === i) {
            return '& ' + itemObj.name;
        } else if (arr.length - 2 === i) {
            return itemObj.name + ' ';
        } else {
            return itemObj.name + ', ';
        }
    });

    return resultsArray.join('');
}

module.exports = joinNames;
