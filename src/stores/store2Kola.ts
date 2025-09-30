import { defineStore } from "pinia";
import { nextTick, ref } from "vue";
import { useScene2Store } from "./scene2Store";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";

export const useKola2Store = defineStore("kola_store2", () => {
  const storeSceneMain = useScene2Store();

  //wyswietlanie ikon podpowiedzi
  const ifWymien = ref(true);
  const ifFifty = ref(true);
  const ifSeventy = ref(true);
  const ifButtonPodpowiedz = ref(true);

  function PokazPodpowiedz() {
    storeSceneMain.ifPodpowiedz = true;
    ifButtonPodpowiedz.value = false;
  }

  function WymienPytanie() {
    storeSceneMain.addQuestionLevel1();
    ifWymien.value = false;
  }

  function UsunJedna() {
    console.log("usuwam jedą odpwowiedź");
    ifSeventy.value = false;
    ifFifty.value = false;
    if (
      metodyPomocnicze.sprawdzOdpowiedz(1, storeSceneMain.nrOdpowiedziDobrej) !=
      true
    ) {
      storeSceneMain.ifOdpowiedz1 = false;
    } else if (
      metodyPomocnicze.sprawdzOdpowiedz(2, storeSceneMain.nrOdpowiedziDobrej) !=
      true
    ) {
      storeSceneMain.ifOdpowiedz2 = false;
    } else if (
      metodyPomocnicze.sprawdzOdpowiedz(3, storeSceneMain.nrOdpowiedziDobrej) !=
      true
    ) {
      storeSceneMain.ifOdpowiedz3 = false;
    } else {
      storeSceneMain.ifOdpowiedz4 = false;
    }
  }

  async function UsunDwie() {
    let jendaJuzJest = 0;
    console.log("usuwam dwie");
    ifSeventy.value = false;
    ifFifty.value = false;
    if (
      metodyPomocnicze.sprawdzOdpowiedz(1, storeSceneMain.nrOdpowiedziDobrej) !=
      true
    ) {
      storeSceneMain.ifOdpowiedz1 = false;
      jendaJuzJest++;
    }
    if (
      metodyPomocnicze.sprawdzOdpowiedz(2, storeSceneMain.nrOdpowiedziDobrej) !=
      true
    ) {
      storeSceneMain.ifOdpowiedz2 = false;
      jendaJuzJest++;
      await nextTick();
      if (jendaJuzJest === 2) {
        return;
      }
    }
    if (
      metodyPomocnicze.sprawdzOdpowiedz(3, storeSceneMain.nrOdpowiedziDobrej) !=
      true
    ) {
      storeSceneMain.ifOdpowiedz3 = false;
      jendaJuzJest++;
      await nextTick();
      if (jendaJuzJest === 2) {
        return;
      }
    }
    if (
      metodyPomocnicze.sprawdzOdpowiedz(4, storeSceneMain.nrOdpowiedziDobrej) !=
      true
    ) {
      storeSceneMain.ifOdpowiedz4 = false;
      jendaJuzJest++;
      await nextTick();
      if (jendaJuzJest === 2) {
        return;
      }
    }
  }

  return {
    ifWymien,
    ifFifty,
    ifSeventy,
    ifButtonPodpowiedz,
    PokazPodpowiedz,
    WymienPytanie,
    UsunJedna,
    UsunDwie,
  };
});
