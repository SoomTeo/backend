import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/shared/prisma/prisma.service';
import { SubmitSurveyDto } from './dto/submit.dto';
import { MissionService } from '@src/modules/mission/mission.service';

@Injectable()
export class SurveyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly missionService: MissionService
  ) {}

  async getQuestions() {
    const questions = await this.prisma.surveyQuestion.findMany({
      orderBy: { order: 'asc' },
    });
    return questions.map(question => ({
      questionId: question.id,
      order: question.order,
      content: question.content,
    }));
  }

  async saveProfile(userId: number, age: number, gender: string) {
    // age, gender가 UserUpdateInput에 없다는 에러가 발생하면 prisma generate를 먼저 실행하세요.
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { age, gender },
    });
    return {
      message: '프로필 저장 성공',
      userId: user.id,
      age: user.age,
      gender: user.gender,
    };
  }

  async submitAnswers(userId: number, dto: SubmitSurveyDto) {
    // 답변 저장
    for (const ans of dto.answers) {
      await this.prisma.surveyAnswer.upsert({
        where: { userId_questionId: { userId, questionId: ans.questionId } },
        update: { score: ans.score },
        create: { userId, questionId: ans.questionId, score: ans.score },
      });
    }
    // 총점 계산
    const total = dto.answers.reduce((sum, a) => sum + a.score, 0);
    let level = 'low';
    if (total >= 59) level = 'high';
    else if (total >= 38) level = 'mid';
    // 결과 저장
    await this.prisma.surveyResult.upsert({
      where: { userId },
      update: { totalScore: total, level },
      create: { userId, totalScore: total, level },
    });
    // 미션 자동 생성
    await this.missionService.ensureUserHasMissions(userId);
    return { total, level };
  }
}
