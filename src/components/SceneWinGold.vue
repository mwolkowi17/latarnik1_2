<script setup lang="ts">

</script>

<template>
<div class="tlo">
        <div class="container-win-silver">
            <div class="circle">
                <img class="ikona" src="../assets/puchar_gold.png" width="191px" height="227px" />
            </div>
            <p class="brawo">Gratulacje!</p>
            <p class="text text-nagroda">Nagroda – złoty puchar.</p>
            <p class="text">Poziom trudny - ukończony!</p>
            <div class="button-row">
                <button class="my-button button-win">
                    Zagraj jeszcze raz
                </button>
                <button class="my-button button-win">
                    Zakończ grę
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tlo {
    background-image: url("../assets/latarnia.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width: 1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}

.circle {
    width: 289px;
    height: 289px;
    border-radius: 150px;
    background-color: #093343;
    position: relative;
    top: 25px;
    left: 555px;
}

.container-win-silver {
    width: 1400px;
    height: 778px;
    border-radius: 39px;
    background-color: #0BB717;
    border: 5px solid #1D5488;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
    position: absolute;
    top: 145px;
    left: 267px;

}

.brawo {
    font-size: 64px;
    margin-top: 32px;
    margin-bottom: 0px;
}

.text-nagroda{
    font-size: 64px;
}

.text {
    margin-top: 20px;
    margin-bottom: 20px;
}

.ikona {
    margin-top: 20px;
}

.button-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
}

.button-win {

    text-align: center;
    font-size: 36px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    display: grid;
    place-content: center;
    width: 460px;
    height: 113px;
    border-radius: 39px;
    background-color: #093343;
    color: white;
    position: absolute;
}
</style>