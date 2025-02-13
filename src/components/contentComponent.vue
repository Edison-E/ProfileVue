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
    <sidebarComponent></sidebarComponent>
    <profileComponent></profileComponent>
    <skillComponent></skillComponent>
</template>