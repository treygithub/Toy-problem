// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    ==>  "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); ==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    ==>  "C-Ww-Aaa-Tttt"

// function accum(str){
//     for(var i = 0; i < str.length; i++){
//     var nip = str.charAt(0).toUpperCase();
//     return nip
//     console.log(nip)
//     }  
// }

const accum = (str) => {
    var count = 1;
    var newStr = “”;
    
    for(var i = 0; i < str.length; i++) {
        newStr += str.charAt(i).toUpperCase();
    
     
      for(var j = 1; j < count; j++) {
        newStr += str[i].toLowerCase();
      }
      count++;
    
      i !== (str.length - 1) ? newStr += ‘-’ : newStr;
    
    }
    return newStr;
    }
    
    accum(“cwAt”)