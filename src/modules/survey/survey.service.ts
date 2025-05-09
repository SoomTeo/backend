import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/shared/prisma/prisma.service';
import { SubmitSurveyDto } from './dto/submit.dto';

@Injectable()
export class SurveyService {
  constructor(private readonly prisma: PrismaService) {}

  async getQuestions() {
    return this.prisma.surveyQuestion.findMany({ orderBy: { order: 'asc' } });
  }

  async saveProfile(userId: number, age: number, gender: string) {
    return this.prisma.survey.update({
      where: { userId },
      data: { age, gender },
    });
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
    return { total, level };
  }
}
