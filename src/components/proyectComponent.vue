<script>
import returnImgProyect from "@/js/imgProyect";
export default {
    name: "proyectComponent",
    data() {
        return {
            proyect: {
                "Authentication C#":
                {
                    desc: "This project consists of simple authentication with JWT",
                    update: "2 months ago",
                    link: "https://github.com/Edison-E/AuthenticationBack",
                    tech: ["C#", ".NET"],
                    img: ""
                },
                "ProfileVue":
                {
                    desc: "This project consists of my portfolio made with vue and bootstrap",
                    update: "Now",
                    link: "https://github.com/Edison-E/ProfileVue",
                    tech: ["Vue.js"],
                    img: ""
                },
                "BookingNet":
                {
                    desc: "This project consists of a booking service for different types of services, such as booking a hotel room, a table in a restaurant, among others.",
                    update: "month ago",
                    link: "https://github.com/Edison-E/BookingNET",
                    tech: ["C#", ".NET"],
                    img: ""
                },
                "BookNet": {
                    desc: "This project is a simple library management application.",
                    update: "12 months ago",
                    link: "https://github.com/Edison-E/BookNET",
                    tech: ["Visual Basic", ".NET", "Vue.js"],
                    img: ""
                }
            },
            hovered: null
        }
    },
    methods: {
        hoverProyect(proyect) {
            this.hovered = proyect;
        },
        leaveProyect() {
            this.hovered = null
        },
        BackgroundProyect(project) {
            if (this.hovered === project) {
                const url = returnImgProyect(project);
                return {
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }
            }
            return {};
        }
    }
}
</script>
<template>
    <div class="container-sm proyectContainer">
        <h1>Proyects</h1>

        <div class="grid-container">
            <div v-for="(value, proyect) in proyect" :key="proyect" class="card-proyect" id="imgProyect"
                @mouseover="hoverProyect(proyect)" @mouseleave="leaveProyect" :style="BackgroundProyect(proyect)">
                <div class="card-title">{{ proyect }}</div>
                <div class="card-details">
                    <p class="card-text">{{ value.desc }}</p>
                    <a :href="value.link" class="">Go repository</a>
                    <p class="card-update"> {{ value.update }}</p>
                </div>
                <br>
                <div class="tech-stack">
                    <span v-for="tech in value.tech" :key="tech" class="tech-pill">{{ tech }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.proyectContainer {
    width: 100%;
    max-width: 1200px;
    margin: 5%;
    padding: 10px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.card-proyect {
    margin-top: 5%;
    padding: 10%;
    background-color: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease-in-out;
}

.card-title {
    font-weight: bold;
}

.card-proyect:hover {
    box-shadow: 0 5px 5px rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
    color: #fff;
}

.tech-stack {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-pill {
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #ffffff;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
}

.tech-pill:hover {
    background-color: #ffffff;
    color: #111111;
    transform: scale(1.05);
}
</style>