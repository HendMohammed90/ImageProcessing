import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("Testing the main endpoint", () => {
  it("Using the endpoint with a valid inputs returns 200", async () => {
    await request.get("/api/images?filename=fjord&width=200&height=200").expect(200);
  });

  it("Using the endpoint without providing the parameters Throw New Error", async () => {
    await request.get("/").expect(404);
  });

  it("Using the endpoint with a non-existent Image name  Throw New Error", async () => {
    await request.get("/?filename=anything&200&200").expect(404);
  });
});
