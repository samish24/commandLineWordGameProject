
const arr = process.argv.slice(2)

const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

// let resultArr = [];

function translate() {

 let resultArr = [];

for(let i = 0; i < arr.length; i++){
    const myCase = arr[i].charAt(0).toUpperCase() === arr[i].charAt(0);
//____________________________________________________________________________
    
    if(!vowel.includes(arr[i].charAt(0)) && vowel.includes(arr[i].charAt(1))){
        let resultWord = `${arr[i].slice(1)}${arr[i].charAt(0).toLowerCase()}ay`

        if (myCase) {
            resultWord = resultWord.charAt(0).toUpperCase() + resultWord.slice(1);
        }

        resultArr.push(resultWord);
    }
//____________________________________________________________________________

 else  if(!vowel.includes(arr[i].charAt(0)) && !vowel.includes(arr[i].charAt(1))){
    let resultWord = `${arr[i].slice(2)}${arr[i].charAt(0).toLowerCase()}${arr[i].charAt(1).toLowerCase()}ay`;

    if (myCase) {
        resultWord = resultWord.charAt(0).toUpperCase() + resultWord.slice(1);
    }
    resultArr.push(resultWord);
}
//____________________________________________________________________________

else if(vowel.includes(arr[i].charAt(0))){
    resultArr.push(`${arr[i]}way`);
}
//____________________________________________________________________________
  else 
  {resultArr.push(`${arr[i]}`);} 
    }

console.log(resultArr.join(' '));

}


translate();