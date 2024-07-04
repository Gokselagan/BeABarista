import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { FruitToCup } from "./pages/page1";
import { HistoryOfCoffee } from "./pages/page2";
import { BenefitsOfCoffee } from "./pages/page3";
import { TypesOfCoffee } from "./pages/page4";
import { TestYourself } from "./pages/page5";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page1" element={<FruitToCup />} />
            <Route path="/page2" element={<HistoryOfCoffee />} />
            <Route path="/page3" element={<BenefitsOfCoffee />} />
            <Route path="/page4" element={<TypesOfCoffee />} />
            <Route path="/page5" element={<TestYourself />} />

        </Routes>
    )
}