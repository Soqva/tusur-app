export default [
    {
        listElement: 'Базовые компоненты приложения',
        subListElement: 'Из каких базовых компонентов состоит приложение?',
        answer: 'Базовые компоненты андроид приложения: Activity, Service, BroadcastReceiver, ContentProvider. Каждый из базовых компонент объявляется в андроид манифесте и может являться точкой входа в приложение.\n' +
            '\n' +
            'Activity представляет UI и функциональность, видимые пользователю.\n' +
            '\n' +
            'Service используется для исполнения долгих операций, которые не требуют взаимодействия с пользователем.\n' +
            '\n' +
            'BroadcastReceiver принимает и обрабатывает броадкаст ивенты, отправленные внутри приложения или из других приложений.\n' +
            '\n' +
            'ContentProvider используется для обмена данными с другими приложениями.\n'
    },
    {
        listElement: 'Doze Mode и App Standby',
        subListElement: 'В чем разница между Doze Mode и App Standby?',
        answer: 'Основная разница в том, что Doze Mode – это режим операционной системы, который применяется на все установленные приложения, а App Standby – это состояние конкретного приложения.\n' +
            '\n' +
            'Система входит в Doze Mode, когда девайс не используется и не стоит на зарядке. Система периодически выходит из Doze для выполнения отложенных фоновых задач.\n' +
            '\n' +
            'Приложение, которое находится в фоне определенный период времени, входит в режим App Standby.\n'
    },
    {
        listElement: 'ContentProvider',
        subListElement: 'Что такое и для чего используется ContentProvider?',
        answer: 'ContentProvider – один из четырех компонентов андроид приложения. ContentProvider используется для предоставления доступа к хранилищу данных приложения другим приложениям. ContentProvider прописывается в андроид манифесте, как элемент' + 'provider' +
            '\n' +
            'Для доступа к данным контент провайдера используется класс ContentResolver.\n' +
            'ContentResolver предоставляет CRUD API для доступа к хранилищу данных. ContentResolver определяет к какому провайдеру направить запрос. Выбранный ContentProvider обрабатывает запрос и возвращает данные обратно резолверу. ContentResolver передает результат пользователю, вызвавшему метод.\n'
    },
    {
        listElement: 'Dialog и DialogFragment',
        subListElement: 'В чем разница между Dialog и DialogFragment?',
        answer: 'Класс Dialog используется для отображения диалогового окна. Использование класса Dialog напрямую не рекомендуется, потому что управление состоянием диалога при configuration changes сложно и неочевидно.\n' +
            '\n' +
            'DialogFragment – фрагмент, который содержит внутри себя объект Dialog и выступает как интерфейс для взаимодействия с диалогом. У DialogFragment жизненный цикл фрагмента. Система сама заботится о пересоздании DialogFragment при configuration changes. Использование DialogFragment является более предпочтительным.\n'
    },
    {
        listElement: 'Activity Context и application Context',
        subListElement: 'Чем отличается activity Context от application Context?',
        answer: 'Activity Context создается при создании активити и уничтожается вместе с активити. Контекст – тяжелый объект. Когда говорят об утечке памяти в андроиде, имеют в виду утечку контекста, т.е. ситуацию, когда контекст активити хранится после вызова Activity.onDestroy().\n' +
            '\n' +
            'Application Context – синглтон. Application Context создается при создании объекта Application и живет, пока жив процесс приложения. По этой причине Application Context можно безопасно инжектить в другие синглтоны в приложении. Не рекомендуется использовать Application Context для старта активити, потому что необходимо создание новой задачи, и для layout inflation, потому что используется дефолтная тема.\n'
    },
]
