module.exports = function transform(arr) {
    arr.flat(1).forEach((elem, index, arr) => {
        if(elem === '--discard-next' || elem === '--double-next' 
        || elem === '--discard-prev' ||  elem === '--double-prev') {
            if(elem[index + 1] === '--discard-next' || elem[index + 1] === '--double-next' 
                || elem[index + 1] === '--discard-prev' ||  elem[index + 1] === '--double-prev') {
                arr.slice(index, index)
            }
            if(elem[index - 1] === '--discard-next' || elem[index - 1] === '--double-next' 
                || elem[index - 1] === '--discard-prev' ||  elem[index - 1] === '--double-prev') {
                arr.slice(index, index) 
            }
            if(elem[0] === '--discard-prev' ||  elem[0] === '--double-prev') {
                arr.slice(index, index) 
            }
            if(elem[arr.length - 1] === '--discard-next' || elem[arr.length - 1] === '--double-next') {
                arr.slice(index, index) 
            }
        }
        if(elem === '--double-next' && elem[index + 2] === '--discard-prev') {
            arr.slice(index, index) 
            arr.slice(index + 2, index + 2) 
        }
        
        if(elem === '--discard-next') {
            arr.splice(index, 2)
        }
        if(elem === '--discard-prev') {
            arr.splice(index - 1 , 2)
        }
        if(elem === '--double-next') {
            arr.splice(index, 1, arr[index + 1])
        }
        if(elem === '--double-prev') {
            arr.splice(index, 1, arr[index - 1])
        }    
    })
    return arr
};
