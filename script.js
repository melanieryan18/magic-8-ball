$(document).ready(function(){
var magic8Ball = {};
magic8Ball.answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it", "yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
$("#answer").hide();
magic8Ball.askQuestion = function (question)
{
	var randomNumber = Math.random();
	var	 randomNumberArray = randomNumber * magic8Ball.answers.length;
	var randomIndex = Math.floor(randomNumberArray);
	var randomAnswer = magic8Ball.answers [randomIndex];
	$("#answer").text(randomAnswer);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	$("#8ball").effect( "shake" );
	$("#answer").fadeIn(4000);
	console.log (question);
	console.log (randomAnswer);
};
	var onClick = function() {
		$("answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
		setTimeout(
       function() {
    var question = prompt("ASK A YES/NO QUESTION!");
		magic8Ball.askQuestion(question);
	}, 500);
	};
		$("#questionButton").click(onClick);
});
