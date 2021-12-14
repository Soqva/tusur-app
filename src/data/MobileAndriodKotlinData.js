export default [
    {
        listElement: 'List и MutableList',
        subListElement: 'В чем разница между List и MutableList?',
        answer: 'List (список) - это неизменяемая коллекция элементов, и в списке элементы можно только прочитать. MutableList - изменяемая коллекция, и его элементы можно изменять, удалять и добавлять.',
    },
    {
        listElement: 'Особенности Kotlin',
        subListElement: 'Какие особенности есть у Kotlin по сравнению с Java?',
        answer: 'У Kotlin более лаконичный код - в среднем, он требует на 40% меньше строк кода.\n' +
            'В Kotlin нельзя получить исключение NullPointerException неявно, так как компилятор по умолчанию не позволяет никаким типам иметь значение null во время компиляции. Java, в свою очередь, не предоставляет никаких способов защиты от NullPointerException, и разработчику приходится справляться с этим самостоятельно.\n' +
            'В Kotlin есть возможность использовать функции расширения, которые позволяют расширять класс путём добавления нового функционала без необходимости наследования от такого класса и использования паттернов, таких как Decorator.\n' +
            'Вдобавок, Kotlin позволяет использовать некоторые преимущества функционального программирования.\n'
    },
    {
        listElement: 'Модификатор open',
        subListElement: 'Что означает модификатор open?',
        answer: 'В Kotlin по умолчанию класс всегда наследуется от Any (аналог Object в Java) и является final, то есть от него нельзя наследоваться. Модификатор open позволяет другим классам наследоваться от класса с этим модификатором.'
    },
    {
        listElement: 'Sealed class',
        subListElement: 'Что такое sealed class?',
        answer: 'Простыми словами, это абстрактный класс, который содержит в себе другие классы. По концепции очень похоже на enum, но с некоторыми отличиями: в изолированном классе можно создать столько подклассов, сколько необходимо для покрытия каждой ситуации, и помимо этого, каждый подкласс может иметь несколько экземпляров, каждый из которых будет нести в себе свое собственное состояние.'
    },
    {
        listElement: 'Data class',
        subListElement: 'Что такое Data class и в чем его преимущество?',
        answer: 'Классы данных - классы, единственным назначением которых является хранение данных. Плюс заключается в том, что необходимые для такого класса методы (toString(), equals(), hashCode(), copy()) генерируются автоматически.'
    },
]
