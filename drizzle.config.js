/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  dbCredentials:{
    url:'postgresql://careerboostai_owner:UCXdrBvzH56w@ep-lively-band-a5d85a6q.us-east-2.aws.neon.tech/careerboostai?sslmode=require'
  }
};