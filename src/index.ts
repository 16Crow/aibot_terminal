import dotenv from "dotenv";
import { askQuestion } from "./user";
import {botAnswer} from './bot'
dotenv.config();

(async () => {
  try {
    while (true) {
      const userInput = askQuestion();
      checkExit(userInput);
      botAnswer()
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
