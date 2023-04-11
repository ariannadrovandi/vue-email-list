const {createApp} = Vue;

createApp({
    data() {
        return{
            title: 'API',
            randomEmail: '',
            basePath:'https://flynn.boolean.careers/exercises/api/'
        }
    },
    methods: {
        getData(){
            for(let i = 0; i < 10; i++){
                axios.get(this.basePath + 'random/mail').then((res)=> {
                    console.log(res.data.response);
                    this.randomEmail += res.data.response;
                });
            }
        }
    },
    mounted(){
        this.getData();
    }
}).mount('#app');

// https://flynn.boolean.careers/exercises/api/random/mail