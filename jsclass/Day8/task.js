/** @format */

const btn = document.getElementById('change');
const authorEl = document.getElementById('author');
const quoteEl = document.getElementById('quote');

btn.addEventListener('click', () => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	authorEl.textContent = quotes[randomIndex].author;
	quoteEl.textContent = quotes[randomIndex].quote;
});

const quotes = [
	{
		author: 'Albert Einstein',
		quote:
			'Life is like riding a bicycle. To keep your balance, you must keep moving.',
	},
	{
		author: 'Steve Jobs',
		quote: 'Stay hungry, stay foolish.',
	},
	{
		author: 'Maya Angelou',
		quote:
			'You will face many defeats in life, but never let yourself be defeated.',
	},
	{
		author: 'Confucius',
		quote: 'It does not matter how slowly you go as long as you do not stop.',
	},
	{
		author: 'Nelson Mandela',
		quote: 'It always seems impossible until it’s done.',
	},
	{
		author: 'Mark Twain',
		quote: 'The secret of getting ahead is getting started.',
	},
	{
		author: 'Oscar Wilde',
		quote: 'Be yourself; everyone else is already taken.',
	},
];
