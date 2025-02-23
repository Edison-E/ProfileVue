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
    <div class="container-sm border-bottom proyectContainer">
        <h1>Proyects</h1>

        <div v-for="(value, proyect) in proyect" :key="proyect" class="card border-light">
            <div class="card-header border-light">{{ proyect }}</div>
            <div class="card-body">
                <p class="card-text">{{ value[0] }}</p>
                <a :href="value[2]" class="btn btn-primary">Go repository</a>
            </div>
            <div class="card-footer border-light"> {{ value[1] }}</div>
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

.card {
    margin-top: 3%;
    width: 50%;
    background: linear-gradient(to bottom, rgb(45, 50, 62), rgb(18, 20, 28));
    color: white;
}

.card-footer {
    color: white;
}
</style>