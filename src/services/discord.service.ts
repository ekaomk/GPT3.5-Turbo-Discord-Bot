
// const { REST, Routes } = require('discord.js');
import { DISCORD_BOT_TOKEN, DISCORD_CLIENT_ID } from '@/config';
import { REST, Routes, Client, GatewayIntentBits, CacheType, SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { ChatCompletionRequestMessage } from 'openai';
import Chat from './chat/chat';
import { messages } from './chat/messages';

class DiscordService {
    private chat: Chat;
    constructor() {
        this.chat = new Chat();
    }

    public start() {
        this.initCommand();
        this.initClient();
    }

    private initCommand() {
        const commands = [
            new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!').toJSON(),
            new SlashCommandBuilder()
                .setName('chat')
                .setDescription('Chat with AI')
                .addStringOption(option => option.setName('text').setDescription('Text for chat with AI').setRequired(true))
                .toJSON(),
        ];

        const rest = new REST({ version: '10' }).setToken(DISCORD_BOT_TOKEN);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands });

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();
    }

    private initClient() {
        const client = new Client({ intents: [GatewayIntentBits.Guilds] });

        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.on('interactionCreate', async interaction => {
            if (!interaction.isChatInputCommand()) return;

            switch (interaction.commandName) {
                case 'ping':
                    await interaction.reply('Pong!');
                    break;
                case 'chat':
                    await this.commandMobIdsToNames(interaction);
                    break;
            }
        });

        client.login(DISCORD_BOT_TOKEN);
    }



    private async commandMobIdsToNames(interaction: ChatInputCommandInteraction<CacheType>) {
        const text = interaction.options.getString('text');
        // find discordId in savedChat
        await interaction.deferReply();
        const response = await this.chat.chat([
            {
                role: 'user',
                content: text,
            }
        ]);
        interaction.editReply(response);
    }
}

export default DiscordService;