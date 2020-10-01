/* Problem 1: Program and observe the following requirements:  
  - Create a null object and set its variable name as user; 
  - Add a name attribute and set its value as John; 
  - Add a surname attribute and set its value as Mike; 
  - Modify the value of name attribute as Peter; 
  - Delete name attribute of user. 
*/

var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;
console.log(user); // output { surname: 'Mike' }