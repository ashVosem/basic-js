module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error()

    const flags = {
        1 : '--double-prev',
        2 : '--double-next',
        3 : '--discard-prev',
        4 : '--discard-next'
    }
    let answer = []

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case flags[4]:
                i++
                break
            case flags[3]:
                answer.pop()
                break
            case flags[2]:
                if(i + 1 < arr.length) {
                    answer.push(arr[i + 1])
                }
                break
            case flags[1]:
                if (i !== 0) {
                    answer.push(arr[i - 1])
                }
                break
            default:
                answer.push(arr[i])
        }
    }
    return answer
};
