"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../style/Product.css");
// later on add a useEffect to make sure the button is being pressed one's
const Product = (props) => {
    const { image, title, price, discripstion } = props.product;
    const [number, setNumber] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'product', children: [(0, jsx_runtime_1.jsx)("img", { src: image, alt: title, className: 'product-image' }), (0, jsx_runtime_1.jsx)("h3", { className: 'product-title', children: title }), (0, jsx_runtime_1.jsx)("p", { className: 'product-price', children: price }), (0, jsx_runtime_1.jsx)("p", { className: 'product-discription', children: discripstion }), (0, jsx_runtime_1.jsxs)("div", { className: 'buying-form', children: [(0, jsx_runtime_1.jsx)("button", { className: 'decrease-button', onClick: () => {
                            if (number > 0) {
                                setNumber(number - 1);
                            }
                        }, children: "-" }), (0, jsx_runtime_1.jsxs)("h2", { className: 'total', children: ["Total: ", number] }), (0, jsx_runtime_1.jsx)("button", { className: 'increase-button', onClick: () => setNumber(number + 1), children: "+" }), (0, jsx_runtime_1.jsx)("button", { className: 'buy-something-else', onClick: () => setNumber(0), children: "Buy something else" })] })] }));
};
exports.default = Product;
