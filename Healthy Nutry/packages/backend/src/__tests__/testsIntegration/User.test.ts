import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../../app";
import createConnection from "../../database";

const mockUser = {
  name: "Henrique",
  username: "test2",
  email: "test2@email.com",
  password: "123456789",
};

describe("User", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();

    await connection.close();
  });

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/user").send(mockUser);

    expect(response.status).toBe(201);
  });
});
