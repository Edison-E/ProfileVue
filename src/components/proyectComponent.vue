<script>
export default {
    name: "proyectComponent",
    data() {
        return {
            proyect: {
                "Authentication C#": ["This project consists of simple authentication with JWT", "2 months ago", "https://github.com/Edison-E/AuthenticationBack"],
                "ProfileVUe": ["This project consists of my portfolio made with vue and bootstrap", "Now", "https://github.com/Edison-E/ProfileVue"],
            }
        }
    }
}
</script>
<template>
    <div class="container-sm proyectContainer">
        <h1>Proyects</h1>

        <div v-for="(value, proyect) in proyect" :key="proyect" class="card-proyect">
            <div class="card-title">{{ proyect }}</div>
            <div class="card-details">
                <p class="card-text">{{ value[0] }}</p>
                <a :href="value[2]" class="">Go repository</a>
                <p class="card-update"> {{ value[1] }}</p>
            </div>
            <br>
        </div>

    </div>

</template>
<style scoped>
.proyectContainer {
    width: 50%;
    margin-left: 5%;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.card-proyect{
    margin-top: 5%;
    padding: 2%;
    width: 40%;
    height: 10%;
    background-color: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease-in-out;
}

.card-title {
    font-weight: bold;
}

.card-proyect:hover {
    background: linear-gradient(135deg, rgba(92, 91, 91, 0.8), rgba(80, 80, 80, 0.5));
    box-shadow: 0 5px 5px rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
    color: #fff;
}


</style>