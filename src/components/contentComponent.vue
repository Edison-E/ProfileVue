<script>
import profileComponent from './profileComponent.vue'
import sidebarComponent from './sidebarComponent.vue'
import skillComponent from './skillComponent.vue'
import proyectComponent from './proyectComponent.vue'

export default {
    name: "contentComponent",
    components: {
        skillComponent,
        sidebarComponent,
        profileComponent,
        proyectComponent
    }
}
</script>
<template>
    <sidebarComponent></sidebarComponent>
    <profileComponent></profileComponent>
    <skillComponent></skillComponent>
    <proyectComponent></proyectComponent>
</template>