import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./component/Nav";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Action from "./component/Action";
import Article from "./component/Article";

import { ChakraProvider, Heading } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <App />
    <Nav />
    <Header />
    <Heading
      bg="#edf3f8"
      pos={"relative"}
      fontSize={"5xl"}
      pt={"0.8em"}
      fontFamily={"Kaushan Script"}
      textAlign={"center"}
      _dark={{ bg: "#1E2A27" }}>
      Saudi Sesons
    </Heading>
    <Article />
    <Features />
    <Action />
    <Footer />
  </ChakraProvider>
);
