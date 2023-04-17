const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1,
    separator = options.hasOwnProperty('separator') ? options.separator : '+',
    addition = options.hasOwnProperty('addition') ? options.addition : '',
    additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1,
    additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|',
    result = '';
  
  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j !== additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }

    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
