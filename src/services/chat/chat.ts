import { OPENAI_API_KEY } from "@/config";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

class Chat {
    private openai: OpenAIApi;
    constructor() {
        this.initOpenAPI();
    }

    public async initOpenAPI() {
        const configuration = new Configuration({
            apiKey: OPENAI_API_KEY,
        });
        this.openai = new OpenAIApi(configuration);
    }

    public async chat(messages: ChatCompletionRequestMessage[]) {
        const chatGPT = await this.openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages
        });
        console.log(`Completion tokens: ${chatGPT.data.usage.completion_tokens}`);
        console.log(`Prompt tokens: ${chatGPT.data.usage.prompt_tokens}`);
        console.log(`Total tokens text: ${chatGPT.data.usage.total_tokens}`);
        return chatGPT.data.choices[0].message.content;
    }
}

export default Chat;