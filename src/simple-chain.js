const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length
  },
  addLink(value) {
    arguments.length === 0 ? this.chain.push('') : this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    if (this.chain.length && Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      const index = position - 1
      this.chain.splice(index, 1)
    } else {
      this.chain = []

      throw new Error()
    }

    return this
  },
  reverseChain() {
    this.chain.reverse()

    return this
  },
  finishChain() {
    let chainString = `( ${this.chain.join(' )~~( ')} )`
    this.chain = []

    return chainString
  }
};

module.exports = chainMaker;
