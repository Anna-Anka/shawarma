export const handleMarquee = () => {
    if (document.querySelector('.marquee')) {
        const marquee = document.querySelectorAll('.marquee');
        let speed = 2;
        marquee.forEach(function (el) {
            const container = el.querySelector('.marquee__wrapper');
            const content = el.querySelector('.marquee__wrapper > *');
            const elWidth = content.offsetWidth;
            let clone = content.cloneNode(true);
            container.appendChild(clone);
            let progress = 8;
            function loop() {
                progress = progress - speed;
                if (progress <= elWidth * -1) {
                    progress = 0;
                }
                container.style.transform = 'translateX(' + progress + 'px)';
                container.style.transform += 'skewX(' + speed * 0 + 'deg)';
                window.requestAnimationFrame(loop);
            }
            loop();
        });
    }
};