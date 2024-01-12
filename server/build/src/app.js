"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = config_1.default.get('port');
app.listen(port, () => {
    console.log(`App running at Port: ${port}`);
    (0, routes_1.default)(app);
});
