export default [
    {
        listElement: 'deltaTime и fixedDeltaTime',
        subListElement: ['Что такое deltaTime и fixedDeltaTime? Отличия между ними.'],
        answer: 'deltaTime или Time.deltaTime - это время, прошедшее с момента последнего кадра, в то время как fixedDeltaTime или Time.fixedDeltaTime - это количество времени, прошедшее с момента последнего вызова FixedUpdate. Значение deltaTime варьируется между кадрами, в то время как fixedDeltaTime всегда одно и то же.'
    },
    {
        listElement: 'Рейкаст',
        subListElement: ['Что такое рейкаст?'],
        answer: 'Рейкаст отправляет воображаемый “лазерный луч” вдоль программного луча из точки испускания до тех пор, пока он не встретит на пути коллайдер в сцене. В результате столкновения с коллайдером, возвращается RaycastHit с координатами и объектом столкновения.'
    },
    {
        listElement: 'Rigid body',
        subListElement: ['Что такое rigid body? '],
        answer: 'Rigidbody - это основной компонент, подключающий физическое поведение для объекта. С прикреплённым Rigidbody, объект немедленно начнёт реагировать на гравитацию. Если добавлен один или несколько компонентов Collider, то при коллизиях (столкновениях) объект будет передвигаться.\n'
    },
    {
        listElement: 'Object и сцена',
        subListElement: ['Что такое Game Object? Что такое сцена? '],
        answer: 'Game Object - это базовые объекты Unity, которые представляют персонажей, реквизит и декорации. Сами по себе они ничего не делают, но действуют как контейнеры для компонентов, которые уже реализуют функционал. Сцены содержат среду и меню игры.'
    },
    {
        listElement: 'Порядок вызова событий MonoBehaviour',
        subListElement: ['В каком порядке вызываются события MonoBehaviour в процессе рендеринга кадра? Зачем нужны отдельные Update и FixedUpdate?'],
        answer: 'OnPreCull, OnBecameVisible/OnBecameInvisible, OnWillRenderObject, OnPreRender, OnRenderObject, OnPostRender, OnRenderImage, OnGUI, OnDrawGizmos.\n' +
            'FixedUpdate используется для того, чтобы быть в ногу с физическим движком, поэтому все, что нужно применить к rigid body, должно произойти в FixedUpdate. Update, с другой стороны, работает независимо от физического движка. \n'
    },
]
