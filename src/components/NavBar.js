"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../style/Navbar.css"); // Import CSS file for styling
const Navbar = () => {
    return ((0, jsx_runtime_1.jsxs)("nav", { className: 'navbar', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'nav-items', children: [(0, jsx_runtime_1.jsx)("a", { className: ' nav-item', href: "/", children: "\uD83C\uDFE0" }), (0, jsx_runtime_1.jsx)("a", { className: 'nav-item', href: "/", children: "\uD83D\uDCAC" }), (0, jsx_runtime_1.jsx)("a", { className: 'nav-item', href: "/", children: "\uD83D\uDED2 " }), (0, jsx_runtime_1.jsx)("a", { className: 'nav-item', href: "/", children: "\u2699\uFE0F" })] }), (0, jsx_runtime_1.jsx)("div", { className: 'user-profile' })] }));
};
exports.default = Navbar;
