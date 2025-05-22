<script>
export default {
    name: "footerComponent"
}
</script>
<template>
    <div class="container-social">
        <ul class="nav-social">
            <li class="nav-item-social">
                <a class="nav-link-social" href="https://www.linkedin.com/in/edisonenriquedev/">linkedin
                    <img src="@/assets/svg/linkedin.svg" alt="linkedin" id="linkedin" class="icon-social">
                </a>
            </li>
            <li class="nav-item-social">
                <a class="nav-link-social" href="https://github.com/Edison-E">GitHub
                    <img src="@/assets/image/github.png" alt="curriculum" id="curriculum" class="icon-social">
                </a>
            </li>
            <li class="nav-item-social">
                <a class="nav-link-social" href="mailto:enrikvc2002@gmail.com">Email
                    <img src="@/assets/image/gmail.png" alt="curriculum" id="curriculum" class="icon-social">
                </a>
            </li>
        </ul>
        <div>
            <p>Edison Enrique Crespo Vasquez</p>
        </div>
    </div>
</template>
<style scoped>
.container-social {
    margin-top: 3%;
    margin-left: 4%;
    margin-bottom: 2%;
}

.titleSocial {
    margin-top: 5%;
}

.nav-social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 20px auto;
}

.nav-item-social {
    margin: 0;
    padding: 0;
}

.icon-social {
    width: 50px;
    height: 50px;
}


.nav-link-social {
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-link-social:hover {
    transform: scale(1.1);
    border-bottom: 1px solid white;
}
</style>