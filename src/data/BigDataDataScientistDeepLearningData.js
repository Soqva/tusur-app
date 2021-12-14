export default [
    {
        listElement: 'Градиентный спуск',
        subListElement: 'Что такое градиентный спуск?',
        answer: 'Градиентный спуск - это алгоритм оптимизации, который используется для минимизации функции комиссионных от выбранного параметра путем регулярного перемещения по пути наискорейшего спуска, определяемого отрицательным значением градиента.   '
    },
    {
        listElement: 'Функция затрат',
        subListElement: 'Что такое функция затрат?',
        answer: 'Функция стоимости (также известная как «потеря») - это мера точности нейронной сети по отношению к конкретной обучающей выборке и ожидаемому результату. Он определяет, насколько хорошо нейронная сеть работает в целом. В случае нейронных сетей цель всегда остается неизменной - уменьшить функцию стоимости или ошибки. '
    },
    {
        listElement: 'Нормализация данных',
        subListElement: 'Что такое нормализация данных? Зачем это нужно?',
        answer: 'Нормализация данных - это этап предварительной обработки на протяжении всего обратного распространения. Его цель - избавиться от избыточности данных или минимизировать ее. Нормализация данных помогает изменить масштаб значений, чтобы они соответствовали определенному диапазону, чтобы получить лучшую сходимость для обратного распространения - значение каждой точки данных вычитается и делится на ее стандартное отклонение.'
    },
    {
        listElement: 'Слои CNN',
        subListElement: 'Что такое CNN? Какие у него разные слои?',
        answer: 'CNN или сверточная нейронная сеть - это своего рода глубокие нейронные сети, в основном используемые для анализа видимых представлений. Эти сети используют набор многослойных персептронов, требующих минимальной предварительной обработки. В то время как нейронные сети используют вектор в качестве входных данных, в CNN входом являются многоканальные фотографии. \n' +
            'Сверточный слой - выполняет сверточную операцию для создания множества меньших окон изображений для анализа данных.\n' +
            'Слой ReLU - привносит в сеть нелинейность. Он обнуляет все отрицательные пиксели.\n' +
            'Уровень объединения - выполняет операцию понижающей дискретизации, чтобы уменьшить размерность каждой карты объектов.\n' +
            'Полностью связанный слой - распознает и классифицирует все объекты, присутствующие в образце изображения.'
    },
]
