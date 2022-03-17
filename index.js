"use strict"

/*Реализация слайдера в хедере*/
;(function () {
    $('.single-item').slick({
        autoplay: true,
    });
}());

/*Слайдер для start-page*/

;(function () {
    $('.start-page__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        prevArrow: '<button type = "button" class = "slick-prev1"> Предыдущая </ button>',
        nextArrow: '<button type = "button" class = "slick-next1"> Next </ button>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    speed: 500,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false,
                    autoplay: true,
                }
            },

        ]
    });
})();


/*Реализация кнопки "Показать ещё"*/
;(function () {
    let tagBlock = document.querySelector('.information__tag-block');
    if (tagBlock != null) {
        let showAllButton = document.querySelector('.show-more');
        console.log(tagBlock.clientHeight)
        const heightBlock = 325;
        showAllButton.addEventListener('click', function showFullHeight() {
            tagBlock.style.height = tagBlock.scrollHeight + 'px'
            this.textContent = 'Скрыть'
            this.removeEventListener('click', showFullHeight);
            this.addEventListener('click', function () {
                tagBlock.style.height = heightBlock + 'px';
                this.textContent = 'Показать ещё'
                showAllButton.addEventListener('click', showFullHeight);
            })
        })
    }
}());

/*Реализация переключения "Касс и офисов продаж"*/
;(function () {
    let buttonsLocation = document.querySelectorAll('.select-location input');
    let buttonsType = document.querySelectorAll('.select-type input');
    let NameTable = document.querySelectorAll('.table-result');
    let trRow = document.querySelectorAll('.selected-city')
    let inputsLocation = document.querySelectorAll('.select-location input');
    let inputsType = document.querySelectorAll('.select-type input');
    for (let button of buttonsLocation) {
        button.addEventListener('click', function () {
            for (let button of buttonsLocation) {
                button.dataset.active = 'false'
            }
            if (this.id === 'allCity') {
                for (let idTable of NameTable) {
                    idTable.style.display = 'block';
                }
            } else {
                for (let idTable of NameTable) {
                    if (idTable.dataset.chosed === this.id) {
                        idTable.style.display = 'block';

                    } else {
                        idTable.style.display = 'none';
                    }
                }
            }
        })
    }
    for (let button of buttonsType) {
        button.addEventListener('click', function () {
            if (this.id === 'allType') {
                for (let tr of trRow) {
                    tr.style.display = 'table-row'
                }
            }
            if (this.id === 'AviaType') {
                for (let tr of trRow) {
                    if (tr.dataset.typeAvia === 'true') {
                        tr.style.display = 'table-row';
                    } else {
                        tr.style.display = 'none';
                    }
                }
            }
            if (this.id === 'TrainType') {
                for (let tr of trRow) {
                    if (tr.dataset.typeTrain === 'true') {
                        tr.style.display = 'table-row';
                    } else {
                        tr.style.display = 'none';
                    }
                }
            }
        })
    }

    /*Переключение класса active*/
    for (let elem of inputsLocation) {
        elem.addEventListener('click', function () {
            for (let elem of inputsLocation) {
                elem.parentElement.classList.remove('active')
            }
            elem.parentElement.classList.add('active')
        })
    }
    for (let elem of inputsType) {
        elem.addEventListener('click', function () {
            for (let elem of inputsType) {
                elem.parentElement.classList.remove('active')
            }
            elem.parentElement.classList.add('active')
        })
    }

})();

/*Реализация бургер меню*/
;(function () {
    let openButton = document.querySelector('#menu_checkbox');
    let closeButton = document.querySelector('.button__close')
    let navMenu = document.querySelector('.navigation__nav-menu');
    openButton.addEventListener('click', function () {
        if (this.checked) {
            navMenu.style.transform = 'translateX(0px)'
        }
    })
    closeButton.addEventListener('click', function () {
        navMenu.style.transform = 'translateX(-1200px)'
    })
})();

/*Реализация ревёрса*/
;(function () {
    let buttonReverse = document.querySelector('.reverse');
    let inputDeparture = document.querySelector('#departure');
    let inputDestination = document.querySelector('#destination');
    buttonReverse.addEventListener('click', function () {
        let first = inputDeparture.value;
        let second = inputDestination.value;
        inputDeparture.value = second;
        inputDestination.value = first;
    })
})();