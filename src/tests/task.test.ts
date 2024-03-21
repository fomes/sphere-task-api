import { app } from "../app";
import request from "supertest";

describe("Rota GET /api/tasks/", () => {
  let response: any;

  beforeEach(async () => {
    response = await request(app).get("/api/tasks/todo");
  });

  it("Deve retornar uma lista de tarefas para fazer", async () => {
    expect(response.status).toEqual(200);
    expect.arrayContaining(response.body);
  });

  it("Deve conter as chaves de uma tarefa", async () => {
    expect(response.body[0]).toHaveProperty("_id");
    expect(response.body[0]).toHaveProperty("desc");
    expect(response.body[0]).toHaveProperty("done");
  });

  it("A chave 'desc' deve ser do tipo string", async () => {
    expect.stringContaining(response.body[0].desc);
  });
});

describe("Rota POST /api/tasks/new", () => {
  it("Deve criar uma nova tarefa", async () => {
    await request(app)
      .post("/api/tasks/new")
      .send({ desc: "Nova tarefa" })
      .set("Accept", "application/json")
      .expect(201);
  });
});

describe("Rota PATCH /api/tasks/:id", () => {
  it("Deve editar uma tarefa", async () => {
    const resp = await request(app).get("/api/tasks/todo");
    const id = await resp?.body[0]?._id;

    await request(app)
      .patch(`/api/tasks/${id}`)
      .send({ desc: "Nova tarefa", done: true })
      .set("Accept", "application/json")
      .expect(200);
  });
});

describe("Rota DELETE /api/tasks/:id", () => {
  it("Deve excluir uma tarefa", async () => {
    const resp = await request(app).get("/api/tasks/todo");
    const id = await resp?.body[0]?._id;

    await request(app)
      .delete(`/api/tasks/${id}`)
      .set("Accept", "application/json")
      .expect(204);
  });
});
