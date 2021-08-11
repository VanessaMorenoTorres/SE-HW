// homework problem for strings 
// 3: Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    var prompt = require('prompt-sync')();
    var letter = (prompt('enter a letter to see if it is a vowel: '))
    function isCharacterVowel(letter){
        if ((letter === 'a') ||  (letter === 'e')|| (letter === 'i')|| (letter === 'o')|| (letter === 'u')){
            return 'true, ' + letter + ' is a vowel'
        }
        else{
            return 'false, ' + letter + ' is not a vowel'   
        }
    }
    console.log(isCharacterVowel(letter))

// 6: Define a function reverseString that computes the reversal of a string. 
    var word = (prompt('enter a word you would like to see backwards: '))
    function backwards(i) {
        return newString = i.split('').reverse().join('')
    }
    console.log(backwards(word))

// 7: Write a function findLongestWord that takes an array of words and returns the length of the longest one.
    var array = ['Vanessa', 'needs', 'to', 'buy', 'more', 'waffles', 'for', 'breakfast', 'before', 'class']
    function findLongestWord(array) {
        var longer = array[0]
        for(let i=1; i<array.length; i++){
            if (array[i].length>longer.length) {
                longer = array[i]
            }
        }
        return longer + ' is the longest word and has ' + longer.length + ' letters'
    }
    console.log(findLongestWord(array))

// 8: Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
    //???? I do not understand the question