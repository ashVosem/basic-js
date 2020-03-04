module.exports = function transform(arr) {
    const flags = {
        1 : '--double-next',
        2 : '--double-prev',
        3 : '--discard-prev',
        4 : '--discard-next'
    }

    arr.flat(1).forEach((elem, index, arr) => {
        if(elem === flags[4]) {
            arr.splice(index, 2)
        }
        if(elem === flags[3]) {
            arr.splice(index - 1 , 2)
        }
        if(elem === flags[2]) {
            arr.splice(index, 1, arr[index - 1])
        }  
        if(elem === flags[1]) {
            arr.splice(index, 1, arr[index + 1])
        }
        
    })

    return arr
};
