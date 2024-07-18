import { CaseRepository } from "../../infrastructure/repositories/caseRepository";
import { CaseTypes } from "../../domain/common/applicationEnums";

export class GetCasesQuery {
  private caseRepository: CaseRepository;

  constructor(caseRepository: CaseRepository) {
    this.caseRepository = caseRepository;
  }

  async execute(caseType: CaseTypes): Promise<any[]> {
    try {
      const cases = await this.caseRepository.getCasesByType(caseType);
      //   console.log("Query results in execute:", cases); // Logging query results in execute method
      return cases;
    } catch (error) {
      console.error("Error in GetCasesQuery execute:", error);
      throw error;
    }
  }
}
