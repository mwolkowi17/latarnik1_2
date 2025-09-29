<script setup lang="ts">
import Podpowiedz from './Podpowiedz.vue';
import PrawidlowaOdpowiedz from './PrawidlowaOdpowiedz.vue';
import ZlaOdpowiedz from './ZlaOdpowiedz.vue';
import { useSceneStore } from '../stores/sceneStore';
import { useTimerStore } from '../stores/timerStore';
import { useMainCompStore } from '../stores/mainCompStore';
import { onMounted } from 'vue';

const storeSceneMain = useSceneStore();
const storeTime = useTimerStore();
const storeMainComp =useMainCompStore()


onMounted(() => {
    storeSceneMain.addQuestionLevel1()
    storeTime.startTimerValue()
   // storeTime.updateTimerDispay()
    storeTime.startTimer()
})

//obsługa eventów podpiętych do buttonów
function JeszczRaz(){
    storeMainComp.ifMain1=false
    storeMainComp.ifInstruction=true
}

async function odpowiedz1Click() {
    console.log('odp1')
    storeSceneMain.Odpowiedz1(1)
    storeTime.isPaused=true
}

async function odpowiedz2Click() {
    console.log('odp2')
    storeSceneMain.Odpowiedz1(2)
    storeTime.isPaused=true
}

async function odpowiedz3Click() {
    console.log('odp3')
    storeSceneMain.Odpowiedz1(3)
    storeTime.isPaused=true
}

async function odpowiedz4Click() {
    console.log('odp4')
    storeSceneMain.Odpowiedz1(4)
    storeTime.isPaused=true
}

function PauseTimer(){
    storeTime.isPaused=true
}

function PlayTimer(){
    storeTime.isPaused=false
}



</script>

<template>
    <div class="tlo">
        <button class="button-zagraj-jeszcze my-button" @click="JeszczRaz">Zagraj jeszcze raz</button>
        <div class="kola-elementy">
            <div class="elipsa elipsa-podpowiedz">
                <img src="../assets/podpowiedz.png" alt="wymien pytanie" width="103px" height="78px" />
            </div>
        </div>
        <div class="kola-elementy">
            <div class="elipsa elipsa-wymien">
                <img src="../assets/wymien.png" alt="wymien pytanie" width="60px" height="100px" />
            </div>
        </div>
        <div class="kola-elementy">
            <div class="elipsa elipsa-seven">
                75:100
            </div>
        </div>
        <div class="kola-elementy">
            <div class="elipsa elipsa-fifty">
                50:50
            </div>
        </div>
        <img class="glosnik" src="../assets/glosnik.png" alt="glosnik" width="84px" height="74px" />

        <Podpowiedz class="component-podpowiedz" v-if="storeSceneMain.ifPodpowiedz" />
        <PrawidlowaOdpowiedz class="component-prawidlowa-odpowiedz" v-if="storeSceneMain.ifPrawidlowaOdpowiedz" />
        <ZlaOdpowiedz class="component-zla-odpowiedz" v-if="storeSceneMain.ifZlaOdpowiedz" />

        <div class="container-pytanie">{{ storeSceneMain.pytanie }}</div>
        <button class="button-odpowiedz buttonA my-button" @click="odpowiedz1Click">
            {{ storeSceneMain?.odpowiedz1 }}
        </button>
        <button class="button-odpowiedz buttonB my-button" @click="odpowiedz2Click">
            {{ storeSceneMain.odpowiedz2 }}
        </button>
        <button class="button-odpowiedz buttonC my-button" @click="odpowiedz3Click">
            {{ storeSceneMain.odpowiedz3 }}
        </button>
        <button class="button-odpowiedz buttonD my-button" @click="odpowiedz4Click">
            {{ storeSceneMain.odpowiedz4 }}
        </button>

        <div class="container-punktacja">
            <div class="ramka-punktacja" :style="{ top: storeSceneMain.ramkaPunktacjaWysokosc + 'px' }"></div>
            <div class="licznik-czasu">
                <p class="licznik-display">
                   {{ storeTime.formattedTime }}
                </p>               
            </div>
            <button class="my-button button-pauza" @click="PauseTimer">Pauza</button>
            <button class="my-button button-kontynuj" @click="PlayTimer">Kontynuj</button>
            <div class="container-points">
                <div class="punktacja-row">
                    <p class="napis-punktacja">10</p>
                    <img class="punktacja-elementy" src="../assets/puchar_gold.png" width="67px" height="80px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">9</p>
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">8</p>
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">7</p>
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">6</p>
                    <img class="punktacja-elementy moneta" src="../assets/moneta_gold.png" width="60px" height="58px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">5</p>
                    <img class="punktacja-elementy moneta" src="../assets/puchar_silver.png" width="67px"
                        height="80px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">4</p>
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">3</p>
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">2</p>
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                </div>
                <div class="punktacja-row">
                    <p class="napis-punktacja">1</p>
                    <img class="punktacja-elementy moneta" src="../assets/moneta_silver.png" width="60px"
                        height="58px" />
                </div>
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

