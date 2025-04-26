document.addEventListener('DOMContentLoaded', function() {
    const storyText = "Demo something";
    const storyElement = document.getElementById('story');
    let idx = 0;

    function typeStory() {
        if (idx < storyText.length) {
            storyElement.innerHTML += storyText.charAt(idx);
            idx++;
            setTimeout(typeStory, 50);
        }
    }
    typeStory();

    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');

    acceptBtn.addEventListener('click', function() {
        window.location.href = "promise.html";
    });

    declineBtn.addEventListener('mouseover', function() {
        declineBtn.style.position = "absolute";
        declineBtn.style.top = Math.random() * 80 + "%";
        declineBtn.style.left = Math.random() * 80 + "%";
    });

    const music = document.getElementById('bgMusic');
    setTimeout(() => {
        music.play().catch(() => {});
    }, 1000);
});
