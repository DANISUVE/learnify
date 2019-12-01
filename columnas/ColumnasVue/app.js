Vue.component('column-element', {
    props: ['element'],
    template: `
    <div
        class='column-element'
        v-html='element.content'
        v-bind:id="\`el-\${element.key}\`"
        @click='$emit("clicked", [$event.target,element.key])'
    ></div>` // Ni moverle al v-bidn:id sin entender por que se esta escapando cada parte
})

Vue.component('column', {
    props: ['things'],
    template: `
    <div class='column'>
        <column-element
            v-for='thing in things'
            v-bind:key='thing.key'
            v-bind:element='thing'
            @clicked='$emit("clicked", arguments[0])'
        ></column-element>
    </div>
    `
})

let app = new Vue({
    el: '#container',
    data: {
        //Le asignamos la misma llave a la respuesta correcta
        questions: [{ key: 1, content: 'Can I ___ some water?' }, { key: 5, content: 'Are you _____ ready?' }, { key: 2, content: 'Have you _____ there? ' }, { key: 3, content: 'Can I ___ to the bathroom?' },  { key: 6, content: 'How ___ you doing?' }, { key: 4, content: 'I\'m not ____ yet!' }],
        answers: [{ key: 4, content: 'ready' },{ key: 2, content: 'gotten' }, { key: 3, content: 'go' },  { key: 6, content: 'are' }, { key: 1, content: 'get' }, { key: 5, content: 'getting' }],
        matched: [],
        firstClicked: null,
        secondClicked: null
    },
    methods: {
        clickedEvent: clickedEvent
    }
})

//Aqui guardaremos las celdas escogidas
let guardar = []
let columnsClicked = []
function clickedEvent(e) {
    columnsClicked.push({ elem: e[0], id: e[1] })
    elem1 = columnsClicked[0]
    elem2 = columnsClicked[1]
    //Solo nos interesa colorear celdas cuando se escogieron una o dos
    if (columnsClicked.length < 3) {
        elem1.elem.style.backgroundColor = "forestgreen"
        if(columnsClicked.length === 2){
            //Si es la respuesta correcta coloreamos de verde, sino de rojo
            if(elem1.id === elem2.id){
                elem2.elem.style.backgroundColor = "forestgreen"
                guardar.push(elem1,elem2)
                window.alert('Excellent! \nThat is the correct answer!');
            }
            else{
              elem1.elem.style.backgroundColor = "red"
              elem2.elem.style.backgroundColor = "red"
              window.alert('Oops! \nThat is the wrong answer!');
            }
        }
    }
    //Mantenemos en blanco todas las demas
    else {
        columnsClicked.map(column => {
            if(guardar.includes(column)){
                return column.elem.style.backgroundColor = "forestgreen"
            }
            else{
                return column.elem.style.backgroundColor = "white"
            }})
        columnsClicked = []
    }

}
