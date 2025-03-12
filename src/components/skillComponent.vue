<script>
import xmlTechImg from '@/assets/image/xmlTech.png';

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
                    'img': require('@/assets/image/front.png'),
                    'Javascript': 100,
                    'Html': 100,
                    'Css': 100,
                    'Vue.js': 100,
                    'JQuery': 100,
                    'Bootstrap':70
                },
                "BackEnd": {
                    'img': require('@/assets/image/back.png'),
                    'C#': 100,
                    'Visual Basic': 100,
                    'Java': 100,
                    'PHP': 70,
                    'Sql': 100,
                    'Pl/Sql': 100,
                    '.NET Framework':100,
                    'Laravel' : 70
                }
            },
            Technologies: {
                "XMLTech": {
                    'img': xmlTechImg,
                    'items':  ['XML', 'XSD', 'DTD', 'XSLT', 'XPATH']
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
                   <img  id="img-card" :src="skills.img" alt="Camino"  @click="visibleLenguaje(category)">
                   <span id="title-card"> {{ category }}</span>
                </div>
                <div v-show="isVisible[category]" class="details">
                    <div v-for="(percentage, language) in skills" :key="language" class="skill-item">
                        <span class="language" v-if="language !== 'img'">{{ language }}</span>
                        <div class="progress-container"  v-if="language !== 'img'">
                            <div class="progress" role="progressbar" :aria-valuenow="percentage" aria-valuemin="0"
                                aria-valuemax="100">
                                <div class="progress-bar" :class="percentage === 100 ? 'bg-success' : 'bg-warning'"
                                    :style="{ width: percentage + '%' }">
                                </div>
                            </div>
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
                    <img :src="values.img" alt="icono" id="img-card"  @click="visibleTechnologies(category)">
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
                <div class="skill-card" >
                     <img src="../assets/image/tool.png" alt="icono" id="img-card" @click="visibleTools('Tool')">
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

#title-card {
    margin-left: 5%;
}

#img-card{
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

.language {
    flex: 1;
    text-align: left;
    font-size: 16px;
}

.progress-container {
    flex: 2;
    max-width: 60%;
}

.progress {
    height: 10px;
}

.col-md-4,
.col-md-6,
.col-md-12 {
    margin-bottom: 3%;
    width: 400px;
    font-size: 20px;
}
</style>