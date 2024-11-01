const balloons = document.querySelectorAll('#balloon');

balloons.forEach(balloon => {
    const randomLeft = Math.floor(Math.random() * 700) + 500; // Adjust to stay within bounds
    balloon.style.left = `${randomLeft}px`;

    const randomDuration = 2 + Math.random() * 4; // Between 2s and 6s
    balloon.style.animationDuration = `${randomDuration}s`;

    setInterval(() => {
        const randomOffset = Math.random() * 10 - 5; // Random offset between -5px and 5px
        balloon.style.transform = `translateY(${randomOffset}px)`;
    }, 100); // Change position every 100ms
});
