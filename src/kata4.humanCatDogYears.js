const humanCatDogYears = (number) => {
   
    let catYears = ((number > 1 ? 15 : '') + (number > 1 ? +9 : '') + (number > 2 ?  (number * 4) - 8 : ''));
    let dogYears = ((number > 1 ? 15 : '') + (number > 1 ? +9 : '') + (number > 2 ?  (number * 5) - 10 : ''));
    
    const years =[number, catYears, dogYears];
    
    return years;

}

module.exports = humanCatDogYears;
