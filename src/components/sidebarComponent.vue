<script>
export default {
    name: "sidebarComponent"
}
</script>
<template>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="#">Light</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#profile">About me</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#skill">
                Skill
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#proyect">
                Proyect
            </a>
        </li>
    </ul>
</template>
<style scoped>
.nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 1px;
    margin: 20px auto;
    margin-left: 44%;
    border-radius: 10px;
    background-color: #1e1e1e;
}

.nav-item {
    margin: 0;
    padding: 0;
}

.icon {
    width: 40px;
    height: 40px;
}


.nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    transition: transform 0.2s ease-in-out;
    color: orange;
}

.nav-link:hover {
    transform: scale(1.1);
    color: white
}
</style>