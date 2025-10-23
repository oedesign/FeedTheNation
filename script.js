
(function(){
    const msgs = [
        "Every Man That Has A Brain Has A Purpose",
        "God loves you",
        "Stay kind",
        "You matter",
        "Choose hope"
    ];
    const el = document.getElementById('message');
    let i = 0;
    const interval = 3000;
    const fadeDuration = 600; // match CSS transition
    setInterval(() => {
        el.classList.add('fade-out');
        setTimeout(() => {
            i = (i + 1) % msgs.length;
            el.textContent = msgs[i];
            el.classList.remove('fade-out');
        }, fadeDuration);
    }, interval);
})();
