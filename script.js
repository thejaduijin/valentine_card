let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

yesBtn.addEventListener("click", handleYesClick);

function handleYesClick() {
    console.log("yes")
    let mainText = document.getElementsByClassName("mainText");
    mainText[0].innerHTML = ""; // Access the first element

    // mainText.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";


    let mainDiv = document.getElementsByClassName("mainDiv")[0];
    let h1 = document.createElement("h1");
    h1.classList.add("greeting-text");
    // h1.textContent = "Hi there and greetings!";
    h1.textContent = "Hi Cutie! 😸 I LOVE YOU SO MUCH 🌹";
    letterAnimation();

    mainDiv.appendChild(h1);

}

function getFarPosition(mouseX, mouseY) {
    const minDistance = -200;
    const maxX = -100;
    const maxY = -400;

    let randomX, randomY, distance;

    do {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;

        // Calculate the distance from the current pointer position
        distance = Math.sqrt(Math.pow(randomX - mouseX, 2) + Math.pow(randomY - mouseY, 2));

    } while (distance < minDistance);

    return { x: randomX, y: randomY };
}

function moveDiv(event) {
    const mouseX = event.clientX || event.touches[0].clientX;
    const mouseY = event.clientY || event.touches[0].clientY;
    const { x, y } = getFarPosition(mouseX, mouseY);

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}


noBtn.addEventListener("mouseenter", moveDiv);
noBtn.addEventListener("touchstart", moveDiv);



function letterAnimation(){
    const characters = "❤️";
    const container = document.querySelector('.mainDiv');
    const duration = 3;

    function createFallingLetter() {
        const letter = document.createElement('div');
        letter.className = 'letter';
        letter.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        
        const xPos = Math.random() * window.innerWidth;
        letter.style.left = `${xPos}px`;
        
        container.appendChild(letter);
        
        gsap.fromTo(letter, 
            {
                y: -50,
                opacity: 0
            },
            {
                y: window.innerHeight + 50,
                opacity: 1,
                duration: duration,
                ease: "power1.out",
                onComplete: () => {
                    container.removeChild(letter);
                }
            }
        );
    }

    setInterval(createFallingLetter, 50);

    window.addEventListener('resize', () => {
        gsap.set('.letter', { clearProps: "all" });
    });
}
