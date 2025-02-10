<script>
import profile from './profile.vue'
import sidebar from './sidebar.vue'
import skill from './skill.vue'

export default {
    name: "content",
    components: {
        skill,
        sidebar,
        profile
    }
}
</script>
<template>
    <profile></profile>
    <skill></skill>
    <sidebar></sidebar>
</template>