<script>
export default {
    name: "sidebarComponent"
}
</script>
<template>
    <nav class="navigation">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">☽</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/edisonenriquedev/">linkedIn</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Currículum</a>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
.navigation {
    margin-left: 100px;
    margin-bottom: 40px;
    width: 80%;
}

.nav-link {
    color: orange
}

.nav-link:hover {
    background-color: rgb(52, 49, 49);
    color: white;
}

.nav-item {
    border: 1px solid white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-right: 20px;
}
</style>