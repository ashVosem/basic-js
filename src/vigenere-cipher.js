class VigenereCipheringMachine {
    constructor(param) {
        this.param = param
    }

    transform_key(text, key) {
        let transform_key = key.repeat(Math.ceil(text.length/key.length)).split('')

        for(let i = 0; i < text.length ;i++) {
            if(text[i] === ' ') {  
                transform_key.splice(i, 0, ' ')
            }
        }
       
        return transform_key.join('')
    }

    encrypt(text, key) {
        if (!text || !key) throw new Error()        

        let letter
        let answer = ''

        key = this.transform_key(text, key)
        
        for(let i = 0; i < text.length; i++) {
            if(/[a-zA-Z]/.test(text[i])) {
                letter = (text[i].toUpperCase().charCodeAt() - 65 + key[i].toUpperCase().charCodeAt() - 65)%26 + 65
                answer = answer.concat(String.fromCharCode(letter))
            }
            else answer = answer.concat(text[i])
            
        }
        return this.param === undefined ? answer : answer.split('').reverse().join('')
    }

    decrypt(text, key) {
        if (!text || !key) throw new Error()        

        let letter
        let answer = ''

        key = this.transform_key(text, key)
        
        for(let i = 0; i < text.length; i++) {
            if(/[a-zA-Z]/.test(text[i])) {
                letter = (text[i].toUpperCase().charCodeAt() - 65 - key[i].toUpperCase().charCodeAt() - 65)%26
                if(letter < 0) {
                    letter +=26
                }
                answer = answer.concat(String.fromCharCode(letter + 65))
            }
            else answer = answer.concat(text[i])
        }
        return this.param === undefined ? answer : answer.split('').reverse().join('')
    }
}

module.exports = VigenereCipheringMachine;
