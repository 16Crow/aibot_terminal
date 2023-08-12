import readlineSync from "readline-sync";
import colors from "colors";

export function askQuestion() {
  const userInput = readlineSync.question(colors.rainbow("You: "));
  return userInput;
}
