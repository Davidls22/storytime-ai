import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        res.status(402).json({ errors: errors.array() });
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required."),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("password must be at least 6 characters."),
];
export const signUpValidator = [
    body("name").notEmpty().withMessage("Name is required."),
    ...loginValidator,
];
export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("message is required."),
    ...loginValidator,
];
//# sourceMappingURL=validators.js.map