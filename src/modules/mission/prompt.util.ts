export function makeMissionPrompt({
  age,
  gender,
  level,
  score,
  type,
}: {
  age: number;
  gender: string;
  level: string;
  score: number;
  type: string;
}) {
  const levelDesc =
    {
      low: `은둔 성향 낮음 - 도전적이고 사회적 활동이 포함된 미션을 추천해줘.`,
      mid: `은둔 성향 중간 - 적당한 난이도의 미션을 추천해줘. 너무 어렵거나 너무 쉽지 않게.`,
      high: `은둔 성향 높음 - 아주 쉬운 미션(집 근처 짧은 산책, 집안에서 할 수 있는 작은 행동 등)만 추천해줘. 절대 부담스럽거나 외부 활동이 많은 미션은 주지 마.`,
    }[level] || '';

  return `
너는 히키코모리 탈출을 돕는 상담가야.
아래 사용자 정보를 참고해서, ${type} 유형의 미션을 1개 생성해줘.

- 나이: ${age}
- 성별: ${gender}
- 은둔 성향: ${level} (${levelDesc})
- 설문 점수: ${score}

미션 유형 설명:
RECEIPT: 사용자가 집 근처(반경 3km) 카페나 음식점에 방문해 영수증을 받아오는 미션
GPS: 30분 이상 산책하기 등 GPS로 확인 가능한 미션
VOICE: 마이크로 특정 문장을 10번 읽는 미션
BUTTON: 좋은 글귀를 읽고 확인 버튼을 누르는 미션
DIARY: 일기를 작성하고 제출하는 미션

미션 예시(형식):
{
  "title": "카페에서 커피 한 잔 마시기",
  "description": "집 근처 카페에 방문해 커피를 마시고 영수증을 받아 인증해보세요.",
  "type": "${type}"
}
`.trim();
}
