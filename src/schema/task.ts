import { NextFunction, Request, Response } from "express";

export const taskSchema = {
  desc: {
    type: "Desc must be a string type",
    field: "not allowed",
    required: "Desc is required",
  },
};

function validate(schema: any) {
  const validation = (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { body } = request;
    const errors: string[] = [];

    Object.keys(schema).forEach((item) => {
      const itemSchema = schema[item];

      if (itemSchema.required && !body[item]) {
        errors.push(itemSchema.required);
      }

      if (typeof body[item] !== "string") {
        errors.push(itemSchema.type);
      }

      Object.keys(body).forEach((key) => {
        if (key !== "desc") {
          errors.push(`Field ${key} ${itemSchema.field}`);
        }
      });
    });

    if (errors.length > 0) return response.status(400).json(errors);
    return next();
  };

  return validation;
}

export { validate };
