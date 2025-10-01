import { defineStore } from "pinia";
import { ref } from "vue";
import { useMainCompStore } from "./mainCompStore";

export const useTimer2Store = defineStore("timer2Store", () => {
  const storeSceneMain = useMainCompStore();

  // const ifTimerVisible = ref(true);

  // const ifTimeFirstTime = ref(true);

  const timeScene1Local = ref(11);

  const ifTimerOn = ref(true);

  // const formatedTime1 = ref("00:00");

  const isPaused = ref(false);

  const formattedTime = ref("00:20");

  const timerEnd = ref(false);

  const timerInterval = ref(0);

  function startTimerValue() {
    formattedTime.value = "00:20";
  }

  function updateTimerDispay() {
    const minutes = Math.floor(timeScene1Local.value / 60);
    const seconds = timeScene1Local.value % 60;

    formattedTime.value =
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  }

  function startTimer() {
    timeScene1Local.value = 19;
    timerInterval.value = setInterval(() => {
      if (!isPaused.value) {
        if (timeScene1Local.value > 0) {
          updateTimerDispay();
          timeScene1Local.value--;
        } else {
          if (ifTimerOn.value === true) {
            clearInterval(timerInterval.value);
            console.log("Time's up!");
            storeSceneMain.ifMain2 = false;
            storeSceneMain.ifPrzegranaGold = true;
            timerEnd.value = true;
          }
        }
      }
    }, 1000);
  }

  return {
    // ifTimerVisible,
    // ifTimeFirstTime,
    timeScene1Local,
    ifTimerOn,
    formattedTime,
    isPaused,
    timerEnd,
    timerInterval,
    startTimer,
    updateTimerDispay,
    startTimerValue,
  };
});
