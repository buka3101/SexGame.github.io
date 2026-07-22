let drawCircle2=document.querySelector('#draw2');
let diceImg2=document.querySelector('#diceImg2');
let soundAnimation2=document.querySelector('#sound2');

let resultGame2=document.querySelector('#result2');
let firstPlayer2=document.querySelector('#firstPlayer2');
let secondPlayer2=document.querySelector('#secondPlayer2');
let drawBtn2=document.querySelector('#gameBtn2');

let drawnNumber2=0;
let usedNumbers2=[];

drawBtn2.addEventListener('click', function(){
	diceImg2.classList.add('diceAnimation');
	drawCircle2.classList.add('appear');

	soundAnimation2.play();

	drawBtn2.style.display='none';



	setTimeout(function(){
		if(usedNumbers2.length >= 6) {
			usedNumbers2 = [];
		}
		
		let availableNumbers2 = [];
		for(let i = 8; i <= 13; i++) {
			if(!usedNumbers2.includes(i)) {
				availableNumbers2.push(i);
			}
		}
		
		if(availableNumbers2.length === 0) {
			usedNumbers2 = [];
			availableNumbers2 = [8, 9, 10, 11, 12, 13];
		}
		
		let randomIndex = Math.floor(Math.random() * availableNumbers2.length);
		drawnNumber2 = availableNumbers2[randomIndex];
		usedNumbers2.push(drawnNumber2);
		
		diceImg2.setAttribute('src', 'img2/'+drawnNumber2+'.png');
		console.log(diceImg2);
		drawCircle2.textContent=drawnNumber2;

		drawBtn2.style.display='inline-block';

		diceImg2.classList.remove('diceAnimation');
		drawCircle2.classList.remove('appear');

		game2(drawnNumber2);
	},1750)
})

function game2(num){
}
