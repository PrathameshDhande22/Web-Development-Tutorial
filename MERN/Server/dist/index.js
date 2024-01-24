"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const db_1 = __importDefault(require("./Utils/db"));
const auth_route_1 = __importDefault(require("./Routers/auth-route"));
const error_middleware_1 = __importDefault(require("./Middleware/error-middleware"));
const contact_route_1 = __importDefault(require("./Routers/contact-route"));
const cors_1 = __importDefault(require("cors"));
const services_route_1 = __importDefault(require("./Routers/services-route"));
const admin_route_1 = __importDefault(require("./Routers/admin-route"));
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: ["http://localhost:4173", String(process.env.URL)], methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use(express_1.default.json());
app.use("/api/auth", auth_route_1.default);
app.use("/api", contact_route_1.default);
app.use("/api", services_route_1.default);
app.use("/api/admin", admin_route_1.default);
app.get("/", (req, res) => {
    return res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "The API is Working" });
});
app.use(error_middleware_1.default);
const PORT = String(process.env.PORT);
(0, db_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Listen on ${PORT} click on http://localhost:${PORT}`);
    });
});
