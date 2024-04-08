console.log('Palindroma')

const parola = prompt('Inserisci una parola')
console.log(parola)

const risultato = isPalindrome(parola)

if (risultato === true) {
    console.log('La parola é palindroma');
} else {
    console.log('La parola non é palindroma');
}

function isPalindrome(text) {
    console.log(text)
    
    text = text.toLowerCase()

    let invertedText = ''

    for (let i = text.length - 1; i >= 0; i--) {

        const char = text.charAt(i)
        console.log(char)
        invertedText += char
    }
    
    console.log(text, invertedText)

    if(text === invertedText) {
        return true
    } else {
        return false
    }
}

function invertiParola(string) {

}