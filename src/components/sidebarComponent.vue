<script>
export default {
    name: "sidebarComponent"
}
</script>
<template>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="#">
                <img  src="@/assets/svg/lightbulb.svg" alt="light" id="light" class="icon">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href=" https://www.linkedin.com/in/edisonenriquedev/">
                <img src="@/assets/svg/linkedin.svg" alt="linkedin" id="linkedin" class="icon">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                <img src="@/assets/svg/information.svg" alt="curriculum" id="curriculum" class="icon">
            </a>
        </li>
    </ul>

</template>
<style scoped>
.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    list-style: none;
    padding: 0;
    margin: 20px auto;
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
}

.nav-link:hover {
    transform: scale(1.1);
    border-bottom: 1px solid white;
}
</style>