export default [
    {
        listElement: 'Атрибуты владения',
        subListElement: ['В чем разница strong, weak, read only и copy?'],
        answer: 'Strong означает, что в сгенерированном сеттере счетчик ссылок на присваиваемый объект будет увеличен и ссылка на него будет поддерживаться в течение жизни объекта.\n' +
            '\n' +
            'Weak означает, что мы указываем на объект, но не увеличиваем счетчик ссылок. Он часто используется при создании родительских-дочерних отношений. Родитель имеет сильную ссылку на ребенка, но ребенок имеет только слабую ссылку на родителя.\n' +
            '\n' +
            'Read only —  мы можем установить свойство изначально, но затем его нельзя будет изменить.\n' +
            '\n' +
            'Copy означает, что мы копируем значение объекта при его создании. Также предотвращает изменение его значения.\n'
    },
    {
        listElement: 'Методы доступа',
        subListElement: ['Что такое @dynamic в Objective-C?'],
        answer: '@dynamic сообщает компилятору, что требуемые сеттеры и геттеры для данных свойств будут реализованы вручную или динамически во время выполнения. При доступе к таким свойствам, компилятор не будет выдавать предупреждений, даже если требуемые сеттеры и геттеры не реализованы. Вы можете использовать такие свойства, когда хотите, чтобы сеттеры и геттеры выполняли какой-то специфичный для вас код.'
    },{
        listElement: 'Доступ к свойству объекта',
        subListElement: ['Что такое KVC? Когда его нужно использовать?'],
        answer: 'KVC (Key-Value Coding) представляет собой механизм для доступа к свойству объекта косвенно, с помощью строк для идентификации свойств, а не через вызов аксессора или доступ к ним непосредственно через переменных экземпляра. Часто используется для фильтрации в массивах (NSPredicate).'
    },{
        listElement: 'Быстрое перечисление',
        subListElement: ['Что такое быстрое перечисление (fast enumeration)?'],
        answer: 'Это итерация по объектам любого класса, который реализует протокол NSFastEnumeration, в том числе NSArray, NSSet и NSDictionary.'
    },
    {
        listElement: 'dispatch_async и dispatch_sync',
        subListElement: ['В чем разница между dispatch_async и dispatch_sync?'],
        answer: 'dispatch_async ставит копию блока на выполнение в очередь и немедленно возвращает управление, dispatch_sync ставит ссылку блока на выполнение в очередь и ожидает завершения операции.'
    },


]
