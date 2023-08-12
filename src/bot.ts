import { messages } from "./messages";
import colors from "colors";
import { Configuration, OpenAIApi } from "openai";

const openAi = new OpenAIApi(
  new Configuration({
    basePath: "https://api.chatanywhere.cn/v1",
    apiKey: process.env.OPEN_API_KEY,
  })
);

export async function botAnswer() {
  const chatCompletion = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });
  const answer = chatCompletion.data.choices[0].message?.content;
  messages.push({
    role: "assistant",
    content: answer!,
  });
  console.log(colors.bold.red("Bot: ") + answer);
}
