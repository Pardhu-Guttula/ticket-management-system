"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCaseStatus = exports.getCases = void 0;
const caseRepository_1 = require("../../infrastructure/repositories/caseRepository");
const applicationEnums_1 = require("../../domain/common/applicationEnums");
const getCasesQuery_1 = require("../../application/queries/getCasesQuery");
const caseRepository = new caseRepository_1.CaseRepository();
const getCasesQuery = new getCasesQuery_1.GetCasesQuery(caseRepository);
const getCases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const caseTypeParam = req.query.caseType;
        if (!(caseTypeParam in applicationEnums_1.CaseTypes)) {
            return res.status(400).json({ error: "Invalid caseType" });
        }
        const caseType = applicationEnums_1.CaseTypes[caseTypeParam];
        const cases = yield getCasesQuery.execute(caseType);
        res.json(cases);
    }
    catch (error) {
        console.error("Error retrieving cases:", error);
        res.status(500).send("Server error");
    }
});
exports.getCases = getCases;
const updateCaseStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { caseId } = req.params;
    try {
        yield caseRepository.updateCaseStatusById(caseId, "Accepted");
        res.json({ message: "Case status updated successfully" });
    }
    catch (error) {
        console.error("Error updating case status:", error);
        res.status(500).json({ error: "Failed to update case status" });
    }
});
exports.updateCaseStatus = updateCaseStatus;
