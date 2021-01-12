const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

// hours.style.transform = "rotate(30deg)";

setInterval(function(){
	const day = new Date();
	currSec = day.getSeconds();
	currMin = day. getMinutes();
	currHour = day.getHours();

	console.log(`${currHour}:${currMin}:${currSec}`);

	fixTransition(seconds, currSec);
	fixTransition(minutes, currMin);
	fixHoursTransition(hours, currHour);

	seconds.style.transform = `rotate(${(currSec * 360) / 60 + 90}deg)`;
	minutes.style.transform = `rotate(${(currMin * 360) / 60 + 90}deg)`;
	hours.style.transform = `rotate(${(currHour * 360) / 24}deg)`;

}, 1000);

function fixTransition(hand, time){
	if (time === 59){
		hand.classList.add("noTransition");
	}
	else if (time >= 1){
		hand.classList.remove("noTransition");
	}
}

function fixHoursTransition(hand, time){
	if (time === 23){
		hand.classList.add("noTransition");
	}
	else if (time >= 1){
		hand.classList.remove("noTransition");
	}
}

