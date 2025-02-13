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
                ControlVersion: false,
                Tool: false
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
            ControlVersion: ["GitHub", "BitBucket"],
            Tools: ["Oracle", "Visual Studio", "Visual Studio Code", "Neatbeans" ,"Apache"]
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
        },
        visibleTools(typeTool) {
            this.isVisible[typeTool] = !this.isVisible[typeTool]
        }
    }
}
</script>
<template>
    <div class="container text-center">
        <!--Lenguaje-->
        <div class="row container-lenguaje">
            <div v-for="(skills, category) in skill" :key="category" class="col-md-4">
                <div class="skill-card" @click="visibleLenguaje(category)">
                    {{ category }}
                </div>
                <div v-show="isVisible[category]" class="details">
                    <div v-for="(percentage, language) in skills" :key="language">
                        {{ language }} <span class="badge text-bg-primary">{{ percentage }}%</span>
                    </div>
                </div>
            </div>
        </div>

        <!--Framework Technologies and Tools-->
        <div class="row mt-3 container-FrameworkTechnologies">
            <!--Framework Technologies-->
            <div v-for="(values, category) in FrameworkTechnologies" :key="category" class="col-md-6">
                <div class="skill-card" @click="visibleFrameworkTechnologies(category)">
                    {{ category }}
                </div>
                <div v-show="isVisible[category]" class="details">
                    <div v-for="(value, index) in values" :key="index">
                        {{ value }}
                    </div>
                </div>
            </div>

            <!--Tools-->
            <div class="col-md-4">
                <div class="skill-card" @click="visibleTools('Tool')">
                    Tools
                </div>
                <div v-show="isVisible['Tool']" class="details">
                    <div v-for="(tool, index) in Tools" :key="index">
                        {{ tool }}
                    </div>
                </div>
            </div>
        </div>

        <!--Control Version-->
        <div class="row mt-3 container-ControlVersion">
            <div class="col-md-12">
                <div class="skill-card" @click="visibleVersionControl('ControlVersion')">
                    Control Version
                </div>
                <div v-show="isVisible['ControlVersion']" class="details">
                    <div v-for="(cv, index) in ControlVersion" :key="index">
                        {{ cv }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    margin-top: 3%;
    margin-left: 4%;
}

.skill-card {
    background: linear-gradient(to bottom, rgb(45, 50, 62), rgb(18, 20, 28));
    margin-bottom: 10px;
}

.skill-card:hover {
    background: linear-gradient(to bottom, rgb(61, 67, 82), rgb(31, 34, 46));
}

.col-md-4,
.col-md-6,
.col-md-12 {
    width: 400px;
    font-size: 20px;
}
</style>