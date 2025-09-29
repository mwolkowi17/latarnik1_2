import { defineStore } from "pinia";
import { ref, nextTick } from "vue";
import gameData from "../lib/pytania.json";
import pointsPosition from "../lib/pozycjaRamki.json";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";
import { useMainCompStore } from "../stores/mainCompStore";
import { useTimerStore } from "./timerStore";

export const useSceneStore = defineStore("storeScene1", () => {
  //dostęp do store'ów
  const storeSceneMain = useMainCompStore();
  const timerStore = useTimerStore();

  //sterowanie komponentami głównej sceny
  const ifPodpowiedz = ref(false);
  const ifPrawidlowaOdpowiedz = ref(false);
  const ifZlaOdpowiedz = ref(false);

  //położenie ramki punktacji
  const ramkaPunktacjaWysokosc = ref(pointsPosition.pozycjaRamki[0]);

  //liczik punktacji (sterownie ramką punktacji)
  const licznikPunktacja = ref(0);

  // właściwości dot pytań
  const kolekcjaPytan = ref(gameData.poziom1);
  const pytanie = ref("pytanie");
  const odpowiedz1 = ref("odpowiedz1");
  const odpowiedz2 = ref("odpowiedz2");
  const odpowiedz3 = ref("odpowiedz3");
  const odpowiedz4 = ref("odpowiedz4");
  const nrOdpowiedziDobrej = ref(0);
  const wybranaOdpowiedz = ref(0);

  let nrKolejki = 0;

  //metoda dodajaca losowo pytania
  async function addQuestionLevel1() {
    //const kolekcjaPytan = gameData.poziom1;
    let iloscElementowKolekcjiPytan = gameData.poziom1.length - nrKolejki;
    let pytanieNr: number;
    pytanieNr = metodyPomocnicze.wybierzPytanie(iloscElementowKolekcjiPytan);
    console.log("wyswietlane pytanie:" + pytanieNr);

    await nextTick();
    nrKolejki++;
    pytanie.value = kolekcjaPytan.value[pytanieNr]?.pytanie ?? "";
    odpowiedz1.value = kolekcjaPytan.value[pytanieNr]?.odpowiedz1 ?? "";
    odpowiedz2.value = kolekcjaPytan.value[pytanieNr]?.odpowiedz2 ?? "";
    odpowiedz3.value = kolekcjaPytan.value[pytanieNr]?.odpowiedz3 ?? "";
    odpowiedz4.value = kolekcjaPytan.value[pytanieNr]?.odpowiedz4 ?? "";
    nrOdpowiedziDobrej.value =
      Number(kolekcjaPytan.value[pytanieNr]?.prawidlowa_odpowiedz) || 0;
    //wybranaOdpowiedz.value = nrWybranegoPytania;

    await nextTick();
    function pytanieNrindex(_: (typeof kolekcjaPytan.value)[0], index: number) {
      return index !== pytanieNr;
    }
    const result = kolekcjaPytan.value.filter(pytanieNrindex);
    kolekcjaPytan.value = result;
    console.log(kolekcjaPytan.value);
    await nextTick();
    console.log("oczekiwana odpowiedz:" + nrOdpowiedziDobrej.value);

    if (nrKolejki === 5) {
      console.log("koniec etapu1");
    }
  }

  //sprawdzanie odpoiwedzi
  function sprawdzOdpowiedz(nrWybranegoPytania: number) {
    console.log("wybrana odpowiedz:" + nrWybranegoPytania);
    if (
      metodyPomocnicze.sprawdzOdpowiedz(
        nrWybranegoPytania,
        nrOdpowiedziDobrej.value
      ) === true
    ) {
      console.log("prawidłowa odpowiedz");
      ifPrawidlowaOdpowiedz.value = true;
    }
    if (
      metodyPomocnicze.sprawdzOdpowiedz(
        nrWybranegoPytania,
        nrOdpowiedziDobrej.value
      ) === false
    ) {
      console.log("zła odpowiedz");
      ifZlaOdpowiedz.value = true;
    }
  }

  //obsługa punktacji
  async function ramkaPunktyMove() {
    licznikPunktacja.value = licznikPunktacja.value + 1;
    await nextTick();
    ramkaPunktacjaWysokosc.value =
      pointsPosition.pozycjaRamki[licznikPunktacja.value];
  }

  //obsługa odpowiedzi

  async function Odpowiedz1(buttonNumber: number) {
    sprawdzOdpowiedz(buttonNumber);
    await nextTick();
    if (ifPrawidlowaOdpowiedz.value === true) {
      setTimeout(() => {
        addQuestionLevel1();
        ifPrawidlowaOdpowiedz.value = false;
        ramkaPunktyMove();
        timerStore.isPaused = false;
        timerStore.timeScene1Local = 20;
        if (licznikPunktacja.value === 4) {
          storeSceneMain.ifMain1 = false;
          storeSceneMain.ifWinSilver = true;
        }
      }, 3000);
    } else {
      setTimeout(() => {
        ifZlaOdpowiedz.value = false;
        storeSceneMain.ifMain1 = false;
        storeSceneMain.ifPrzegranaSilver = true;
      }, 3000);
    }
  }

  return {
    ifPodpowiedz,
    ifPrawidlowaOdpowiedz,
    ifZlaOdpowiedz,
    ramkaPunktacjaWysokosc,
    pytanie,
    odpowiedz1,
    odpowiedz2,
    odpowiedz3,
    odpowiedz4,
    nrOdpowiedziDobrej,
    wybranaOdpowiedz,
    licznikPunktacja,
    addQuestionLevel1,
    sprawdzOdpowiedz,
    ramkaPunktyMove,
    Odpowiedz1,
  };
});
