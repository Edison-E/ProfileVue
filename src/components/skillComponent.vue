<script>
export default {
    name: "skillComponent",
    data() {
        return {
            isVisible: {
                FrontEnd: false,
                BackEnd: false,
                DataBase: false,
                Tecnologia: false,
                Framework: false,
                ControlVersion: false
            },
            skill: {
                "FrontEnd": {
                    'Javascript': 100,
                    'Html': 100,
                    'Css': 100
                },
                "BackEnd": {
                    'C#': 100,
                    'Visual Basic': 100,
                    'Java': 100,
                    'PHP': 100
                },
                "DataBase": {
                    'Sql': 100,
                    'Pl/Sql': 100
                }
            },
            FrameworkTechnologies: {
                "Framework": ['Vue', 'JQUERY', 'Bootstrap'],
                "Technologies": ['XML', 'XSD', 'DTD', 'XSLT', 'XPATH']
            },
            ControlVersion: ["GitHub", "BitBucket"]
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
            <li v-for="(skills, category) in skill" :key="category" class="list-group-item bg-dark text-white">
                <span @click="visibleLenguaje(category)">{{ category }}</span>
                <ul v-show="isVisible[category]" class="list-group list-group-flush">
                    <li v-for="(percentage, lenguaje) in skills" :key="lenguaje"
                        class="list-group-item bg-dark text-white">
                        {{ lenguaje }} <span class="badge text-bg-primary rounded-pill"> {{ percentage }}</span>
                    </li>
                </ul>
            </li>
        </ul>

        <!-- Frameworks and Technologies -->
        <ul class="list-group list-group-horizontal">
            <li v-for="(values, category) in FrameworkTechnologies" :key="category"
                class="list-group-item bg-dark text-white">
                <span @click="visibleLenguaje(category)">{{ category }}</span>
                <ul v-show="isVisible[category]" class="list-group list-group-flush">
                    <li v-for="(value, index) in values" :key="index" class="list-group-item bg-dark text-white">
                        {{ value }}
                    </li>
                </ul>
            </li>
        </ul>

        <!-- Control Version -->
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span @click="visibleVersionControl('ControlVersion')">Control Version</span>
                <ul v-for="(cv) in ControlVersion" :key="cv" v-show="isVisible['ControlVersion']" class="list-group list-group-flush">
                    <li class="list-group-item bg-dark text-white">{{ cv }}</li>
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