export default [
    {
        listElement: 'Bounds и Frame',
        subListElement: 'В чем заключается разница между Bounds и Frame?',
        answer: 'Frame – это прямоугольник описываемый положением location (x, y) и размерами size (width, height) view относительно её superview в которой она содержится.\n' +
            'Bounds – это прямоугольник описываемый положением location(x, y) и размерами size (width, height) view относительно ее собственной системы координат (0, 0).\n'
    },
    {
        listElement: 'Цикл жизни приложения',
        subListElement: ['Каков цикл жизни приложения?'],
        answer: 'Не запущено: приложение не запускалось или было завершено системой.\n' +
            '\n' +
            'Не активно: приложение запущено, но в данный момент не реагирует на события (Но может выполнять код). Обычно это состояние длится не долго и является промежуточным.\n' +
            '\n' +
            'Активно: приложение запущено и реагирует на события.\n' +
            '\n' +
            'В фоне: приложение выполняется в фоне. Большинство приложений оказываются в этом состоянии не на долго, перед тем как быть приостановленными. Однако, приложение запросившее дополнительное время в фоне, может находиться в этом состоянии некоторое время. Некоторые приложения могут работать в фоне большую часть времени.\n' +
            '\n' +
            'Приостановлено: приложение в фоне и не выполняет код. Система переводит приложения в это состояние автоматически, без предварительного уведомления. В этом состоянии приложение всё ещё находится в памяти, но не может выполнять код. При возникновении недостатка памяти система может очистить приостановленные приложения без предварительного уведомления, чтобы освободить больше места для активных предложений.\n'
    },
    {
        listElement: 'UIStackView',
        subListElement: ['Что такое UIStackView?'],
        answer: 'UIStackView – контейнер для UIView. В него мы помещаем выстраивающиеся в виде стека горизонтально или вертикально UIView. Выкладываться они будут автоматически в соответствии с доступным пространством, которое определяется через настройки: alignment, distribution, spacing.'
    },
    {
        listElement: 'ViewController',
        subListElement: ['Каков жизненный цикл ViewController?'],
        answer: 'loadView: используется когда контроллер создаётся в коде. loadView вызывается контроллером, когда его текущий view равен nil.\n' +
            '\n' +
            'viewDidLoad: вызывается один раз за жизнь контроллера. Метод отрабатывает когда все view загружены.\n' +
            '\n' +
            'viewDidLayoutSubviews: вызывается когда любой view изменяется.\n' +
            '\n' +
            'viewDidAppear: вызывается когда view появляется на экране.\n' +
            '\n' +
            'viewDidDisappear: вызывается когда view контроллера удален.\n'
    },
    {
        listElement: 'Point и Pixel',
        subListElement: ['В чем заключается разница между Point (pt) и Pixel (px)?'],
        answer: 'Pixels (px) — точки на экране, points (pt) — плотность точек на экране.'
    },
]
