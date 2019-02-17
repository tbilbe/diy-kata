//Good concise code used here. You may want to consider more using line breaks
//so everything isn't running over one line.
//It's much easier to read and understand that way.
//See the test feedback as to how this code would fail if given unexpected data.

const humanCatDogYears = (number) => {

  let catYears = ((number > 1 ? 15 : '') + (number > 1 ? +9 : '') + (number > 2 ? (number * 4) - 8 : ''));
  let dogYears = ((number > 1 ? 15 : '') + (number > 1 ? +9 : '') + (number > 2 ? (number * 5) - 10 : ''));

  const years = [number, catYears, dogYears];

  return years;

}

module.exports = humanCatDogYears;
