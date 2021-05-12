<template>
    <div>
        <h1>{{ city }}</h1>
        <br>        
        <h2>Température {{ temp }}</h2> 
        <h2>Ressenti {{ ressenti }}</h2> 
        <h2>{{ descr }}</h2>
        <img :src="icon_url" alt="">
        
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
            ville_meteo: "", // pour l'URL
            temp: "",
            ressenti: "", // to do...
            descr: "",
            icon_url: "",
            vent_vit: "",   // to do...
            vent_dir: "",   // to do...
            time_zone: "", // ex: -5  to do...
            pluie: "",  // to do...
            neige: "",  // to do...
            coucher: "",    // to do...
            lever: "",  // to do...
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
                //this.meteo_info = json;
                console.log(json)
                this.temp = Math.round(json.main.temp) + "°C"
                this.ressenti = Math.round(json.main.feels_like) + "°C"
                this.descr = json.weather[0].description
                //this.meteo_info = JSON.stringify(json, null, ' ');
                // document.body.innerHTML += `<pre>${meteo_info}</pre>`;
                this.icon_url = " http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png"
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