module.exports = function countCats(args) {
  return args.flat().reduce((counter, elem) => elem === '^^' ? counter + 1 : counter, 0)
};
