export default [
    {
        listElement: 'Список и кортеж',
        subListElement: ['В чем разница между списком и кортежем?'],
        answer: 'Список можно изменить после создания.\n' +
            'Кортеж нельзя изменить после создания.\n' +
            'Список упорядочен. Он представляет собой упорядоченные последовательности объектов, как правило, одного и того же типа. Например, все имена пользователей упорядочены по дате создания: [«Seth», «Ema», «Eli»].\n' +
            'У кортежа есть структура. В каждом индексе могут сосуществовать различные типы данных. Например, такая запись базы данных в памяти: (2, «Ema», «2020–04–16») # id, name, created_at.\n'
    },
    {
        listElement: 'Методы экземпляра и методы класса',
        subListElement: ['В чем разница между методами экземпляра, класса и статическими методами в Python?'],
        answer: 'Методы экземпляра: принимают параметр self и относятся к определенному экземпляру класса.\n' +
            '\n' +
            'Статические методы: используют декоратор @staticmethod, не связаны с конкретным экземпляром и являются автономными (атрибуты класса или экземпляра не изменяются).\n' +
            '\n' +
            'Методы класса: принимают параметр cls, можно изменить сам класс.\n'
    },
    {
        listElement: 'Функции',
        subListElement: ['В чем разница между func и func()?\n'],
        answer: 'Вопрос должен проверить ваше понимание, что все функции в Python также являются объектами.\n' +
            'func — это представляющий функцию объект, который можно назначить переменной или передать другой функции. Функция func() с круглыми скобками вызывает функцию и возвращает результат.\n'
    },
    {
        listElement: 'Функция reduce',
        subListElement: [
            'Объясните, как работает функция reduce',
        ],
        answer: 'Это может быть сложновато сразу понять, пока вы не используете ее несколько раз.\n' +
            'reduce принимает функцию и последовательность — и проходит по этой последовательности. На каждой итерации в функцию передаются как текущий элемент, так и выходные данные предыдущего элемента. В конце концов, возвращается одно значение.\n'
    },
    {
        listElement: 'Словари и списки',
        subListElement: ['Где быстрее поиск: в словарях или списках?'],
        answer: 'Поиск значения в списке занимает O(n) времени, потому что нужно пройти весь список.\n' +
            'Поиск ключа в словаре занимает O(1) времени, потому что это хэш-таблица.\n' +
            'Разница во времени может быть огромной, если значений много, поэтому для производительности обычно рекомендуют словари. Но у них есть другие ограничения, такие как необходимость уникальных ключей.\n'
    },
]
