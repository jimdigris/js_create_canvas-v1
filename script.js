'use strict';

// через объект
(function () {
    let canvas = {                                                                      // характеристики холста
        parent: '#wrap',                                                                // родительский элемент
        element: null,                                                                  // холст
        context: null,                                                                  // контекст
        id: 'canvas',                                                                   // идентификатор
        width: 400,                                                                     // ширина
        height: 400,                                                                    // высота

        createCanvas() {                                                                // создать холст
            let parent = document.querySelector(`${this.parent}`);                      // получить родительский элемент
            let element = document.createElement('canvas');                             // создать элемент холста
            element.setAttribute('id', this.id);                                        // присвоить id      
            element.setAttribute('width', this.width);                                  // задать ширину     
            element.setAttribute('height', this.height);                                // задать высоту     
            parent.prepend(element);                                                    // добавить в родителя
        },
        receiveCanvas() { this.element = document.querySelector(`#${this.id}`); },      // получить холст
        defineCanvas() { this.context = this.element.getContext("2d"); }                // определить контекст
    };

    // ! -----------------------------------------------------------

    document.addEventListener("DOMContentLoaded", () => {                               // загрузка страницы
        canvas.createCanvas();                                                          // создать холст
        canvas.receiveCanvas();                                                         // получить холст
        canvas.defineCanvas()                                                           // определить контекст
    });

    // ! -----------------------------------------------------------
})();

// через класс
(function () {
    class Canvas {                                                                      // класс для Холстов
        #element = null;                                                                // холст
        #context = null;                                                                // контекст

        constructor(parent, id, width, height) {
            this.parent = parent;                                                       // родительский элемент
            this.id = id;                                                               // идентификатор
            this.width = width;                                                         // ширина
            this.height = height;                                                       // высота
        }

        #createCanvas() {                                                               // создать холст
            let parent = document.querySelector(`${this.parent}`);                      // получить родительский элемент
            let element = document.createElement('canvas');                             // создать элемент холста
            element.setAttribute('id', this.id);                                        // присвоить id      
            element.setAttribute('width', this.width);                                  // задать ширину     
            element.setAttribute('height', this.height);                                // задать высоту     
            parent.prepend(element);                                                    // добавить в родителя
        }
        #receiveCanvas() { this.#element = document.querySelector(`${this.id}`); }      // получить холст
        #defineCanvas() { this.#context = this.#element.getContext("2d"); }             // определить контекст    

        draw() {                                                                        // отрисовать холст
            this.#createCanvas();                                                       // создать холст
            this.#receiveCanvas();                                                      // получить холст
            this.#defineCanvas();                                                       // определить контекст
            return this.#context;
        }
    }

    // ! -----------------------------------------------------------

    document.addEventListener("DOMContentLoaded", () => {                               // загрузка страницы
        let canva = new Canvas('#wrap', 'canvas', 600, 200);                            // создать экземпляр
        let ctx = canva.draw();                                                         // отрисовать холст
    });

    // ! -----------------------------------------------------------    

})();
