<script setup lang="ts">

</script>

<template>
    <div class="tlo">
        <div class="container">
            <div class="kola-ratunkowe">
                <button class="button-zagraj-jeszcze">Zagraj jeszcze raz</button>
                <div class="kola-elementy">
                    <div class="elipsa elipsa-wymien">
                        <img src="../assets/wymien.png" alt="wymien pytanie" width="60px" height="100px" />
                    </div>
                </div>
                 <div class="kola-elementy">
                    <div class="elipsa">
                        75:100
                    </div>
                </div>
                <div class="kola-elementy">
                    <div class="elipsa">
                        50:50
                    </div>
                </div>
            </div>
            <img src="../assets/glosnik.png" alt="glosnik" width="84px" height="74px"/>
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

.container {
    display: flex;
    flex-direction: column;
    height: 1080px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 1080px;
    width: 1320px;
}

.kola-ratunkowe {
    color: #093343;
    font-size: 35px;
    font-style: medium;
    font-weight: 500;
    font-family: "Proxima Nova", sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-self: flex-start;
    gap: 24px;
    position: relative;
    margin-left: 181px;
    margin-bottom: 40px;
}

.kola-elementy {
    display: inline-block;
    position: relative;
    text-align: center;
}

.button-zagraj-jeszcze{
    color: white;
    background-color: #093343;
    width: 346px;
    height: 93px;
    border-radius: 39px;
    font-size: 35px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
}

.elipsa {
    display: block;
    width: 158px;
    height: 118px;
    background-image: url('../assets/ellipse1.png');
    background-size: 158px 118px;
    background-repeat: no-repeat;
    margin-left: 25px;
    padding-top: 36px;
    margin-bottom: -20px;
}

.elipsa-wymien {
    padding-top: 15px !important;
    margin-bottom: -0px !important;
}
</style>