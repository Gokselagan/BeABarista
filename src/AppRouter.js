import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { FruitToCup } from "./pages/fruitToCup";
import { HistoryOfCoffee } from "./pages/historyOfCoffee";
import { BenefitsOfCoffee } from "./pages/benefitsOfCoffee";
import { TypesOfCoffee } from "./pages/typesOfCoffee";
import { TestYourself } from "./pages/testPage";

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