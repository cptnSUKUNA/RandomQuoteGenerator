/** @format */

const button = document.getElementById("generate");

button.addEventListener("click", function () {
	var quotes = [
		"“A friend is someone who knows all about you and still loves you.”",
		"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
		"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
		"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
		"“It is better to be hated for what you are than to be loved for what you are not.”",
		"“Be yourself; everyone else is already taken.”",
		"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
		"“So many books, so little time.”",
		"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
	];

	var authors = [
		"― Elbert Hubbard",
		"― Mahatma Gandhi",
		"― Maya Angelou",
		"― Ralph Waldo Emerson",
		"― Andre Gide, Autumn Leaves",
		"― Oscar Wilde",
		"― Marilyn Monroe",
		"― Frank Zappa",
		"― Albert Einstein",
		"― Bernard M. Baruch",
	];

	// Generate a random index
	var randomIndex = Math.floor(Math.random() * quotes.length);

	// Update the HTML content
	document.getElementById("quote").textContent = quotes[randomIndex];
	document.getElementById("author").textContent = authors[randomIndex];
});
