import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./component/Nav";
import EventCard from "./component/EventCard";
import Footer from "./component/Footer";

import { ChakraProvider, chakra } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <App />
    <Nav />
    <EventCard />
    <Footer />
  </ChakraProvider>
);
