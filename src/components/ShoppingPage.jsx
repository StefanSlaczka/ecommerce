import React from "react";
import Product from "./Product";
import "../data/assets/product1.png"

const ShoppingPage = () => {

  const products = [
    {
      id: 1,
      image: "product1.png",
      title: "High-Performance Laptop",
      price: 1099.99,
      description: "Experience ultimate performance with this high-performance laptop. Perfect for gaming and demanding tasks.",
    },
    {
      id: 2,
      image: "product2.jpg",
      title: "Smartphone with AI Camera",
      price: 799.99,
      description: "Capture stunning photos with the advanced AI camera system of this smartphone. Stay connected in style.",
    },
    {
      id: 3,
      image: "product3.jpg",
      title: "Wireless Noise-Canceling Headphones",
      price: 249.99,
      description: "Immerse yourself in music with these wireless noise-canceling headphones. Enjoy superior sound quality.",
    },
    {
      id: 4,
      image: "product4.jpg",
      title: "Ultra HD Smart TV",
      price: 1299.99,
      description: "Transform your living room with this Ultra HD smart TV. Enjoy stunning visuals and a seamless viewing experience.",
    },
    {
      id: 5,
      image: "product5.jpg",
      title: "Fitness Tracker",
      price: 79.99,
      description: "Track your fitness goals with this advanced fitness tracker. Monitor your activities and stay motivated.",
    },
    {
      id: 6,
      image: "product6.jpg",
      title: "Wireless Gaming Mouse",
      price: 59.99,
      description: "Enhance your gaming experience with this wireless gaming mouse. Enjoy precision and freedom of movement.",
    },
    {
      id: 7,
      image: "product7.jpg",
      title: "Smart Home Security System",
      price: 399.99,
      description: "Keep your home safe and secure with this smart home security system. Monitor and control your home from anywhere.",
    },
    {
      id: 8,
      image: "product8.jpg",
      title: "Bluetooth Portable Speaker",
      price: 129.99,
      description: "Take your music anywhere with this Bluetooth portable speaker. Enjoy powerful sound and long battery life.",
    },
    {
      id: 9,
      image: "product9.jpg",
      title: "Digital Camera with Lens Kit",
      price: 899.99,
      description: "Capture professional-quality photos with this digital camera and lens kit. Perfect for photography enthusiasts.",
    },
    {
      id: 10,
      image: "product10.jpg",
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
