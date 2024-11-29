<template>
    <div class="box">
        <div class="sky">
            <div class="airplane"></div>
            <div class="building"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Airplane",
};
</script>

<style scoped>
.box {
    width: 500px;
    height: 300px;

    overflow: hidden;

    margin: 50px auto;

    position: relative;

    background-color: #87ceeb;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

    border-radius: 8px;
}

.sky {
    width: 100%;
    height: 100%;

    position: relative;

    background: linear-gradient(to bottom, #87ceeb, #f0f8ff);
}

.airplane {
    width: 50px;
    height: 50px;

    background: url("@/assets/image/airplane.png") no-repeat center/contain;

    position: absolute;

    top: 50%;
    left: -60px;

    transform: translateY(-50%);

    animation: fly 5s linear infinite;
}

.building {
    width: 250px;
    height: 250px;

    background: url("@/assets/image/building.png") no-repeat center/contain;

    position: absolute;

    bottom: -45%;
    left: 65%;

    transform: translateY(-50%);
}

@keyframes fly {
    0% {
        left: -60px;

        transform: translateY(-50%) rotate(0deg);
    }
    50% {
        top: 40%;

        transform: translateY(-50%) rotate(-20deg);
    }
    100% {
        left: 100%;
        top: 10%;

        transform: translateY(-50%) rotate(20deg);
    }
}
</style>
