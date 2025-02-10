<script>
export default {
    name: "skillComponent"
}
</script>
<template>
    <div class="container-sm skillContent">
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span>FrontEnd</span>
                <ul>
                    <li>JavaScript</li>
                    <li>Html</li>
                    <li>Css</li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span>BackEnd</span>
                <ul>
                    <li>C#</li>
                    <li>Visual basic</li>
                    <li>Java</li>
                    <li>PHP</li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span>DataBase</span>
                <ul>
                    <li>Sql</li>
                    <li>Pl/Sql</li>
                </ul>
            </li>
        </ul>

        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span>Tecnologias</span>
                <ul>
                    <li>XML</li>
                    <li>XSD</li>
                    <li>DTD</li>
                    <li>XSLT</li>
                    <li>XPATH</li>
                </ul>
            </li>
            <li class="list-group-item bg-dark text-white">
                <span>Frameworks</span>
                <ul>
                    <li>Vue</li>
                    <li>JQUERY</li>
                </ul>
            </li>
        </ul>

        <ul class="list-group list-group-horizontal">
            <li class="list-group-item bg-dark text-white">
                <span>Control Versiones</span>
                <ul>
                    <li>GitHub</li>
                    <li>BitBucket</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.skillContent ul {
    padding-bottom: 20px;
}
</style>