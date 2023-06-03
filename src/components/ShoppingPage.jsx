import React from "react";
import Product from "./Product";
import P1 from "../data/assets/product1.jpg"
import P2 from "../data/assets/product2.jpg"
import P3 from "../data/assets/product3.jpg"
import P4 from "../data/assets/product4.jpg"
import P5 from "../data/assets/product5.jpg"
import P6 from "../data/assets/product6.jpg"
import P7 from "../data/assets/product7.jpg"
import P8 from "../data/assets/product8.jpg"
import P9 from "../data/assets/product9.jpg"
import P10 from "../data/assets/product10.jpg"


const ShoppingPage = () => {

  const products = [
    {
      id: 1,
      image: P1,
      title: "High-Performance Laptop",
      price: 1099.99,
      description: "Experience ultimate performance with this high-performance laptop. Perfect for gaming and demanding tasks.",
    },
    {
      id: 2,
      image: P2,
      title: "Smartphone with AI Camera",
      price: 799.99,
      description: "Capture stunning photos with the advanced AI camera system of this smartphone. Stay connected in style.",
    },
    {
      id: 3,
      image: P3,
      title: "Wireless Noise-Canceling Headphones",
      price: 249.99,
      description: "Immerse yourself in music with these wireless noise-canceling headphones. Enjoy superior sound quality.",
    },
    {
      id: 4,
      image: P4,
      title: "Ultra HD Smart TV",
      price: 1299.99,
      description: "Transform your living room with this Ultra HD smart TV. Enjoy stunning visuals and a seamless viewing experience.",
    },
    {
      id: 5,
      image: P5,
      title: "Fitness Tracker",
      price: 79.99,
      description: "Track your fitness goals with this advanced fitness tracker. Monitor your activities and stay motivated.",
    },
    {
      id: 6,
      image: P6,
      title: "Wireless Gaming Mouse",
      price: 59.99,
      description: "Enhance your gaming experience with this wireless gaming mouse. Enjoy precision and freedom of movement.",
    },
    {
      id: 7,
      image: P7,
      title: "Smart Home Security System",
      price: 399.99,
      description: "Keep your home safe and secure with this smart home security system. Monitor and control your home from anywhere.",
    },
    {
      id: 8,
      image: P8,
      title: "Bluetooth Portable Speaker",
      price: 129.99,
      description: "Take your music anywhere with this Bluetooth portable speaker. Enjoy powerful sound and long battery life.",
    },
    {
      id: 9,
      image: P9,
      title: "Digital Camera with Lens Kit",
      price: 899.99,
      description: "Capture professional-quality photos with this digital camera and lens kit. Perfect for photography enthusiasts.",
    },
    {
      id: 10,
      image: P10,
      title: "Gaming Console Bundle",
      price: 499.99,
      description: "Enter the world of gaming with this gaming console bundle. Enjoy a wide range of games and immersive gameplay.",
    },
  ];

  return (
    <div className="app">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ShoppingPage;
