import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import readlineSync from "readline-sync";
import colors from "colors";
dotenv.config();

const openAi = new OpenAIApi(
  new Configuration({
    basePath: "https://api.chatanywhere.cn/v1",
    apiKey: process.env.OPEN_API_KEY,
  })
);

const messages: { role: "user" | "assistant"; content: string }[] = [];

(async () => {
  try {
    while (true) {
      const userInput = readlineSync.question(colors.rainbow("You: "));
      if(userInput === 'exit') {
        process.exit();
      }
      messages.push({
        role: "user",
        content: userInput, 
      })
      const chatCompletion = await openAi.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
      });
      const answer = chatCompletion.data.choices[0].message?.content;
      messages.push({
        role: 'assistant',
        content: answer!
      })
      console.log(colors.bold.red('Bot: ') + answer);
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
})();
