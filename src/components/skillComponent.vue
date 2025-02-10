<script>
export default {
    name: "skillComponent",
    data() {
        return {
            isVisible: {
                Front: false,
                Back: false,
                Bd: false,
                Tecnologia: false,
                Framework: false,
                ControlVersion: false
            }
        }
    },
    methods: {
        visibleLenguaje(typeLenguaje){
            this.isVisible[typeLenguaje] = !this.isVisible[typeLenguaje]
        },
        visibleFrameworkTechnologies(category){
            this.isVisible[category] = !this.isVisible[category]
        },
        visibleVersionControl(typeVersion){
            this.isVisible[typeVersion] = !this.isVisible[typeVersion]
        }
    }
}
</script>
<template>
    <div class="container-sm skillContent">
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleLenguaje('Front')">FrontEnd</span>
                <ul v-show="isVisible['Front']">
                    <li>JavaScript</li>
                    <li>Html</li>
                    <li>Css</li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleLenguaje('Back')">BackEnd</span>
                <ul v-show="isVisible['Back']">
                    <li>C#</li>
                    <li>Visual basic</li>
                    <li>Java</li>
                    <li>PHP</li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleLenguaje('Bd')">DataBase</span>
                <ul v-show="isVisible['Bd']">
                    <li>Sql</li>
                    <li>Pl/Sql</li>
                </ul>
            </li>
        </ul>

        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleFrameworkTechnologies('Tecnologia')">Technologies</span>
                <ul v-show="isVisible['Tecnologia']">
                    <li>XML</li>
                    <li>XSD</li>
                    <li>DTD</li>
                    <li>XSLT</li>
                    <li>XPATH</li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleFrameworkTechnologies('Framework')">Frameworks</span>
                <ul v-show="isVisible['Framework']">
                    <li>Vue</li>
                    <li>JQUERY</li>
                    <li>Bootstrap</li>
                </ul>
            </li>
        </ul>

        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleVersionControl('ControlVersion')">Control Version</span>
                <ul v-show="isVisible['ControlVersion']">
                    <li>GitHub</li>
                    <li>BitBucket</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.skillContent ul {
    padding-bottom: 20px;
}
</style>