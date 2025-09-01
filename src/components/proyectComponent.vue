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
            this.hovered = null;
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
    <div class="proyectContainer">
        <div class="grid-container">
            <div v-for="(value, proyect) in proyect" :key="proyect" class="card-details" id="imgProyect"
                @mouseover="hoverProyect(proyect)" @mouseleave="leaveProyect" :style="BackgroundProyect(proyect)">
                <div class="overlay"></div>
                <div class="card-title">{{ proyect }}</div>
                <div class="card-text">{{ value.desc }}</div>
                <div class="card-update"> {{ value.update }}</div>
            </div>
            <div v-for="(value, proyect) in proyect" :key="proyect" class="card-details-two">
                <div class="tech-stack">
                    <span v-for="tech in value.tech" :key="tech" class="tech-pill">{{ tech }}</span>
                </div>
                <a class="card-link" :href="value.link">View repository</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.proyectContainer {
    width: 100%;
    max-width: 1200px;
    padding: 10px;
    margin-top: 3%;
    margin-left: 4%;
    margin-bottom: 10%;
}

.proyectContainer h1 {
    margin-left: 7%;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
    margin-left: 7%;
}

.border-bottom {
    margin-bottom: 30px;
    padding-bottom: 60px;
}

.card-details {
    position: relative;
    overflow: hidden;
    margin-top: 5%;
    padding: 10%;
    border-radius: 3%;
    background: linear-gradient(135deg, rgba(176, 126, 1, 0.8), rgba(156, 146, 4, 0.8));
    backdrop-filter: blur(5px);
    transition: all 0.3s ease-in-out;
    color: #fff;
    height: 110%;
}

.card-details-two {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    padding: 10%;
    border-radius: 3%;
    background-color: #1e1e1e;
    transition: all 0.3s ease-in-out;
    color: #fff;
    height: 100%;
}

.overlay {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: background-color 0.3s ease;
}

.card-details>*:not(.overlay) {
    position: relative;
    z-index: 2;
}

.card-title {
    font-weight: bold;
}

.card-link {
    color: white;
    text-decoration: none;
    border: 1px solid;
    padding: 5px;
}

.card-link:hover {
    background-color: #ffa500;
    color: black;
}

.card-details:hover {
    box-shadow: 0 5px 5px rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
    color: #fff;
}

.card-content {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    opacity: 1;
    transform: translateY(0);
}

.card-content.hidden {
    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;
}

.tech-stack {
    margin-top: 10px;
    margin-bottom: 15%;
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
    background-color: #ffa500;
    color: black;
    transform: scale(1.05);
}
</style>