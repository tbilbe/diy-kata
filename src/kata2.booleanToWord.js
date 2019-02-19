//Great use of a ternary operator. Well done.

const booleanToWord = (boolean) => {
  return (boolean === true ? 'Yes' : 'No');
};

// or the long way...
//  if (boolean === true) {
//          return 'Yes'
//      } else {
//          return 'No'
//      }
//     };



module.exports = booleanToWord;
 