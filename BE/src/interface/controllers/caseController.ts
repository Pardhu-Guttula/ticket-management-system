import { Request, Response } from "express";
import { CaseRepository } from "../../infrastructure/repositories/caseRepository";
import { CaseTypes } from "../../domain/common/applicationEnums";
import { GetCasesQuery } from "../../application/queries/getCasesQuery";

const caseRepository = new CaseRepository();
const getCasesQuery = new GetCasesQuery(caseRepository);

export const getCases = async (req: Request, res: Response) => {
  try {
    const caseTypeParam = req.query.caseType as keyof typeof CaseTypes;
    if (!(caseTypeParam in CaseTypes)) {
      return res.status(400).json({ error: "Invalid caseType" });
    }

    const caseType = CaseTypes[caseTypeParam];
    const cases = await getCasesQuery.execute(caseType);
    res.json(cases);
  } catch (error) {
    console.error("Error retrieving cases:", error);
    res.status(500).send("Server error");
  }
};

export const updateCaseStatus = async (req: Request, res: Response) => {
  const { caseId } = req.params;

  try {
    await caseRepository.updateCaseStatusById(caseId, "Accepted");
    res.json({ message: "Case status updated successfully" });
  } catch (error) {
    console.error("Error updating case status:", error);
    res.status(500).json({ error: "Failed to update case status" });
  }
};
