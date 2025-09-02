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
                    'Bootstrap': 'Intermediate',
                    'Javascript': 'Advanced',
                    'JQuery': 'Advanced',
                    'Vue.js': 'Advanced',
                    'Html': 'Advanced',
                    'Css': 'Advanced'
                },
                "BackEnd": {
                    'img': require('@/assets/image/skill/back.png'),
                    '.NET Framework': 'Advanced',
                    'Visual Basic': 'Advanced',
                    'Laravel': 'Advanced',
                    'Pl/Sql': 'Advanced',
                    'Java': 'Advanced',
                    'PHP': 'Advanced',
                    'Sql': 'Advanced',
                    'C#': 'Advanced'
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
    <div class="container">
        <!--Lenguaje-->
        <div class="row container-lenguaje">
            <div v-for="(skills, category) in skill" :key="category" class="col-md-4">
                <div class="skill-card">
                    <img id="img-card" :src="skills.img" alt="Camino" @click="visibleLenguaje(category)">
                    <span id="title-card"> {{ category }}</span>
                </div>
                <div v-show="isVisible[category]" class="details">
                    <div v-for="([language, status], index) in Object.entries(skills).filter(([k]) => k !== 'img')"
                        :key="index" class="skill-item">
                        <div class="status-details" v-if="language !== 'img'">
                            <div class="language-wrapper">
                                <span class="language">{{ language }}</span><br>
                                <span class="status" :class="{ 'hover-visible': true }">{{ status }}</span>
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
    width: 100%;
    max-width: 1200px;
    padding: 10px 20px;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 15%;
}

.container h1{
    margin-left: 3%;
}

.container-lenguaje,
.container-Technologies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
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
}

.status {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff7e6;
    padding: 2px 6px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
    font-size: 12px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.language-wrapper {
    position: relative;
    display: inline-block;
}

.skill-item:hover .status {
    opacity: 1;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.skill-item {
    padding: 10px 20px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    filter: drop-shadow(0px 0px 5px rgba(50, 50, 50, 0.8));
}

.skill-item:hover {
    transform: scale(1.05);
    background-color: #ffa500;
    color: rgb(0, 0, 0);
}

.col-md-4,
.col-md-6,
.col-md-12 {
    margin-bottom: 3%;
    font-size: 20px;
    flex: 1 1 250px;
    max-width: 300px;
}
</style>