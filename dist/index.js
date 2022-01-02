"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.get('/', (_req, res) => {
    res.send('Hello World!!!');
});
app.listen(config_1.port, () => {
    console.log(`Example app listening at http://localhost:${config_1.port}`);
});
//# sourceMappingURL=index.js.map