export default [
    {
        listElement: 'Распределенный кэш в MapReduce Framework',
        subListElement: ['Что такое распределенный кэш в MapReduce Framework?'],
        answer: 'Распределенный кэш — это важная функция, предоставляемая платформой MapReduce. Если вы хотите поделиться некоторыми файлами между всеми узлами в Hadoop Cluster, используется распределенный кэш. Эти файлы могут быть исполняемыми файлами jar или файлом простых свойств.'
    },
    {
        listElement: 'Сбой узла данных',
        subListElement: ['Что происходит при сбое узла данных?'],
        answer: 'Когда происходит сбой узла данных,\n' +
            '\n' +
            'Jobtracker и namenode обнаруживают сбой;\n' +
            'На отказавшем узле все задачи перепланированы;\n' +
            'Namenode реплицирует данные пользователя на другой узел.\n'
    },
    {
        listElement: 'Спекулятивное исполнение',
        subListElement: ['Что такое спекулятивное исполнение?'],
        answer: 'В Hadoop во время спекулятивного выполнения запускается определенное количество повторяющихся задач. На другом подчиненном узле можно выполнить несколько копий одной и той же карты или задачи сокращения с помощью спекулятивного выполнения. Проще говоря, если конкретному диску требуется много времени для выполнения задачи, Hadoop создаст дублирующую задачу на другом диске. Диск, который первым завершает задачу, сохраняется, а диски, которые не заканчивают сначала, уничтожаются'
    },
    {
        listElement: 'HDFS и NAS',
        subListElement: ['В чем разница между HDFS и NAS?'],
        answer: 'Блоки данных HDFS распределяются по локальным дискам всех машин в кластере, а данные NAS хранятся на выделенном оборудовании.'
    },
    {
        listElement: 'Карта и редуктор в Hadoop',
        subListElement: ['Что такое «карта» и что такое «редуктор» в Hadoop?'],
        answer: 'Карта является этапом решения запросов HDFS. Карта считывает данные из местоположения ввода и выводит пару ключ-значение в соответствии с типом ввода.\n' +
            'Редуктор собирает выходные данные, сгенерированные преобразователем, обрабатывает их и создает собственный конечный результат.\n'
    },
    {
        listElement: 'Последовательности Hadoop',
        subListElement: ['Что такое файл последовательности в Hadoop?'],
        answer: 'Для хранения двоичных пар ключ / значение используется файл последовательности. В отличие от обычного сжатого файла, файл последовательности поддерживает разбиение, даже если данные внутри файла сжаты.'
    },
]