<template>
    <div>
        <h1>Météo par Ville</h1>
        <form @submit="submit" name="city_search" action="#" method="POST">
            <input type="text" 
                   name="city" 
                   id="city_name"                 
                   v-model="city">
            <input type="submit" value="Météo pour cette ville">

        </form>
    </div>
</template>

<script>

export default {
    data(){
        return {
            city:""
        }
    },
    methods: {
        submit(e){
            e.preventDefault();
            this.$router.push({
                path: "/meteo/" + this.city,
            });
        },
        
    },      // FIN METHODS

}

// console.log(this.city)

</script>



<style scoped>
h1 {
    color: rgb(128, 10, 10);
}

</style>