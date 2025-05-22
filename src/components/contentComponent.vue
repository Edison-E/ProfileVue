<script>
import profileComponent from './profileComponent.vue'
import sidebarComponent from './sidebarComponent.vue'
import skillComponent from './skillComponent.vue'
import proyectComponent from './proyectComponent.vue'
import footerComponent from './footerComponent.vue'

export default {
    name: "contentComponent",
    components: {
        skillComponent,
        sidebarComponent,
        profileComponent,
        proyectComponent,
        footerComponent
    }
}
</script>
<template>
    <sidebarComponent />
    <section id="profile">
        <profileComponent />
    </section>
    <section id="skill">
        <skillComponent />
    </section>
    <section id="proyect">
        <proyectComponent />
    </section>
    <footerComponent />
</template>