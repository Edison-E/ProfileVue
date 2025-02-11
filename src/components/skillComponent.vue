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
        visibleLenguaje(typeLenguaje) {
            this.isVisible[typeLenguaje] = !this.isVisible[typeLenguaje]
        },
        visibleFrameworkTechnologies(category) {
            this.isVisible[category] = !this.isVisible[category]
        },
        visibleVersionControl(typeVersion) {
            this.isVisible[typeVersion] = !this.isVisible[typeVersion]
        }
    }
}
</script>
<template>
    <div class="container-sm skillContent">

        <!-- Lenguaje -->
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleLenguaje('Front')">FrontEnd</span>
                <ul v-show="isVisible['Front']" class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white">
                        JavaScript <span class="badge text-bg-primary rounded-pill"> 100%</span></li>
                    <li class="list-group-item bg-dark text-white">
                        Html <span class="badge text-bg-primary rounded-pill"> 100%</span></li>
                    <li class="list-group-item bg-dark text-white">Css
                        <span class="badge text-bg-primary rounded-pill"> 100%</span>
                    </li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleLenguaje('Back')">BackEnd</span>
                <ul v-show="isVisible['Back']" class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white">C#
                        <span class="badge text-bg-primary rounded-pill"> 100%</span>
                    </li>
                    <li class="list-group-item bg-dark text-white">
                        Visual basic <span class="badge text-bg-primary rounded-pill"> 100%</span></li>
                    <li class="list-group-item bg-dark text-white">
                        Java <span class="badge text-bg-primary rounded-pill"> 100%</span></li>
                    <li class="list-group-item bg-dark text-white">PHP
                        <span class="badge text-bg-primary rounded-pill"> 100%</span>
                    </li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleLenguaje('Bd')">DataBase</span>
                <ul v-show="isVisible['Bd']" class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white">Sql
                        <span class="badge text-bg-primary rounded-pill"> 100%</span>
                    </li>
                    <li class="list-group-item bg-dark text-white">
                        Pl/Sql <span class="badge text-bg-primary rounded-pill"> 100%</span></li>
                </ul>
            </li>
        </ul>

        <!-- Frameworks and Technologies -->
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleFrameworkTechnologies('Tecnologia')">Technologies</span>
                <ul v-show="isVisible['Tecnologia']" class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white">XML</li>
                    <li class="list-group-item bg-dark text-white">XSD</li>
                    <li class="list-group-item bg-dark text-white">DTD</li>
                    <li class="list-group-item bg-dark text-white">XSLT</li>
                    <li class="list-group-item bg-dark text-white">XPATH</li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleFrameworkTechnologies('Framework')">Frameworks</span>
                <ul v-show="isVisible['Framework']" class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white">Vue</li>
                    <li class="list-group-item bg-dark text-white">JQUERY</li>
                    <li class="list-group-item bg-dark text-white">Bootstrap</li>
                </ul>
            </li>
        </ul>

        <!-- Control Version -->
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleVersionControl('ControlVersion')">Control Version</span>
                <ul v-show="isVisible['ControlVersion']" class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white">GitHub</li>
                    <li class="list-group-item bg-dark text-white">BitBucket</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.skillContent ul {
    padding-bottom: 20px;
    padding-right: 20px;
}

.skillContent ul li ul {
    margin-top: 10px;
}
</style>