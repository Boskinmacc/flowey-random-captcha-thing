//images YOU CAN ADD MORE BTW IF U WAN TOOOOO :3
const images = [
    'flowey (1).png',
    'flowey (2).png',
    'flowey (3).png',
    'flowey (4).png',
    'flowey (5).png',
    'flowey (6).png',
    'flowey (8).png',
    'flowey (9).png',
    'flowey (10).png',
    'flowey (11).png',
    'flowey (12).png',
    'flowey (13).png',
    'flowey (14).png',
    'flowey (17).png',
    'flowey (18).png',
    'flowey (19).png',
    'flowey (20).png',
    'flowey (21).png',
];


//this is the container stuff with everything in it
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.height = '100vh';
container.style.textAlign = 'center';
container.style.backgroundColor = 'black';
document.body.style.margin = '0';
document.body.appendChild(container);
//div the container btw





//the image size 
const image = document.createElement('img');
image.src = images[5];    // When I see ur faceeee faceeee, theres not a thing that I would change because ur a sigmaaaaa, just the way you areeeee areee aree, AND WHEN I SEE YOU SMILEEEE-
image.style.width = '140px';
image.style.height = '150px';
image.style.marginBottom = '20px';
container.appendChild(image);
//img is the... image ofc :3






// the box for typeing
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'speak please...';
input.style.padding = '10px';
input.style.fontSize = '16px';
input.style.textAlign = 'center';
input.style.width = '350px';
input.style.marginBottom = '20px';


//colors and stuff for the box for typing
input.style.fontFamily = 'cursive';
input.style.backgroundColor = 'black';
input.style.color = 'white';
input.style.border = '2px solid white';
container.appendChild(input);

//button stuff
const button = document.createElement('button');
button.style.fontFamily = 'cursive';
button.style.backgroundColor = 'black';
button.style.color = 'white';
button.style.border = '2px solid white';
//colors and stuff for the button stuff


//the other button stuff 
button.textContent = 'Converse or say nothing';
button.style.padding = '10px 20px';
button.style.fontSize = '13px';
button.style.cursor = 'pointer';
container.appendChild(button);





// JUST IN CASE IM JUST MAKING IT COMMENTED SO ITS STILL HERE BTW
// button.addEventListener('click', () => {
//    alert(`You typed: ${input.value}`);
//    input.value = ''; // Clear the input box after submission
//   const randomIndex = Math.floor(Math.random() * images.length);
//    image.src = images[randomIndex];
//});
//THE button.addEventListener('click', () => { alert(`You typed: ${input.value}`);
//PART is like a thin when you type something on the box and click the button it will alert you what you typed and it will do the thing that is cool.

//SAME WITH THIS ONE 

//button.addEventListener('click', () => {
//    if (input.value.trim() === '') {
//       alert('what? you typed nothing...');
//        return;
//    }
//    alert(`You typed: ${input.value}`);
//    input.value = ''; // Clear the input box after submission
//   const randomIndex = Math.floor(Math.random() * images.length);
//    image.src = images[randomIndex];
//});







// TALKING THING
const textBox = document.createElement('div');
textBox.style.fontFamily = 'cursive';
textBox.style.color = 'white';
textBox.style.marginBottom = '10px';
textBox.style.fontSize = '18px';
textBox.textContent = 'Hello, I am Flowey!'; 
container.insertBefore(textBox, image);


