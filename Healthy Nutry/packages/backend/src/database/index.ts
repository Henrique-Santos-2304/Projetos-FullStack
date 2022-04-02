import { createConnection } from "typeorm";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";
import { Meals } from "./entities/Meals";
import { Users } from "./entities/User";

const optionsConnectionTest: SqliteConnectionOptions = {
  type: "sqlite",
  database: "./src/__tests__/database.test.sqlite",
  entities: [Users, Meals],
  migrations: ["src/database/migrations/*.ts"],
  // cli: {
  //   entitiesDir: "src/database/entities",
  //   migrationsDir: "src/database/migrations",
  // },
};

export default async () => {
  if (process.env.NODE_ENV === "test") {
    return await createConnection(optionsConnectionTest);
  } else {
    return await createConnection();
  }
};
