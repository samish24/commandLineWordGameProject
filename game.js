
const myArry = process.argv.slice(2)

// console.log(myArry);

const possibleChoices = ['Rock', 'Paper', 'Scessors'];
function computerChoice()  {
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function play() {

if(myArry.length !== 1) {
    console.error('please enter exactly one input, you can choose between: Rock, Paper or Scessors');

} ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

else if(myArry[0].trim() !== possibleChoices[0] && myArry[0].trim() !== possibleChoices[1] && myArry[0].trim() !== possibleChoices[2]){
    console.error('Please Entre Rock, Paper or Scessors!')

}////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  else {

    const choise = computerChoice();

    switch (true) {

        case (myArry[0] === choise):
            console.log(`You chose ${myArry[0]}. Computer chose ${choise}. DRAW!`);
            break;
            //////////////////////////////////////////////////////


            case (myArry[0] === 'Rock'):
                if(choise === 'Paper'){
                    console.log(`You chose ${myArry[0]}. Computer chose ${choise}. You Lose!`);
                break;
            } else {
                console.log(`You chose ${myArry[0]}. Computer chose ${choise}. You win!`);
                break;
            }
            
            ///////////////////////////////////////////////////////

            case (myArry[0] === 'Paper'):
                if(choise === 'Scessors'){
                    console.log(`You chose ${myArry[0]}. Computer chose ${choise}. You Lose!`);
                break;
            } else {
                console.log(`You chose ${myArry[0]}. Computer chose ${choise}. You win!`);
                break;
            }
            ////////////////////////////////////////////////////

            case (myArry[0] === 'Scessors'):
                if(choise === 'Rock'){
                    console.log(`You chose ${myArry[0]}. Computer chose ${choise}. You Lose!`);
                break;
            } else {
                console.log(`You chose ${myArry[0]}. Computer chose ${choise}. You win!`);
                break;
            }


            //////////////////////////////////////////////////////


        default:
            console.error('Unknown ERROR');
    }

 }


};


play();
