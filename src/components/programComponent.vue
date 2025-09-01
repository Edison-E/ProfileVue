<script>
export default {
    name: "programComponent",
    props: {
        title: {
            type: String
        },
        height: {
            type: String
        },
        width: {
            type: String
        }
    }
}
</script>
<template>
    <div class="program-container" :style="{height: height, width: width}">
        <div class="program-header d-flex align-items-center">
            <div class="program-buttons d-flex">
                <button class="btn-control">x</button>
                <button class="btn-control">+</button>
                <button class="btn-control">-</button>
            </div>
            <div class="program-title flex-grow-1 text-center">{{ title }}</div>
        </div>

        <div class="program-body">
            <slot />
        </div>
    </div>
</template>
<style scoped>
.program-container {
    border: 2px solid #ffffff;
    border-radius: 12px;
    margin-top: 10%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
}

.program-header {
    border-bottom: 2px solid white;
    padding: 6px 10px;
    display: flex;
    align-items: center;
}

.program-buttons {
    gap: 6px;
}

.btn-control {
    width: 24px;
    height: 24px;
    border: 1px solid white;
    border-radius: 50%;
    background: transparent;
    color: white;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-control:hover {
    background: white;
    color: black;
}

.program-title {
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
}

.program-body {
    flex-grow: 1;
    background-color: black;
}
</style>