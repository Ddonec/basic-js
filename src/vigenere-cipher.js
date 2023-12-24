const { NotImplementedError } = require("../extensions/index.js");

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
   constructor(value = true) {
      this.value = value;
      this.maximum = "Z".codePointAt(0) - "A".codePointAt(0) + 1;
      this.start = "A".codePointAt(0);
   }

   encrypt(message, key) {
      const [messageUC, keyUC] = this.prepareParams(message, key);
      let result = "";
      let ignore = 0;
      for (let i = 0; i < messageUC.length; i++) {
         const symbol = messageUC.charCodeAt(i) - this.start;
         const offset = keyUC.charCodeAt(i - ignore) - this.start;
         if (symbol >= 0 && symbol <= this.maximum) {
            result += String.fromCharCode(((symbol + offset) % this.maximum) + this.start);
         } else {
            result += messageUC[i];
            ignore++;
         }
      }
      return this.value ? result : result.split("").reverse().join("");
   }

   decrypt(message, key) {
      const [messageUC, keyUC] = this.prepareParams(message, key);
      let result = "";
      let ignore = 0;
      for (let i = 0; i < messageUC.length; i++) {
         const symbol = messageUC.charCodeAt(i) - this.start;
         const offset = keyUC.charCodeAt(i - ignore) - this.start;
         if (symbol >= 0 && symbol <= this.maximum) {
            result += String.fromCharCode(((symbol - offset + this.maximum) % this.maximum) + this.start);
         } else {
            result += messageUC[i];
            ignore++;
         }
      }
      return this.value ? result : result.split("").reverse().join("");
   }

   prepareParams(message, key) {
      if (!message || !key) {
         throw new Error("Incorrect arguments!");
      }
      let keyUC = key.toUpperCase();
      if (message.length > key.length) {
         keyUC = keyUC.repeat(Math.ceil(message.length / key.length));
      }
      return [message.toUpperCase(), keyUC];
   }
}

module.exports = {
   VigenereCipheringMachine,
};
