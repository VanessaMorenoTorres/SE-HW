// homework problem for numbers 
// 1: Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
    var prompt = require('prompt-sync')();
    var num1 = Number(prompt('Please enter your first number: '))
    var num2 = Number(prompt('Please enter your second number: '))
 
    maxOfTwoNumbers = (num1,num2) =>{
        if(num1>num2){
            return num1
        }
        else{
            return num2
        }
    }
    //console.log(maxOfTwoNumbers(num1,num2))
    var nums = maxOfTwoNumbers(num1,num2)

// 2: Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
    var num3 = Number(prompt('Please enter your third number: '))
    maxOfThree = (nums, num3) =>{
        if (nums>num3){
            return nums
        }
        else{
            return num3
        }
    }
    console.log(maxOfThree(nums,num3)) 
        //Also 2. but a longer way  
            // maxOfThree = (num1,num2, num3) =>{
            //     if(num1>num2 && num1>num3){
            //         return num1
            //     }
            //     if(num2>num1 && num2>num3){
            //         return num2
            //     }
            //     else{
            //         return num3
            //     }
            // }
            // console.log(maxOfThree(num1,num2,num3))

// 4: Define a function sumArray and that sums all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, 
    var array = [1,2,3,4,5,6]
    var sum = 0
    function sumArray(array){
        for (let i=0; i<array.length; i++) { 
            sum += array[i]
        }
        return sum
    }
    console.log(sumArray(array) + ' is the sum of all the numbers in our array') // should display 21

    // 4: a function that multiplies multiplyArray([1,2,3,4]) should return 24.
        var product = 1
        function multiplyArray(array){
            for(i=0; i<array.length; i++){
                product *= array[i]
            }    
            return product
        }
        console.log(multiplyArray(array) + ' is the product of all the numbers in our array')

// 5: Write a function that returns the number of arguments passed to the function when called.
    //????????????????????????? I do not understand the question
