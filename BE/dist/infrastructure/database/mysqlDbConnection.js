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
exports.MysqlDbConnection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class MysqlDbConnection {
    constructor() {
        console.log("Initializing MySQL Connection Pool");
        this.pool = promise_1.default.createPool({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }
    query(sql, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Executing query:", sql, params);
                const [results] = yield this.pool.query(sql, params);
                return results; // console.log("Query results:", results); // Add this line for debugging
                // return results;
            }
            catch (error) {
                console.error("Error executing query:", error);
                throw error;
            }
        });
    }
}
exports.MysqlDbConnection = MysqlDbConnection;
exports.default = MysqlDbConnection;
