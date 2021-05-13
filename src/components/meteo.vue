<template>
    <div>
        <h1>{{ city }}</h1>
        <br>        
        <h2>Température {{ temp }}</h2> 
        <h2>Ressenti {{ ressenti }}</h2> 
        <h2>{{ descr }}</h2>
        <img :src="icon_url" alt="">
        <h2>Force du vent  {{ vent_vit }}</h2> 
        <h2>Direction du vent  {{ vent_dir }}</h2> 
        <h2>Fuseau horraire   {{ time_zone }} (base: heure de Montreal)</h2> 
        <h2>Pluie:   {{ pluie }} </h2> 
        <h2>Neige:   {{ neige }} </h2> 
        <h2>Soleil hre de coucher:   {{ coucher }} </h2> 
        <h2>Soleil hre de lever:   {{ lever }} </h2>  

        <br>
        <br>
        <br>
        <button @submit="submit" type="submit" value="">Retour</button>
        
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
            retour: "",
            city:"",
            ville_meteo: "", // pour l'URL
            temp: "",
            ressenti: "",
            descr: "",
            icon_url: "",
            vent_vit: "",  
            vent_dir: "",   // to do...
            time_zone: "", 
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
                this.icon_url = " http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png"
                this.vent_vit = ((json.wind.speed * 3600) / 1000) + " km/h"
                this.vent_dir = json.wind.deg + " <--- to do..."
                this.time_zone = ((json.timezone / 3600) + 4)
                this.pluie = json.rain  //Je ne trouves pas rain.1h dans l'objet comme ds la doc
                this.neige = json.snow  //Je ne trouves pas snow.1h dans l'objet comme ds la doc
                this.coucher = new Date(json.sys.sunset * 1000) // Me reste à élaborer pour
                this.lever = new Date(json.sys.sunrise * 1000)  // plus de lisibilité mais...
                                                                // ...manque de TEMPS lol            
            })
        },

        submit(e){
            e.preventDefault();
            this.$router.push({
                path: "/",
            });
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
button {
    height: 50px;
    width: 180px;
    font-size: 30px;
}
</style>