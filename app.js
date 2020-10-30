
/*
Challenge 1: Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

Example:

Input:
'dcba'
'zycxbwa'
'AzycxbCwBaA'
Expected Output:
'abcd'
'abcwxyz'
'AABCabcwxyz'
*/

//CHALLENGE ONE - FIRST CHALLENGE


let scattered_letters = "abncgeduiob";

function sortString(unarranged_str) {
  let seperate_string = unarranged_str.split("")
  let seperated_words = seperate_string.sort();
  join_final_word = seperated_words.join("");
   return;
}

sortString(scattered_letters);

console.log(join_final_word);


/*
Challenge 2: Write a function which counts the number of vowels in a given string. Return the count number.

Passing the string "Hello world!" as an argument to your vowelCount() function would result in the number 3 being returned.
*/



function vowelCount(str){
      let vowels = "aeiouAEIOU";
      let vowel_count = 0;

      for(i = 0; i < str.length; i++){
         if (vowels.indexOf(str[i]) !== -1) {
            vowel_count ++;
         }
      }

      return vowel_count;
}

console.log(vowelCount("hello world"));

 









