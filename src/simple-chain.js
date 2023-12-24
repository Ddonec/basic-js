const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  node: [],

  getLength() {
    return this.node.length;
  },

  addLink(value) {
    this.node.push(value !== undefined ? value : "( null )");
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.node.length) {
      this.node.splice(position - 1, 1);
      return this;
    } else {
      this.node.splice(0);
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.node.reverse();
    return this;
  },

  finishChain() {
    const result = this.node.map(item => `( ${item} )`).join("~~");
    this.node.splice(0);
    return result;
  },
};


module.exports = {
   chainMaker,
};
