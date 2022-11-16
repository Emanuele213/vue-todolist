new Vue({
    el:'#app',
    data:{
        arrTodos:[
            {
                text:'Fai i compiti',
                done: false,
            },
            {
                text:'Fai un pisolino',
                done: true,
            },
            {
                text:'Guada un film',
                done: true,
            }
        ],
        newWord: '',
    },
    methods:{
        addWord() {
            if(this.newWord.trim()) {
                this.arrTodos.push({
                    text: this.newWord,
                    done: this.newWord, 
                })
            }
            this.newWord = '';
        },
        deleteWord(index) {
            this.arrTodos.splice(index, 1);
        },
        isTrue(prova) {
            if(prova.done) {
                prova.done = false;
            }else {
                prova.done = true;
            }
        }
    }
}); 