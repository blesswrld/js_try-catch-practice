'use strict';

// Исходные данные, содержащие массив объектов
const data = [
    {
        id: 'box',   // объект с id и tag
        tag: 'div'   // тип элемента, который будет создан
    },
    {
        id: 'fff',   // объект с id и tag
        tag: 'nav'   // тип элемента, который будет создан
    },
    {
        id: 'circle', // объект с id, но без корректного значения tag
        tag: ''       // некорректный tag, может привести к ошибке
    }
];

// Используем блок try...catch для обработки ошибок при создании элементов
try {
    // Перебираем массив data с помощью forEach
    data.forEach((blockObj, i) => {
        // Создаём HTML-элемент на основе свойства tag
        const block = document.createElement(blockObj.tag); // может выбросить ошибку, если tag пустой или некорректный

        // Проверяем наличие id в объекте
        if (!blockObj.id) {
            // Если id отсутствует, выбрасываем SyntaxError с сообщением, указывающим номер объекта
            throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
        }

        // Добавляем id элементу, используя setAttribute
        block.setAttribute('id', blockObj.id);

        // Добавляем созданный элемент в тело документа (document.body)
        document.body.append(block);
    });
} catch (e) {
    // Обрабатываем ошибки
    if (e.name === 'SyntaxError') {
        // Если ошибка типа SyntaxError, выводим её сообщение в консоль
        console.log(e.message);
    } else {
        // Если это не SyntaxError, повторно выбрасываем ошибку для дальнейшей обработки
        throw e;
    }
}

// Демонстрация создания объекта ошибки вручную
// const err = new SyntaxError('example message'); // Создаём объект SyntaxError с сообщением 'example message'
// console.log(err.name, err.message, err.stack); 
// err.name — тип ошибки (SyntaxError)
// err.message — текст сообщения об ошибке
// err.stack — стек вызовов, показывающий, где произошла ошибка
