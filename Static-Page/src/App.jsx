import { createRoot } from "react-dom/client";
import "./App.css"
import Nav from "./Nav"
import Main from "./main";
const root = createRoot(document.getElementById("root"))



root.render(
    <>
   <Nav />
   <Main />
   </>
)