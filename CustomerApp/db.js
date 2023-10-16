import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "pingpong",
  password: "QnDcsFvSNB2s8K",
  port: 3306,
  database: "dev",
});
