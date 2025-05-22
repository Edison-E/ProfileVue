<script>
export default {
    name: "footerComponent"
}
</script>
<template>
    <div class="container-social">
        <div class="footer-left">
            <p class="name">Edison Enrique Crespo Vasquez</p>
            <p class="rights">© 2025 Edison Enrique. All rights reserved.</p>
        </div>

        <ul class="nav-social footer-right">
            <li class="nav-item-social">
                <a class="nav-link-social" href="https://www.linkedin.com/in/edisonenriquedev/">
                    Linkedin
                    <img src="@/assets/svg/linkedin.svg" alt="linkedin" class="icon-social" />
                </a>
            </li>
            <li class="nav-item-social">
                <a class="nav-link-social" href="https://github.com/Edison-E">
                    GitHub
                    <img src="@/assets/image/github.png" alt="github" class="icon-social" />
                </a>
            </li>
            <li class="nav-item-social">
                <a class="nav-link-social" href="mailto:enrikvc2002@gmail.com">
                    Email
                    <img src="@/assets/image/gmail.png" alt="gmail" class="icon-social" />
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container-social {
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 40px;
    color: white;
}

.footer-left {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.footer-right {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
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

.nav-link-social {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in-out;
}

.nav-link-social:hover {
  transform: scale(1.05);
  border-bottom: 1px solid white;
}

.icon-social {
  width: 30px;
  height: 30px;
}
</style>