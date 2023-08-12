import dotenv from "dotenv";
import { askQuestion } from "./user";
import { botAnswer, initBot } from "./bot";
dotenv.config();

initBot();

(async () => {
  try {
    while (true) {
      const userInput = askQuestion();
      checkExit(userInput);
      await botAnswer();
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
})();

function checkExit(input: string) {
  if (input.toLocaleLowerCase() === "exit") {
    process.exit();
  }
}
