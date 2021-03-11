const main = document.querySelector("main");

const jokeOne = "Why do bees have sticky hair? Because they use honeycombs!";
const  jokeTwo = "Why did the nurse need a red pen at work? In case she needed to draw blood.";
const jokeThree = "Why did the gym close down? It just didn't work out.";


const template = `
    <h1>My Jokes</h1>
    <ul>
    <li>${jokeOne}</li>
    <li>${jokeTwo}</li>
    <li>${jokeThree}</li>
    </ul>
`
main.innerHTML = template;

const p = document.createElement('p');
main.appendChild(p);
p.textContent = "That's all folks!";