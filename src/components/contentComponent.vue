<script>
import profileComponent from './profileComponent.vue'
import sidebarComponent from './sidebarComponent.vue'
import skillComponent from './skillComponent.vue'
import proyectComponent from './proyectComponent.vue'
import footerComponent from './footerComponent.vue'
import programComponent from './programComponent.vue'

export default {
    name: "contentComponent",
    components: {
        skillComponent,
        sidebarComponent,
        profileComponent,
        proyectComponent,
        footerComponent,
        programComponent
    }
}
</script>
<template>
    <sidebarComponent />

    <programComponent title="About me" height="50%" width="40%">
        <profileComponent />
    </programComponent>

    <programComponent title="Skills" height="2%" width="55%">
        <skillComponent />
    </programComponent>

    <programComponent title="My Proyects" height="20%" width="60%">
        <proyectComponent />
    </programComponent>

    <footerComponent />
</template>