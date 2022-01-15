const app = Vue.createApp({
    data(){
        return{
            Name: "Ioann",
            Age: 25,
            Link: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1635851515000/photosp/508ce6f0-2eee-45b0-aa55-edced988fe76/stock-photo-adventure-travel-destinations-hiking-glaciers-iceland-glittering-natural-patterns-travel-and-tourism-natural-backgrounds-508ce6f0-2eee-45b0-aa55-edced988fe76.jpg",
        }
    },
    methods: {
        outputData(value){
            const randomNumber = Math.random();
            switch(value){
                case "name" : return this.Name;
                case "age" : return this.Age;
                case "rand" : return randomNumber;              
            }
        }
    }
}).mount('#assignment');