const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(first=true) {
    if (first === false) {
      this.reverse = true;
    }
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length));
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91) {
        let newCharCode = ((message.charCodeAt(i) + key.charCodeAt(keyIndex)) % 26) + 65;
        result += String.fromCharCode(newCharCode);
        keyIndex++;
      }
      else {
        result += message[i];
      }
    }
    if (this.reverse) {
      result = result.split('').reverse().join('');
    }
    return result;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length));
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91) {
        let newCharCode = ((message.charCodeAt(i) - key.charCodeAt(keyIndex) + 26) % 26) + 65;
        result += String.fromCharCode(newCharCode);
        keyIndex++;
      }
      else {
        result += message[i];
      }
    }
    if (this.reverse) {
      result = result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
