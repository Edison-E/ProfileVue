<script>
export default {
    name: "sidebarComponent"
}
</script>
<template>

    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link" href="#">☽</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href=" https://www.linkedin.com/in/edisonenriquedev/">LinkedIn</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Currículum</a>
        </li>
    </ul>

</template>
<style scoped>
.nav {
    width: 50%;
    margin: auto;
    text-align: center;
}

.nav-link {
    color: orange;
}

.nav-link:hover {
    color: white;
}
</style>