const pages = [
    {
        image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHBuYmdtOXZ6d3pyazQyZ2g5dWVoYjEwZWo3NmJhcDJyamNlcndtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif",
        text: "Rickroll away!"
    },
    {
        image: "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Even this fish is less fishy that that website."
    },
    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2021%2F03%2F12%2F17%2F54%2Fcoca-cola-6090176_1280.jpg&f=1&nofb=1&ipt=2b0a2e2078fa9226327eff2904fe8912883a2ddcfa755dc0e9c7b4d354403bd1",
        text: "Coca-Cola is better for health than that website."
    },
    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.radio-canada.ca%2Fv1%2Fici-premiere%2F16x9%2Fbaguette-patrimoine-immateriel-unesco.jpg&f=1&nofb=1&ipt=78d0cfd87ced1779e673ce7710cf69cccdbdeb3f7a6d8f262027e272becc73ac",
        text: "Eat baguette, not hacks."
    },
    {
        image: "https://images.unsplash.com/photo-1461567797193-e5b489ac026a?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "You better swim away!"
    },
    {
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnI1ejVtaDgyZDR5NndzbXdtd3BiZTJuOGRnc3hyNm9mbHQ3ZG04YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9WC8WTZsFxkRi/giphy.gif",
        text: "sudo go off now"
    }
];

// Pick a random page
const randomIndex = Math.floor(Math.random() * pages.length);
const randomPage = pages[randomIndex];

// Update DOM
document.getElementById('random-image').src = randomPage.image;
document.getElementById('random-text').textContent = randomPage.text;

// Make the text clickable to open text-only page
document.getElementById('random-text').style.cursor = "pointer";
document.getElementById('random-text').addEventListener('click', function() {
    // Pass the text as a query parameter (URL encoded)
    window.location.href = "text.html?text=" + encodeURIComponent(randomPage.text);
});