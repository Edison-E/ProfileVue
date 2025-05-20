<script>
import xmlTechImg from '@/assets/image/skill/xmlTech.png';

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
                    'img': require('@/assets/image/skill/front.png'),
                    'Javascript': 'Advanced',
                    'Html': 'Advanced',
                    'Css': 'Advanced',
                    'Vue.js': 'Advanced',
                    'JQuery': 'Advanced',
                    'Bootstrap': 'Intermediate'
                },
                "BackEnd": {
                    'img': require('@/assets/image/skill/back.png'),
                    'C#': 'Advanced',
                    'Visual Basic': 'Advanced',
                    'Java': 'Advanced',
                    'PHP': 'Advanced',
                    'Sql': 'Advanced',
                    'Pl/Sql': 'Advanced',
                    '.NET Framework': 'Advanced',
                    'Laravel': 'Advanced'
                }
            },
            Technologies: {
                "XMLTech": {
                    'img': xmlTechImg,
                    'items': ['XML', 'XSD', 'DTD', 'XSLT', 'XPATH']
                }
            },
            Tools: ["Oracle", "Visual Studio", "Visual Studio Code", "Neatbeans", "Apache", "GitHub", "BitBucket"],
        }
    },
    methods: {
        visibleLenguaje(typeLenguaje) {
            this.isVisible[typeLenguaje] = !this.isVisible[typeLenguaje]
        },
        visibleTechnologies(category) {
            this.isVisible[category] = !this.isVisible[category]
        },
        visibleTools(typeTool) {
            this.isVisible[typeTool] = !this.isVisible[typeTool]
        }
    }
}
</script>
<template>
    <div class="container border-bottom text-center">
        <!--Lenguaje-->
        <div class="row container-lenguaje">
            <div v-for="(skills, category) in skill" :key="category" class="col-md-4">
                <div class="skill-card">
                    <img id="img-card" :src="skills.img" alt="Camino" @click="visibleLenguaje(category)">
                    <span id="title-card"> {{ category }}</span>
                </div>
                <div v-show="isVisible[category]" class="details">
                    <div v-for="(status, language) in skills" :key="language" class="skill-item">
                        <div class="status-details" v-if="language !== 'img'">
                            <span class="language">{{ language }}</span><br>
                            <span class="status">{{ status }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Framework Technologies and Tools-->
        <div class="row mt-3 container-Technologies">
            <!--Framework Technologies-->
            <div v-for="(values, category) in Technologies" :key="category" class="col-md-6">
                <div class="skill-card">
                    <img :src="values.img" alt="icono" id="img-card" @click="visibleTechnologies(category)">
                    <span id="title-card">{{ category }}</span>
                </div>
                <div v-show="isVisible[category]" class="details-other">
                    <div v-for="(value, index) in values.items" :key="index">
                        {{ value }}
                    </div>
                </div>
            </div>

            <!--Tools-->
            <div class="col-md-4">
                <div class="skill-card">
                    <img src="../assets/image/skill/tool.png" alt="icono" id="img-card" @click="visibleTools('Tool')">
                    <span id="title-card">Tools</span>

                </div>
                <div v-show="isVisible['Tool']" class="details-other">
                    <div v-for="(tool, index) in Tools" :key="index">
                        {{ tool }}
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
    margin-bottom: 2%;
}

.skill-card {
    width: 100%;
    color: #ffa500;
    margin-bottom: 10px;
}

.status-details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
}

.language {
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
}

.status {
    font-size: 14px;
    color: #b0aeae;
}

.container-lenguaje,
.container-Technologies {
    margin-left: 20%;
}

#title-card {
    margin-left: 5%;
}

#img-card {
    width: 40px;
    height: 40px;
}

#img-card:hover {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 10px rgba(255, 165, 0, 0.8));
}

.details-other {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.details {
    margin-left: 35%;
}

.skill-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
}

.col-md-4,
.col-md-6,
.col-md-12 {
    margin-bottom: 3%;
    width: 400px;
    font-size: 20px;
}
</style>