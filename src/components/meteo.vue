<template>
    <div>
        <h1>{{ city }}</h1>
        <br>
        <h2>{{ meteo_info.weather[0].description }}</h2>
        <h2>{{ meteo_info.main.temp}}</h2>
        
        
    </div>
</template>


<script>
// Parametres de la ville
// URL: https://api.openweathermap.org/data/2.5/weather?q={NOM DE LA VILLE}
//      &appid={ecfe380e7ea08e260b131e5b4ea9e24c}&units=metric&lang=fr

// recuperation de la ville dans l'url

// const city = this.$route.params.city;


export default {
    data(){
        return {
            city:"",
            ville_meteo: "",
            meteo_info: "",
        }
    },
    methods: {
        get_ville(){
            this.city = this.$route.params.city;
        },

        get_meteo(){
            this.ville_meteo = "https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=ecfe380e7ea08e260b131e5b4ea9e24c&units=metric&lang=fr";
            const options = {
            method: 'GET',
            mode: 'cors',
            }
            
            fetch(this.ville_meteo, options).then(data => {
                return data.json();
            }).then(json => {
                this.meteo_info = json;
                console.log(json)
                //this.meteo_info = JSON.stringify(json, null, ' ');
                // document.body.innerHTML += `<pre>${meteo_info}</pre>`;
            })
        },

   
    },      // FIN METHODS

    created(){
        this.get_ville()
        this.get_meteo()
        //console.log(this.ville_meteo)
        // console.log(this.city)
    },
}
</script>

<style scoped>

</style>