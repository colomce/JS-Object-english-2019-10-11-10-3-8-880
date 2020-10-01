/* Problem 2:  Program and observe the following requirements: 
calculate how many pieces of fruit there are in the fruit object and 
the output should be 50. 
*/

var fruit = {
        apple: 20,
        pear: 20,
        peach: 10
    };

console.log(Object.values(fruit)
                  .reduce((accumulator , currentValue) => accumulator + currentValue));