//"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Product_1 = __importDefault(require("./Product"));
const product1_jpg_1 = __importDefault(require("../data/assets/product1.jpg"));
const product2_jpg_1 = __importDefault(require("../data/assets/product2.jpg"));
const product3_jpg_1 = __importDefault(require("../data/assets/product3.jpg"));
const product4_jpg_1 = __importDefault(require("../data/assets/product4.jpg"));
const product5_jpg_1 = __importDefault(require("../data/assets/product5.jpg"));
const product6_jpg_1 = __importDefault(require("../data/assets/product6.jpg"));
const product7_jpg_1 = __importDefault(require("../data/assets/product7.jpg"));
const product8_jpg_1 = __importDefault(require("../data/assets/product8.jpg"));
const product9_jpg_1 = __importDefault(require("../data/assets/product9.jpg"));
const product10_jpg_1 = __importDefault(require("../data/assets/product10.jpg"));
const ShoppingPage = () => {
    const products = [
        {
            id: 1,
            image: product1_jpg_1.default,
            title: "High-Performance Laptop",
            price: 1099.99,
            description: "Experience ultimate performance with this high-performance laptop. Perfect for gaming and demanding tasks.",
        },
        {
            id: 2,
            image: product2_jpg_1.default,
            title: "Smartphone with AI Camera",
            price: 799.99,
            description: "Capture stunning photos with the advanced AI camera system of this smartphone. Stay connected in style.",
        },
        {
            id: 3,
            image: product3_jpg_1.default,
            title: "Wireless Noise-Canceling Headphones",
            price: 249.99,
            description: "Immerse yourself in music with these wireless noise-canceling headphones. Enjoy superior sound quality.",
        },
        {
            id: 4,
            image: product4_jpg_1.default,
            title: "Ultra HD Smart TV",
            price: 1299.99,
            description: "Transform your living room with this Ultra HD smart TV. Enjoy stunning visuals and a seamless viewing experience.",
        },
        {
            id: 5,
            image: product5_jpg_1.default,
            title: "Fitness Tracker",
            price: 79.99,
            description: "Track your fitness goals with this advanced fitness tracker. Monitor your activities and stay motivated.",
        },
        {
            id: 6,
            image: product6_jpg_1.default,
            title: "Wireless Gaming Mouse",
            price: 59.99,
            description: "Enhance your gaming experience with this wireless gaming mouse. Enjoy precision and freedom of movement.",
        },
        {
            id: 7,
            image: product7_jpg_1.default,
            title: "Smart Home Security System",
            price: 399.99,
            description: "Keep your home safe and secure with this smart home security system. Monitor and control your home from anywhere.",
        },
        {
            id: 8,
            image: product8_jpg_1.default,
            title: "Bluetooth Portable Speaker",
            price: 129.99,
            description: "Take your music anywhere with this Bluetooth portable speaker. Enjoy powerful sound and long battery life.",
        },
        {
            id: 9,
            image: product9_jpg_1.default,
            title: "Digital Camera with Lens Kit",
            price: 899.99,
            description: "Capture professional-quality photos with this digital camera and lens kit. Perfect for photography enthusiasts.",
        },
        {
            id: 10,
            image: product10_jpg_1.default,
            title: "Gaming Console Bundle",
            price: 499.99,
            description: "Enter the world of gaming with this gaming console bundle. Enjoy a wide range of games and immersive gameplay.",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "app", children: products.map((product) => ((0, jsx_runtime_1.jsx)(Product_1.default, { product: product }, product.id))) }));
};
exports.default = ShoppingPage;
