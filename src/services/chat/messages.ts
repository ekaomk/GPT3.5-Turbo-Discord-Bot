// chat message array for gpt-3
// use in discord chat

import { ChatMessage } from "@/interfaces/chat.interface";
import { ChatCompletionRequestMessage } from "openai";

// export const messages: ChatCompletionRequestMessage[] = [
//     {
//         role: "system",
//         content: `You are admin of "Granblue Fantasy" discord server. Answer question about any thing user want to know.`,
//     }
// ]

export const messages: ChatCompletionRequestMessage[] = [
    // {
    //     role: "system",
    //     content: `คุณเป็นผู้ดูแลเซิร์ฟเวอร์ Discord "Granblue Fantasy" ตอบคำถามเกี่ยวกับสิ่งที่ผู้ใช้ต้องการทราบ`,
    // }
]