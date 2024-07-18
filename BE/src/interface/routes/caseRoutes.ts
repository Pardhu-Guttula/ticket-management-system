import { Router } from "express";
import { getCases, updateCaseStatus } from "../controllers/caseController";

const router = Router();

/**
 * @swagger
 * /api/cases:
 *   get:
 *     summary: Retrieve a list of cases
 *     description: Retrieve a list of cases from the database
 *     responses:
 *       200:
 *         description: A list of cases
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Case Name"
 */
router.get("/cases", getCases);

/**
 * @swagger
 * /api/cases/{id}/status:
 *   put:
 *     summary: Update the status of a case
 *     description: Update the status of a case by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The case ID
 *       - in: body
 *         name: status
 *         schema:
 *           type: string
 *           enum: [Pending, Accepted, Closed, Escalated]
 *         required: true
 *         description: The new status of the case
 *     responses:
 *       200:
 *         description: Case status updated successfully
 *       400:
 *         description: Invalid case ID or status
 *       500:
 *         description: Server error
 */
router.put("/cases/accept/:caseId", updateCaseStatus);

export default router;
