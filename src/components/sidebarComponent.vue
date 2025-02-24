<script>
export default {
    name: "sidebarComponent"
}
</script>
<template>

    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link" href="#">
                <img  src="@/assets/svg/lightbulb.svg" alt="light" id="light">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href=" https://www.linkedin.com/in/edisonenriquedev/">
                <img src="@/assets/svg/linkedin.svg" alt="linkedin" id="linkedin">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                <img src="@/assets/svg/information.svg" alt="curriculum" id="curriculum">
            </a>
        </li>
    </ul>

</template>
<style scoped>
#light {
    width: 11%;
}

#linkedin {
    width: 6%;
}

#curriculum {
    width: 11%;
}

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