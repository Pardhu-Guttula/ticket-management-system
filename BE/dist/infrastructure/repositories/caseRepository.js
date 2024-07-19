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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseRepository = void 0;
const mysqlDbConnection_1 = __importDefault(require("../database/mysqlDbConnection"));
const db = new mysqlDbConnection_1.default();
class CaseRepository {
    getCasesByType(caseType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `SELECT * FROM factCase WHERE caseStatus = ?`;
                const rows = yield db.query(query, [caseType]);
                return rows;
            }
            catch (error) {
                console.error("Error in getCasesByType:", error);
                throw error;
            }
        });
    }
    updateCaseStatusById(caseId, newStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `UPDATE factCase SET caseStatus = ? WHERE caseId = ?`;
                yield db.query(query, [newStatus, caseId]);
            }
            catch (error) {
                console.error("Error updating case status in repository:", error);
                throw error;
            }
        });
    }
}
exports.CaseRepository = CaseRepository;
