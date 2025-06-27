import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { database } from "./firebase.js"; // Импортируем базу данных из firebase.js
import { ref, set } from "firebase/database"; // Импортируем нужные функции для работы с базой данных

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
    // Сохраняем данные пользователя в Firebase
    set(ref(database, "users/" + userId), {
      // Указываем правильный путь для сохранения данных
      userId,
      firstName,
      lastName,
      username,
    })
      .then(() => {
        console.log("Данные успешно сохранены в Firebase!");
      })
      .catch((error) => {
        console.error("Ошибка при сохранении данных:", error);
      });

    bot.sendMessage(
      chatId,
      `📄 Мы записали твой ID: ${userId}\nИмя: ${firstName} ${lastName}\n@${username}`
    );
  });
});
