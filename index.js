import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { app } from "./firebase.js";

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name || "";
  const lastName = msg.from.last_name || "";
  const username = msg.from.username || "";
  const userId = msg.from.id;

  let welcomeMsg = `👋 Привет, ${firstName}!\n\n`;
  welcomeMsg += `Ты попал в GGselGift 🎁\n\n`;
  welcomeMsg += `Этот бот — гарант обмена или покупки NFT-подарков.\n\n`;
  welcomeMsg += `Мы сейчас соберём информацию о тебе...`;

  bot.sendMessage(chatId, welcomeMsg).then(() => {
    // Пример: сохранить или вывести данные
    console.log("👤 Пользователь:", {
      userId,
      name: `${firstName} ${lastName}`,
      username,
    });

    bot.sendMessage(
      chatId,
      `📄 Мы записали твой ID: ${userId}\nИмя: ${firstName} ${lastName}\n@${username}`
    );
  });
});
