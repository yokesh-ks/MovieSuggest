import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Hero from "./components/Hero";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <View>
      <Header />
      <Hero />
      <Footer />
    </View>
  );
}
