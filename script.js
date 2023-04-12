const {createApp} = Vue 

createApp({
    data(){
        return {
            message: 'Hello World',
            image : `<img src="iguana.jpg">`
        }
    }
}).mount("#app")