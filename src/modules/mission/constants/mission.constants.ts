export enum MissionType {
  RECEIPT = 'RECEIPT',
  GPS = 'GPS',
  VOICE = 'VOICE',
  BUTTON = 'BUTTON',
  DIARY = 'DIARY',
}

export const MISSION_POINTS = {
  [MissionType.RECEIPT]: 40,
  [MissionType.GPS]: 50,
  [MissionType.VOICE]: 30,
  [MissionType.BUTTON]: 10,
  [MissionType.DIARY]: 20,
} as const;

export const INITIAL_TARGET_POINTS = {
  LOW: 100, // 낮음
  MEDIUM: 70, // 중간
  HIGH: 50, // 높음
} as const;

export const POINTS_INCREMENT = 10; // 목표 점수 증가량
