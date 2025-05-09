import { createChatCompletion } from '@src/common/utils/openai';
import OpenAI from 'openai';
import * as fs from 'fs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// OCR API 호출 (GPT Vision API 사용)
export async function callOcrApi(file: Express.Multer.File): Promise<string> {
  try {
    // 파일을 base64로 인코딩
    const base64Image = fs.readFileSync(file.path, { encoding: 'base64' });

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

    // 임시 파일 삭제
    fs.unlinkSync(file.path);

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

// 음성 인식 결과와 목표 문장 비교
export function compareVoiceRecognition(
  targetText: string,
  recognizedText: string,
  similarityThreshold: number = 0.7
): { isSuccess: boolean; similarity: number; feedback: string } {
  // 문자열 정규화 (공백 제거, 소문자 변환)
  const normalize = (text: string) =>
    text.toLowerCase().replace(/\s+/g, '').trim();

  const normalizedTarget = normalize(targetText);
  const normalizedRecognized = normalize(recognizedText);

  // 레벤슈타인 거리 계산
  const levenshteinDistance = (str1: string, str2: string): number => {
    const m = str1.length;
    const n = str2.length;
    const dp: number[][] = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j - 1] + 1, // 치환
            dp[i - 1][j] + 1, // 삭제
            dp[i][j - 1] + 1 // 삽입
          );
        }
      }
    }
    return dp[m][n];
  };

  // 유사도 계산 (0~1 사이 값)
  const distance = levenshteinDistance(normalizedTarget, normalizedRecognized);
  const maxLength = Math.max(
    normalizedTarget.length,
    normalizedRecognized.length
  );
  const similarity = 1 - distance / maxLength;

  // 피드백 메시지 생성
  let feedback = '';
  if (similarity >= similarityThreshold) {
    feedback = `잘 하셨어요! (정확도: ${Math.round(similarity * 100)}%)`;
  } else {
    feedback = `다시 한번 시도해보세요. (정확도: ${Math.round(similarity * 100)}%)`;
  }

  return {
    isSuccess: similarity >= similarityThreshold,
    similarity,
    feedback,
  };
}
