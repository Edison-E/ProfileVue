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
      <div
        v-for="(value, proyect) in proyect"
        :key="proyect"
        class="card"
        @mouseover="hoverProyect(proyect)"
        @mouseleave="leaveProyect"
        :style="BackgroundProyect(proyect)"
      >
        <!-- Overlay -->
        <div class="overlay"></div>

        <!-- Contenido principal -->
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">{{ proyect }}</h3>
            <p class="card-update">{{ value.update }}</p>
          </div>
          <p class="card-text">{{ value.desc }}</p>

          <!-- Stack y enlace -->
          <div class="card-footer">
            <div class="tech-stack">
              <span
                v-for="tech in value.tech"
                :key="tech"
                class="tech-pill"
              >
                {{ tech }}
              </span>
            </div>
            <a class="card-link" :href="value.link" target="_blank">
              View repository
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proyectContainer {
  width: 100%;
  max-width: 1200px;
  padding: 10px;
  margin-bottom: 60px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

/* Tarjeta unificada */
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #b07e01cc, #9c9204cc);
  color: #fff;
  min-height: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
}

/* Overlay de oscurecimiento */
.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1;
  transition: background-color 0.3s ease;
}

.card:hover .overlay {
  background-color: rgba(0, 0, 0, 0.3);
}

/* Contenido encima del overlay */
.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
}

/* Encabezado */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.card-update {
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Descripción */
.card-text {
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 15px 0;
  flex-grow: 1;
}

/* Footer (stack + link) */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-pill {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 5px 12px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-pill:hover {
  background-color: #ffa500;
  color: black;
  transform: scale(1.05);
}

.card-link {
  background-color: #ffa500;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  padding: 6px 14px;
  transition: all 0.3s ease;
}

.card-link:hover {
  background-color: #fff;
  color: #000;
}
</style>
