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

  if (type === 'GPS') {
    return `
너는 히키코모리 탈출을 돕는 상담가야.
아래 사용자 정보를 참고해서, GPS 유형의 미션을 1개 생성해줘.

- 나이: ${age}
- 성별: ${gender}
- 은둔 성향: ${level} (${levelDesc})
- 설문 점수: ${score}

미션 유형 설명:
GPS: 30분 이상 산책하기 등 GPS로 확인 가능한 미션

미션 예시(형식):
{
  "title": "공원에서 20분 산책하기",
  "description": "집 근처 공원에서 20분 이상 산책하고, 최소 1200m를 걸어보세요.",
  "type": "GPS",
  "minDuration": 20, // 최소 산책 시간(분)
  "minDistance": 1200 // 최소 거리(m)
}
반드시 minDuration(분), minDistance(m)를 포함해서 JSON으로 반환해줘.
`.trim();
  }
  if (type === 'BUTTON') {
    return `
너는 히키코모리 탈출을 돕는 상담가야.
아래 사용자 정보를 참고해서, BUTTON 유형의 미션을 1개 생성해줘.

- 나이: ${age}
- 성별: ${gender}
- 은둔 성향: ${level} (${levelDesc})
- 설문 점수: ${score}

미션 유형 설명:
BUTTON: 히키코모리를 탈출할 수 있는 좋은 글귀(5줄 이상)를 description에만 넣어줘. 
설명, 안내문 없이 오직 읽어야 할 글귀(문장들)만 description에 포함해줘.

미션 예시(형식):
{
  "title": "마음에 드는 좋은 글귀 읽기",
  "description": "‘새로운 시작은 언제나 가능하다.’ ‘작은 변화가 큰 차이를 만든다.’ ‘오늘 하루를 위한 긍정적인 생각을 가져보자.’ ‘한 걸음 한 걸음이 나를 더 나은 곳으로 이끈다.’ ‘모든 변화는 작은 시작에서 시작된다.’"
  "type": "BUTTON"
}
반드시 description에는 안내문 없이 읽어야 할 글귀(문장들)만 넣어줘.
`.trim();
  }

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
VOICE: 마이크로 특정 문장을 10번 읽는 미션, 특정 문장은 쉼표나 마침표 같은 문장부호가 있어도 반환은 문장부호 없이 반환해줘.
BUTTON: 히키코모리를 탈출할 수 있는 좋은 글귀를 읽는 미션 5줄이상이였으면 좋겠어.
DIARY: 일기를 작성하고 제출하는 미션

미션 예시(형식):
{
  "title": "카페에서 커피 한 잔 마시기",
  "description": "집 근처 카페에 방문해 커피를 마시고 영수증을 받아 인증해보세요.",
  "type": "${type}"
  단, type이 VOICE일 경우 title을 반복해야할 문장으로 반환해줘 12글자 이내였으면 좋겠어
}
  
`.trim();
}
