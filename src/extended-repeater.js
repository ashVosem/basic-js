module.exports = function repeater(str, options) {
    if(typeof str !== 'string') str = `${str}`
    
    if(!('repeatTimes' in options) || options.repeatTimes === undefined) {
        options.repeatTimes = 1
    }
    if(!('addition' in options) || options.addition === undefined) {
        options.addition = ""
    }
    if(!('additionRepeatTimes' in options) || options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 0
    }
    if(!('separator' in options) || options.separator === undefined) {
        options.separator = "+"
    }
    if(!('additionSeparator' in options) || options.additionSeparator === undefined) {
        options.additionSeparator = ""
    }
    let add
    options.additionRepeatTimes === 0
    ? add = options.addition
    : add = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1).concat(options.addition)
    
    return str.concat(add).concat(options.separator).repeat(options.repeatTimes - 1).concat(str).concat(add)
};
