"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const videoBG_mp4_1 = __importDefault(require("../data/assets/videoBG.mp4"));
require("../style/Main.css");
const Main = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "main", children: (0, jsx_runtime_1.jsx)("video", { src: videoBG_mp4_1.default, autoPlay: true, loop: true, muted: true }) }));
};
exports.default = Main;