.button-zagraj-jeszcze {
    color: white;
    background-color: #093343;
    width: 346px;
    height: 93px;
    border-radius: 39px;
    font-size: 35px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
    position: absolute;
    top: 40px;
    left: 19px;
}

.kola-elementy {
    display: inline-block;
    position: relative;
    text-align: center;
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

.elipsa-podpowiedz {
    padding-top: 15px !important;
    margin-bottom: -0px !important;
    position: absolute;
    top: 17px;
    left: 585px
}

.elipsa-wymien {
    padding-top: 15px !important;
    margin-bottom: -0px !important;
    position: absolute;
    top: 17px;
    left: 763px
}

.elipsa-seven {
    color: #093343;
    font-size: 35px;
    font-style: medium;
    font-weight: 500;
    font-family: "Proxima Nova", sans-serif;
    position: absolute;
    top: 17px;
    left: 940px
}

.elipsa-fifty {
    color: #093343;
    font-size: 35px;
    font-style: medium;
    font-weight: 500;
    font-family: "Proxima Nova", sans-serif;
    position: absolute;
    top: 17px;
    left: 1118px
}

.glosnik {
    position: absolute;
    top: 147px;
    left: 34px;
    opacity: 0.77;
}

.component-podpowiedz {
    position: absolute;
    top: 370px;
    left: 315px
}

.component-prawidlowa-odpowiedz {
    position: absolute;
    top: 246px;
    left: 315px
}

.component-zla-odpowiedz {
    position: absolute;
    top: 246px;
    left: 315px
}

.container-pytanie {
    position: absolute;
    width: 1255px;
    height: 125px;
    border-radius: 39px;
    background-color: #D7E2F1;
    border: 5px solid #1D5488;
    top: 643px;
    left: 32px;
    text-align: center;
    font-size: 36px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    display: grid;
    place-content: center
}

.button-odpowiedz {
    position: absolute;
    text-align: center;
    font-size: 36px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    display: grid;
    place-content: center;
    width: 620px;
    height: 125px;
    border-radius: 39px;
    background-color: #D7E2F1;
    border: 5px solid #1D5488;
}

.buttonA {
    top: 786px;
    left: 32px;
}

.buttonB {
    top: 786px;
    left: 675px;
}

.buttonC {
    top: 930px;
    left: 32px;
}

.buttonD {
    top: 930px;
    left: 675px;
}

.container-punktacja {
    position: absolute;
    width: 590px;
    height: 1070px;
    left: 1320px;
    top: 0px;
    border: 5px solid #1D5488;
    background-color: #0079A5;

}

.licznik-czasu {
    position: absolute;
    width: 252px;
    height: 136px;
    text-align: center;
    font-size: 60px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    display: grid;
    place-content: center;
    background-color: #FFEFE3;
    border: 5px solid #1D5488;
    border-radius: 39px;
    top: 29px;
    left: 27px
}

.licznik-display{
    position: absolute;
    left: 45px;
    top:-30px
}

.button-pauza {
    color: white;
    background-color: #093343;
    width: 222px;
    height: 60px;
    border-radius: 39px;
    font-size: 35px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
    position: absolute;
    left: 313px;
    top: 29px;
    border: 2px solid #FFFFFF
}

.button-kontynuj {
    color: white;
    background-color: #093343;
    width: 222px;
    height: 60px;
    border-radius: 39px;
    font-size: 35px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
    position: absolute;
    left: 313px;
    top: 107px;
    border: 2px solid #FFFFFF
}

.container-points {
    position: absolute;
    width: 540px;
    height: 800px;
    top: 250px;
    left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.napis-punktacja {
    color: white;
    font-size: 50px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
    margin-top: 0px;
    margin-bottom: 0px;
    display: inline-block;

}

.punktacja-row {
    margin-top: 0px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.punktacja-elementy {
    position: relative;
    display: inline-block;
}

.moneta {
    margin-left: 20px;
}

.ramka-punktacja {
    position: absolute;
    background: #093343;
    width: 558px;
    height: 70px;
    /* top: 990px; */
    left: 15px;
}
</style>