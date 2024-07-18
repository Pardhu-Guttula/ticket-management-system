import { Request, Response } from "express";
import { db } from "../../infrastructure/database/mysqlDbConnection";
import { CaseTypes } from "../../domain/common/enums"; // Import your enums file

export const getCases = async (req: Request, res: Response) => {
  try {
    const caseTypeParam = req.query.caseType as keyof typeof CaseTypes; // Assuming caseType is passed in query parameters
    if (!(caseTypeParam in CaseTypes)) {
      return res.status(400).json({ error: "Invalid caseType" });
    }

    const caseType = CaseTypes[caseTypeParam];

    const [rows] = await db.query(
      `SELECT * FROM factCase WHERE caseStatus = "${caseType}"`
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
