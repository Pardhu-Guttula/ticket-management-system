import { Router } from "express";
import { getCases } from "../controllers/caseController";

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
router.get("/cases/", getCases);

// /**
//  * @swagger
//  * /api/cases/accepted:
//  *   get:
//  *     summary: Retrieve a list of accepted cases
//  *     description: Retrieve a list of accepted cases from the database
//  *     responses:
//  *       200:
//  *         description: A list of accepted cases
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   id:
//  *                     type: integer
//  *                     example: 1
//  *                   name:
//  *                     type: string
//  *                     example: "Accepted Case Name"
//  */
// router.get("/cases/accepted", getAcceptedCases);

export default router;
