import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const TOKEN = "ВСТАВЬ_СЮДА_СВОЙ_ТОКЕН";

app.post("/api/message", async (req,res)=>{
  const text = req.body.text;

  const tgRes = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage`,
    {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({
        chat_id: req.body.chat_id,
        text: "🤖 ИИ ответ: " + text
      })
    }
  );

  const data = await tgRes.json();
  res.json({ reply: "Отправлено в Telegram ✅" });
});

app.listen(3000, ()=>console.log("Server running"));
