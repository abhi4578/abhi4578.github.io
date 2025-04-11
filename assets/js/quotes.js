// Fetch and display a random quote from the given URL
async function fetchAndDisplayQuote() {
    const url = 'https://abhi4578.github.io/quotes/quotes';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const quotes = text.split('%').map(quote => quote.trim()).filter(quote => quote);
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const wrappedQuote = randomQuote.length > 36 
        ? randomQuote.split(' ').reduce((acc, word) => {
            if (acc.length === 0 || acc[acc.length - 1].length + word.length + 1 > 36) {
                acc.push(word);
            } else {
                acc[acc.length - 1] += ' ' + word;
            }
            return acc;
        }, []).join('<br>') 
        : randomQuote;

    const [quoteText, author] = wrappedQuote.includes('-') 
        ? wrappedQuote.split('-').map(part => part.trim()) 
        : [wrappedQuote, 'Unknown'];

    const formattedQuote = `${quoteText}<br>- ${author}`;
    document.getElementsByClassName("social-icons")[0].innerHTML += `<li>${formattedQuote}</li>`;
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', fetchAndDisplayQuote);