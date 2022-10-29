//Липкая шапка
export const headerSticky = () => {
    //Сама шапка
    const headerTop = document.querySelector('.header__top')

    //Первый блок
    const headerContent = document.querySelector('.header__content')
    const headerTopHeight = headerTop.offsetHeight
    const headerContentHeight = headerContent.offsetHeight
    let lastScrollTop = 0;
    headerContent.style.paddingTop = `${headerTopHeight}px`

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        // Шапка появляется, когда скролим вниз
        // if (scrollDistance >= headerContentHeight) {
        //     headerTop.classList.add('header__top--fixed')
        //     headerContent.style.marginTop = `${headerTopHeight}px`
        // } else {
        //     headerTop.classList.remove('header__top--fixed')
        //     headerContent.style.marginTop = null
        // }

        // Шапка появляется, когда скролим вверх
        if (scrollDistance > lastScrollTop) {
            headerTop.classList.remove('header__top--fixed')
            //headerContent.style.marginTop = null
        } else {
            headerTop.classList.add('header__top--fixed')
            //headerContent.style.marginTop = `${headerTopHeight}px`
        }

        if (scrollDistance === 0) {
            headerTop.classList.remove('header__top--fixed')
            //headerContent.style.marginTop = null
        }

        lastScrollTop = scrollDistance
    })
}