//the response part 
button.addEventListener('click', () => {
    const responses = [
        "what.",
        "I... Am... not listening!",
        "ok.",
        "right...",
        "clever... very clever....",
        "Bro kid, can you not?",
        "ohk...",
        "uh...",
        "mhm..",
        "yea uh...",
        "no... just no...like golly gosh",
        "uh, can you maybe shut it?",
        "womp womp",
        "Your're new to the underground, aren't you?",
        "bro please, shut ur trap, like golly",
        "Bro kid, can you sush?",
    ];


//THE SPECIAL RESPONSES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    if (input.value.trim() === '') {
        textBox.textContent = 'what? you typed nothing...';
        image.src = 'flowey (3).png';
        return;
    }

    if (input.value.trim() === 'assignment') {
        textBox.textContent = 'you know the subject selections? I kinda wanted Art, music 1, drama and stuff but I no no, because no space in my form thing... SO POO POO MUNDLES I DONT LIKE THAT';
        image.src = 'flowey (13).png';
        return;

    }

    if (input.value.trim() === 'steve') {
        textBox.textContent = 'I... AM STEVE (dramatic noise)';
        image.src = 'jack bleck.PNG';
        return;
    }






    //THIS IS SO IF IT DETECTS A WORD OR SMTH
    if (input.value.toLowerCase().includes('aroonie')) {
        textBox.textContent = 'how do you diggeridoo? monkeyaroonie idk I just added this if u type "aroonie" somewhere';
        image.src = 'flowey (12).png';
        return;
    }

    if (input.value.toLowerCase().includes('why not')) {
        textBox.textContent = 'why not? chicken butt';
        image.src = 'flowey (12).png';
        return;
    }

     if (input.value.toLowerCase().includes('sigma')) {
        textBox.textContent = "don't say sigma";
        image.src = 'flowey (7).png';
        return;
    }

    if (input.value.toLowerCase().includes('undertale')) {
        textBox.textContent = '(Bad Romance plays)Whoa-oh-oh-oh-oh-oh-oh-oh-oh-oh Story of UNDERTALEEEEEE.... I fell from the light.... Talk? Or should I fight????? Monster genocide... This my UNDERTALE... I fell through a cave on Mt. Eb-';
        image.src = 'UNDER.png';
        return;
    }

    if (input.value.toLowerCase().includes('funny')) {
        textBox.textContent = "'funny', wanna see funny? uh too bad I guess idk anymore bruh'";
        image.src = 'flowey (5).png';
        return;
    }

    if (input.value.toLowerCase().includes('chicken')) {
        textBox.textContent = "YOU SAID CHICKEN";
        image.src = 'flowey (4).png';
        return;
    }

    if (input.value.toLowerCase().includes('shape of love')) {
        textBox.textContent = "TADA, TADA, TADA, KONNA MAINICHI GA TSUZUKU TO OMOTTEITA TSUZUKU TO OMOTTEITA YO TADA, TADA, TADA, KONNA MAINICHI GA TSUZUKU TO OMOTTEITA TSUZUKU TO OMOTTEITA YO HONTOU DA YO";
        image.src = 'youknowhowlongibeenwaitenfordiswhooimaboutamakeanameformahselfhere.png';
        return;
    }

    if (input.value.toLowerCase().includes('goodbye')) {
        textBox.textContent = "ur leaving????";
        image.src = 'flowey (15).png';
        return;
    }

    if (input.value.toLowerCase().includes('leaving')) {
        textBox.textContent = "LEAVING?";
        image.src = 'flowey (16).png';
        return;
    }

    if (input.value.toLowerCase().includes('minecraft movie')) {
        textBox.textContent = "first we mine... then we craft... LETS MINECRAFT!!!(you typed minecraft movie";
        image.src = 'jack bleck.PNG';
        return;
    }

    if (input.value.toLowerCase().includes('nigger')) {
        textBox.textContent = "NO... NEVEVR AGAIN";
        image.src = 'flowey (7).png';
        return;
    }

    if (input.value.toLowerCase().includes('kill myself')) {
        textBox.textContent = "No... Don't do that please";
        image.src = 'flowey (17).png';
        return;
    }


    
    
    //Noah
    if (input.value.trim() === 'noah') {
        textBox.textContent = 'recognize me??? if you dont like this just do it with caps...';
        image.src = 'Noah flowey.png';
        return;
    }

    if (input.value.trim() === 'Noah') {
        textBox.textContent = 'hello how the flip do I supposed to know what to say for Noah...';
        image.src = 'Noah.png';
        return;
    }


    //Sir
    if (input.value.trim() === 'phil cassel') {
        textBox.textContent = "Don't forget your capital letters...";
        image.src = 'Sir flowey.png';
        return;
    }

    if (input.value.trim() === 'Phil Cassel') {
        textBox.textContent = '(hello idk what to put here for Sir... uh good ending?????)';
        image.src = 'Sir.png';
        return;
    }

    
    //ME I MADE THISSSSS
    if (input.value.trim() === 'ME') {
        textBox.textContent = 'I MADE THIS!!!!!!!!!!';
        image.src = 'ME.png';
        return;
    }





    
//hello
   //THE RESPONCE THINGY
    const randomResponseIndex = Math.floor(Math.random() * responses.length);
    textBox.textContent = responses[randomResponseIndex];

    // IMAGE THING
    const randomImageIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomImageIndex];

    input.value = ''; //this uh clears the text you typed btw just for the screenshot.
});

