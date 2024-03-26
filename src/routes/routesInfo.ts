export const routesInfo = [
  {
    rota: "/api/tasks/todo",
    método: "GET",
    descrição: "Retorna uma lista de tarefas para fazer.",
  },
  {
    rota: "/api/tasks/done",
    método: "GET",
    descrição: "Retorna uma lista de tarefas concluídas.",
  },
  {
    rota: "/api/tasks/new",
    método: "POST",
    descrição: "Cria uma nova tarefa.",
  },
  {
    rota: "/api/tasks/:id",
    método: "PATCH",
    descrição: "Edita uma tarefa específica.",
  },
  {
    rota: "/api/tasks/:id",
    método: "DELETE",
    descrição: "Remove uma tarefa específica.",
  },
];
