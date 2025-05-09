import OpenAI from 'openai';
import 'dotenv/config'; // 이 줄 추가!

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function createChatCompletion(
  messages: OpenAI.Chat.ChatCompletionMessageParam[],
  model = 'gpt-4o-mini'
) {
  const completion = await openai.chat.completions.create({
    model,
    store: true,
    messages,
  });
  return completion.choices[0].message;
}

// 테스트용 코드 (임시로 추가)
if (require.main === module) {
  createChatCompletion([{ role: 'user', content: 'write a haiku about ai' }])
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}
