<script setup lang="ts">
//import { useSceneStore } from '../stores/sceneStore';
import {useMainCompStore} from '../stores/mainCompStore'


//const storeSceneMain = useSceneStore();
const storeMainComp = useMainCompStore();

function jeszczeRaz(){
    storeMainComp.ifPrzegranaSilver=false
    storeMainComp.ifMain1=true
}

</script>

<template>
    <div class="tlo">
        <div class="container-fail-silver">
            <div class="circle">
                <div class="przekontna przekontna-a"></div>
                <div class="przekontna przekontna-b"></div>
            </div>
            <p class="brawo">Przegrana.</p>
           
            <div class="button-row">
                <button class="my-button button-win" @click="jeszczeRaz">
                    <p class="button-text">Zagraj jeszcze raz</p>
                    <p class="button-text">-zacznij od poziomu łatwego</p>
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

.przekontna{
    width: 230px;
    height: 15px;
    background-color: #F48506;
    position:absolute;
    top:140px;
    left:27px;
    
}

.przekontna-a{
transform: rotate(45deg); 
}

.przekontna-b{
    transform: rotate(135deg); 
}

.container-fail-silver {
    width: 1400px;
    height: 618px;
    border-radius: 39px;
    background-color: #F48506;
    border: 5px solid #1D5488;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
    position: absolute;
    top: 231px;
    left: 267px;

}

.brawo {
    font-size: 64px;
    margin-top: 32px;
    margin-bottom: 0px;
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
    width: 552px;
    height: 121px;
    border-radius: 39px;
    background-color: #093343;
    color: white;
}

.button-text{
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>