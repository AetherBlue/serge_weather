// code a copier coller pour envoyer et recuperrer les donnees de villes

methods: {
    submit(e){
        e.preventDefault();
        this.$router.push({
            path: "/meteo/" + this.city,
        });
    },
},      // FIN METHODS

// recuperation de la ville dans l'url
const city = this.$route.params.city;