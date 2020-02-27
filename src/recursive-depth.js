module.exports = class DepthCalculator {
    calculateDepth(arr) {  
        return 1 + (arr instanceof Array ? arr.reduce((max, elem) => Math.max(max, this.calculateDepth(elem)), 0) : -1);
    }
};
