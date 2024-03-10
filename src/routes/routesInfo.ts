export const routesInfo = [
  {
    rota: "/api/tasks/todo",
    método: "GET",
    descrição: "Returns a task list to do.",
  },
  {
    rota: "/api/tasks/done",
    método: "GET",
    descrição: "Returns a list of completed tasks.",
  },
  {
    rota: "/api/tasks/new",
    método: "POST",
    descrição: "Creates a new task.",
  },
  {
    rota: "/api/tasks/:id",
    método: "PATCH",
    descrição: "Edit a specific task.",
  },
  {
    rota: "/api/tasks/:id",
    método: "DELETE",
    descrição: "Remove a specific task.",
  },
];
