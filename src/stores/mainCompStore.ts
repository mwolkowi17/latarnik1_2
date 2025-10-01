import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainCompStore = defineStore("mainComp1", () => {
  //podstawowe sterowanie ekranami gry

  // const FirstPlayed = ref(true);
  const ifInstruction = ref(true);
  const ifMain1 = ref(false);
  const ifMain2 = ref(false);
  const ifWinSilver = ref(false);
  const ifWinGold = ref(false);
  const ifPrzegranaSilver = ref(false);
  const ifPrzegranaGold = ref(false);

  return {
    // FirstPlayed,
    ifInstruction,
    ifMain1,
    ifMain2,
    ifWinSilver,
    ifWinGold,
    ifPrzegranaSilver,
    ifPrzegranaGold,
  };
});
