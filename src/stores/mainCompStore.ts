import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainCompStore = defineStore("mainComp1", () => {
  //podstawowe sterowanie ekranami gry

  const ifInstruction = ref(false);
  const ifMain1 = ref(true);
  const ifWinSilver = ref(false);
  const ifWinGold = ref(false);
  const ifPrzegranaSilver = ref(false);
  const ifPrzegranaGold = ref(false);

  return {
    ifInstruction,
    ifMain1,
    ifWinSilver,
    ifWinGold,
    ifPrzegranaSilver,
    ifPrzegranaGold,
  };
});
