<script>
import profileComponent from './profileComponent.vue'
import sidebarComponent from './sidebarComponent.vue'
import skillComponent from './skillComponent.vue'

export default {
    name: "contentComponent",
    components: {
        skillComponent,
        sidebarComponent,
        profileComponent
    }
}
</script>
<template>
    <profileComponent></profileComponent>
    <skillComponent></skillComponent>
    <sidebarComponent></sidebarComponent>
</template>