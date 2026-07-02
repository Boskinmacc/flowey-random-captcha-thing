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
        "oink.",
        "oink oink.",
        "oink oink oink.",
        "oink oink oink oink.",
        "oink oink oink oink oink.",
        "oink oink oink oink oink oink.",
        "oink oink oink oink oink oink oinkaroonue.",
        "OINK",
        "oink oink oink oink oink oink oink oink.",
        "OINKNKKNKNKNKNKNOIONKOKNIONKOINKNOIKNONIKNKOIK",
        "OINK OINK OINK OINK OINK OINK OINK OINK OINK OINK",
        "oink oink oink oink oink oink oink oink oink oink oink.",
        "oink?"
    ];


//THE SPECIAL RESPONSES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (input.value.trim() === 'steve') {
        textBox.textContent = 'I... AM STEVE (dramatic noise)';
        image.src = 'jack bleck.PNG';
        return;
    }



    //THIS IS SO IF IT DETECTS A WORD OR SMTH
    if (input.value.toLowerCase().includes('minecraft movie')) {
        textBox.textContent = "THE STORY OF THE MINECRAFT STORY IS BETTER MODE THNG";
        image.src = 'pig9.png';
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

