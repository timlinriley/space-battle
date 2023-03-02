

class PlayerShip {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
    // playerAttack(alienShip) {
    //     if(Math.random() < playerShip.accuracy ){
    //         alienShip.hull -= playerShip.firepower
    //         alert('Your missile hit the alienShip! Alien ship attack incoming!')
    //         console.log('you hit the alien ship')
    //     } else {
    //         alert('Your attack failed! Alien ship attack incoming')
    //     }
    // }
}
const playerShip = new PlayerShip()

class AlienShip {
    constructor() {
        this.hull = Math.floor(Math.random()*3) +4;
        this.firepower = Math.floor(Math.random()*2) +3;
        this.accuracy =  (Math.random() * (0.8 - 0.6) + 0.600).toFixed(2);
    }
//     compAttack(playerShip){
//         if(Math.random() < this.accuracy ){
//             playerShip.hull -= this.firepower
//             alert('You have been hit!!')
//             console.log('you have been hit')
//     } else{
//         alert('Phew. Alien ship missed you!')
//     }
//   }
}

alienArr = [new AlienShip('as1'), new AlienShip('as2'), new AlienShip('as3'), new AlienShip('as4'), new AlienShip('as5'), new AlienShip('as6')]
console.log(alienArr)



const playRound = () => {
    for (let i= 0; i <alienArr.length; i++){
        const alienShip = alienArr[i]
       
        const displayHull=()=>{
            let ph = document.querySelector('.playerH')
            ph.innerHTML = `User Ship Hull: ${playerShip.hull}`
            let compH = document.querySelector('.compH')
            compH.innerHTML = `Alien Ship # ${i+1} Hull: ${alienShip.hull}`
        }
        displayHull()
        const compAttack= ()=>{
                    if(Math.random() < alienShip.accuracy ){
                        playerShip.hull -= alienShip.firepower
                        alert('You have been hit!!')
                        console.log('you have been hit')
                        console.log(playerShip)
                } else{
                    alert('Phew. Alien ship missed you!')
                } 
                }              
            const playerAttack=()=> {
                if(Math.random() < playerShip.accuracy ){
                    alienShip.hull -= playerShip.firepower
                    alert('Your missile hit the alienShip! Alien ship attack incoming!')
                    console.log('you hit the alien ship')
                    console.log(alienArr)
                } else {
                    alert('Your attack failed! Alien ship attack incoming')
                }
            }  
            while (alienShip.hull > 0 && playerShip.hull > 0){
                compAttack()
                playerAttack()
                  
            if (alienShip.hull <= 0) {
                console.log(`Alien ship ${i+1} has been destroyed`)
        }
          else if (playerShip.hull <=0){
            console.log('you lose')
            alert('you lost! try again')
          }
          else if (alienArr[0].hull <=0 && alienArr[1].hull <=0 && alienArr[2].hull <=0 && alienArr[3].hull <=0 && alienArr[4].hull <=0 && alienArr[5].hull <=0){
            console.log('congratulations you have defeated all alien ships')
            alert('congratulations you have defeated all alien ships')
            break;
          }
           

        //    if (alienShip.hull <=0 && playerShip.hull > 0){
        //        alert('You win! All alien ships have been destroyed!')
        //    }
        //    else if (alienShip.hull > 0 && playerShip.hull <= 0){
        //         alert('Your ship has been destroyed!! Try again')

        //    }
        }
             }
            }
const playGame = () => {
    playerShip.playerAttack()
    alienShip.compAttack()
    playRound()
}
