import { defineStore } from "pinia";
import { ref } from "vue";
import { useMainCompStore } from "./mainCompStore";

export const useTimerStore = defineStore("timerStore", () => {
  const ifTimerVisible = ref(true);

  const ifTimeFirstTime = ref(true);

  const timeScene1Local = ref(11);

  const ifTimerOn = ref(true);

  const formatedTime1 = ref("00:00");

  const storeSceneMain = useMainCompStore();

  const formattedTime = ref("00:20");

  function startTimer() {
    timeScene1Local.value = 20;

    const interval = setInterval(() => {
      if (timeScene1Local.value > 0) {
        const minutes = Math.floor(timeScene1Local.value / 60);
        const seconds = timeScene1Local.value % 60;

        formattedTime.value =
          String(minutes).padStart(2, "0") +
          ":" +
          String(seconds).padStart(2, "0");

        timeScene1Local.value--;
      } else {
        if (ifTimerOn.value === true) {
          clearInterval(interval);
          console.log("Time's up!");
          storeSceneMain.ifMain1 = false;
          storeSceneMain.ifPrzegranaSilver = true;
        }
      }
    }, 1000);
  }

  return {
    ifTimerVisible,
    ifTimeFirstTime,
    timeScene1Local,
    ifTimerOn,
    formatedTime1,
    formattedTime,
    startTimer,
  };
});
