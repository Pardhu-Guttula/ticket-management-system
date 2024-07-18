import MysqlDbConnection from "../database/mysqlDbConnection";
import { CaseTypes } from "../../domain/common/applicationEnums";

const db = new MysqlDbConnection();

export class CaseRepository {
  async getCasesByType(caseType: CaseTypes): Promise<any[]> {
    try {
      const query = `SELECT * FROM factCase WHERE caseStatus = ?`;
      const rows = await db.query(query, [caseType]);
      return rows;
    } catch (error) {
      console.error("Error in getCasesByType:", error);
      throw error;
    }
  }

  async updateCaseStatusById(caseId: string, newStatus: string): Promise<void> {
    try {
      const query = `UPDATE factCase SET caseStatus = ? WHERE caseId = ?`;
      await db.query(query, [newStatus, caseId]);
    } catch (error) {
      console.error("Error updating case status in repository:", error);
      throw error;
    }
  }
}
