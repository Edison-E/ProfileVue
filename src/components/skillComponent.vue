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
                    'Css': 'Advanced',
                    'React': "Basic"
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
    <div class="skills-container">
        <!-- Lenguajes -->
        <div class="skills-grid">
            <div v-for="(skills, category) in skill" :key="category" class="skill-card">
                <div class="skill-header" @click="visibleLenguaje(category)">
                    <img class="skill-icon" :src="skills.img" alt="icono" />
                    <span class="skill-title">{{ category }}</span>
                </div>

                <div v-show="isVisible[category]" class="details">
                    <div v-for="([language, status], index) in Object.entries(skills).filter(([k]) => k !== 'img')"
                        :key="index" class="skill-item">
                        <span class="language" :data-status="status">{{ language }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tecnologías y Tools -->
        <div class="skills-grid">
            <div v-for="(values, category) in Technologies" :key="category" class="skill-card">
                <div class="skill-header" @click="visibleTechnologies(category)">
                    <img class="skill-icon" :src="values.img" alt="icono" />
                    <span class="skill-title">{{ category }}</span>
                </div>
                <div v-show="isVisible[category]" class="details">
                    <span v-for="(value, index) in values.items" :key="index" class="skill-item">
                        {{ value }}
                    </span>
                </div>
            </div>

            <!-- Tools -->
            <div class="skill-card">
                <div class="skill-header" @click="visibleTools('Tool')">
                    <img class="skill-icon" src="../assets/image/skill/tool.png" alt="icono" />
                    <span class="skill-title">Tools</span>
                </div>
                <div v-show="isVisible['Tool']" class="details">
                    <span v-for="(tool, index) in Tools" :key="index" class="skill-item">
                        {{ tool }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-container {
    width: 100%;
    max-width: 1300px;
    margin: 3% auto 10%;
    padding: 0 20px;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
    margin-bottom: 40px;
}

.skill-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 20px;
    color: #ffa500;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.skill-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
}

.skill-header {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    margin-bottom: 12px;
}

.skill-title {
    font-size: 1.1rem;
    font-weight: bold;
}

.skill-icon {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease, filter 0.3s ease;
}

.skill-header:hover .skill-icon {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 8px rgba(255, 165, 0, 0.9));
}

.details {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 12px;
}

.skill-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    padding: 8px 14px;
    border-radius: 14px;
    font-size: 0.9rem;
    gap: 10px;
    transition: all 0.3s ease;
    min-width: 120px;
}

.skill-item:hover {
    background: rgba(255, 165, 0, 0.8);
    color: #000;
    transform: translateY(-3px);
}

.language {
    position: relative;
    font-weight: bold;
    cursor: pointer;
}

.language::after {
  content: attr(data-status);
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: #ffa500;
  color: #000;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.language::before {
  content: "";
  position: absolute;
  bottom: 115%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px;
  border-style: solid;
  border-color: #ffa500 transparent transparent transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.language:hover::after,
.language:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(-4px);
}
</style>