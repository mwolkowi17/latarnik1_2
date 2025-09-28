<script setup lang="ts">

</script>

<template>
    <div class="tlo" aria-label="Zasady gry">
        <div class="container">
            <div class="inner-box">
                <h1 class="title">
                    Kto wygra milion? Zasady gry
                </h1>
                <div class="kola-ratunkowe">
                    <span class="kola-elementy" id="kola-naglowek">Koła ratunkowe:</span>
                    <div class="kola-elementy">
                        <div class="elipsa">
                            50:50
                        </div>
                        <p class="podpis-1">usuń dwie</p>
                        <p class="podpis-1">złe odpwiedzi</p>
                    </div>
                    <div class="kola-elementy">
                        <div class="elipsa">
                            75:100
                        </div>
                        <p class="podpis-1">usuń jedną</p>
                        <p class="podpis-1">złą odpwiedź</p>
                    </div>
                    <div class="kola-elementy">
                        <div class="elipsa elipsa-wymien">
                            <img src="../assets/wymien.png" alt="wymien pytanie" width="60px" height="100px" />
                        </div>
                        <p class="podpis-1 podpis-wymien">wymień</p>
                        <p class="podpis-1 podpis-pytanie">pytanie</p>
                    </div>
                    <div class="kola-elementy">
                        <div class="elipsa elipsa-podpowiedz">
                            <img src="../assets/podpowiedz.png" alt="wymien pytanie" width="90px" height="80px" />
                        </div>
                        <p class="podpis-1 podpis-odpowiedz">podpowiedź</p>
                        <p class="podpis-1"></p>
                    </div>
                </div>
                <ul class="zasady" tabindex="0">
                    <li>Gra polega na udzieleniu poprawnej odpowiedzi na 10 pytań, podzielonych na dwa poziomy
                        trudności: łatwy i trudny. Twoim
                        celem jest ukończenie gry i zdobycie złotego pucharu.</li>
                    <li>Każde pytanie ma cztery opcje odpowiedzi. Masz 20 sekund, żeby odpowiedzieć na każde pytanie.
                    </li>
                    <li>Na poziomie łatwym masz do dyspozycji trzy koła ratunkowe, a na poziomie trudnym cztery koła
                        ratunkowe, które możesz
                        wykorzytać tylko raz.</li>
                    <li>Za każdą prawidłową odpowiedź zdobywasz monety. Przy poprawnej odpowiedzi na pytanie 5, czyli po
                        ukończeniu poziomu
                        łatwego masz zagwarantowaną wygraną - srebrny Puchar.</li>
                    <li>Jeżeli udzielisz niepoprawnej odpowiedzi na poziomie łatwym, rozpoczynasz grę od nowa, jeżeli
                        źle odpowiesz na poziomie
                        trudnym, rozpoczynasz grę od pierwszego pytania na poziomie trudnym.</li>
                    <li>Kiedy ukończysz grę, możesz zagrać jeszcze raz.</li>
                </ul>
                <button class="button-start">Start</button>

            </div>
        </div>
    </div>
    <!-- <div class="linia-test"></div> -->
</template>

<style scoped>
.linia-test {
    width: 1900px;
    height: 4px;
    background-color: black;
    position: absolute;
    top: 340px;
    right: 0px;
    z-index: 2;
}

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
}

.inner-box {
    height: 1000px;
    width: 1800px;
    background-color: #E7F1FF;
    border: 5px solid #02506C;
    border-radius: 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    color: #093343;
    font-size: 50px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    margin-top:-20px;
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

li{
    margin-bottom: 10px;
}

.kola-elementy {
    display: inline-block;
    position: relative;
    text-align: center;
}

#kola-naglowek {
    margin-top: -110px;
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

.elipsa-podpowiedz {
    padding-top: 21px !important;
    margin-bottom: -7px !important;
   
}

.podpis-1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 30px;
    font-style: medium;
    font-weight: 500;
    font-family: "Proxima Nova", sans-serif;
}

.podpis-odpowiedz {
    margin-bottom: 42px !important;
    margin-left: 25px;
}

.podpis-wymien {
    margin-left: 25px;
}

.podpis-pytanie {
    margin-left: 25px;
}


.zasady {
    color: #093343;
    font-size: 30px;
    font-style: medium;
    font-weight: 500;
    font-family: "Proxima Nova", sans-serif;
    margin-left: 56px;
    margin-right: 50px;
}

.zasady:focus{
      outline: 2px solid black;
  outline-offset: 10px;
}

.button-start {
    color: white;
    background-color: #093343;
    width: 260px;
    height: 93px;
    border-radius: 39px;
    font-size: 48px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
}

.button-start:focus{
  outline: 5px solid black;
  outline-offset: 10px;
}
</style>