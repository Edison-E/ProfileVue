<script>
export default {
    name: "profileComponent"
}
</script>
<template>
    <div class="container-sm profileContainer">
        <div class="aboutContent">
            <div class="aboutText">
                <div>
                    Soy un desarrollador full-stack con una gran pasión por la programación y todo lo relacionado con el
                    mundo
                    del desarrollo de software desde el primer momento en que lo descubrí.
                </div>
                <div>
                    Me considero una persona curiosa y proactiva, siempre en busca de nuevos conocimientos y
                    oportunidades para
                    mejorar mis habilidades técnicas.
                </div>
                <div>
                    Me gusta contribuir a los proyectos con buenas prácticas de desarrollo y un enfoque en la calidad
                    del
                    código.
                </div>
                <br>
                <a href="#" class="cv">Curriculum</a>
            </div>
            <img src="../assets/image/me.png" class="me">

        </div>
    </div>
</template>
<style scoped>
.profileContainer {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    padding-bottom: 10px;
}

.aboutContent {
    display: flex;
    align-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;
    width: 70%;
}

.aboutText {
    flex: 1;
    text-align: justify;
    padding: 1%;
    margin-top: 2%;
}

.cv {
    border-radius: 4px;
    padding: 1%;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    text-decoration: none;
}

.cv:hover {
    transform: scale(1.05);
    background-color: #ffa500;
    color: rgb(0, 0, 0);
}

.me {
    filter: drop-shadow(0 0 10px #ffffff);
    transition: filter 0.3s ease;
    width: 40%;
    height: 40%;
}

.me:hover {
    filter: drop-shadow(0 0 20px #ffffff);
}
</style>