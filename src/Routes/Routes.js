import { Router } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Products from "../Pages/Products";

const router = new Router();
router.addRoute("/", () => <Home />);
router.addRoute("/about", () => <About />);
router.addRoute("/products", () => <Products />);
router.addRoute("/contact", () => <Contact />);
router.addRoute("/home", () => <Home />);
export default router;