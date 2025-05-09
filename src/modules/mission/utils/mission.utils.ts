import { createChatCompletion } from '@src/common/utils/openai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// OCR API 호출 (GPT Vision API 사용)
export async function callOcrApi(file: Express.Multer.File): Promise<string> {
  try {
    if (!file || !file.buffer) {
      throw new Error('영수증 이미지 파일이 필요합니다.');
    }
    // memoryStorage: file.buffer 사용
    const base64Image = file.buffer.toString('base64');

    // GPT Vision API 호출
    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: '이 영수증에서 가게 이름과 날짜를 추출해주세요. JSON 형식으로 반환해주세요. 예시: {"storeName": "스타벅스", "date": "2024-03-20"}',
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    });

    // 응답 파싱
    const result = response.choices[0].message.content;
    const parsedResult = JSON.parse(result);

    return `${parsedResult.storeName} (${parsedResult.date})`;
  } catch (error) {
    console.error('OCR 처리 중 오류 발생:', error);
    throw new Error('영수증 인식에 실패했습니다.');
  }
}

// GPT로 일기 피드백 생성
export async function callGptDiaryFeedback(diaryText: string): Promise<string> {
  const prompt = `
다음은 사용자가 작성한 일기입니다. 공감과 격려를 담아 피드백을 해주세요.
일기 내용: ${diaryText}
`;

  const result = await createChatCompletion([
    { role: 'user', content: prompt },
  ]);

  return result.content;
}
