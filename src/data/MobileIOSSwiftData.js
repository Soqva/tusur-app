export default [
    {
        listElement: 'nil и .none',
        subListElement: 'В чём разница между nil и .none?',
        answer: 'Нет никакой разницы, Optional.none (кратко .none) и nil эквивалентны.\n' +
            'Фактически, следующий оператор вернёт true:\n' +
            'nil == .none\n' +
            'Использование nil более общепринято и рекомендовано.\n'
    },
    {
        listElement: 'Протоколы',
        subListElement: ['Что такое протокол в Swift?'],
        answer: 'Протокол — это тип, который определяет набросок методов, свойств и т.д. Класс, структура или перечисление могут принимать протокол, чтобы реализовать все это. Протокол сам по себе не реализует функционал, но определяет его.'
    },
    {
        listElement: 'NSArray и NSSet',
        subListElement: ['Что работает быстрее — поиск по NSArray или NSSet?'],
        answer: 'Поиск по NSSet будет быстрее, потому что множества, как и словари, используют хэши.'
    },
    {
        listElement: 'Optional',
        subListElement: ['Какими способами можно развернуть optional? Оцените их в смысле безопасности.'],
        answer: 'var x : String?= "Test"\n' +
            '\n' +
            'Принудительное развёртывание (forced unwrapping) — небезопасно.\n' +
            'let a: String= x!\n' +
            'Неявное развертывание при объявлении переменной — небезопасно.\n' +
            'var a = x!\n' +
            'Optional binding — безопасно.\n' +
            'if let a = x { print("x was successfully unwrapped and is = \\(a)") }\n' +
            'Optional chaining — безопасно.\n' +
            'let a = x?.count\n' +
            'Nil coalescing operator — безопасно.\n' +
            'let a = x ?? ""\n' +
            'Оператор Guard — безопасно.\n' +
            'guard let a = x else{ return}\n' +
            'Optional pattern — безопасно.\n' +
            'if case let a? = x { print(a) }\n'
    },
    {
        listElement: 'Stored property',
        subListElement: ['Можно ли добавить stored property к типу, используя extension? Каким образом или почему нет?'],
        answer: 'Нет, это невозможно. Мы можем использовать extension, чтобы добавить новое поведение существующему типу, но не можем изменить сам тип или его интерфейс. Для хранения нового stored property нам потребуется дополнительная память, а extension не может это сделать.'
    },
]
