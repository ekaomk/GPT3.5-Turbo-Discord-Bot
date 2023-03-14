# ChatGPT 3.5 Turbo Discord Bot

#### A Discord bot that uses the [ChatGPT 3.5 Turbo](https://huggingface.co/microsoft/DialoGPT-medium) model to generate responses to messages.

## Installation
```bash
npm i
```

## Usage
1) Modify environment variables in `.env` file
```bash
# DISCORD
DISCORD_CLIENT_ID = 123456789012345678
DISCORD_BOT_TOKEN = abcdefghijklmnopqrstuvwxyz

# CHATGPT
OPENAI_API_KEY = abcdefghijklmnopqrstuvwxyz
```

2) Run the bot

```bash
# for dev mode
npm run dev
# for production mode
npm run build
npm start
```

3) Invite the bot to your server

```bash
https://discord.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot&permissions=8
```

4) Use command `/chat` to start a conversation with the bot