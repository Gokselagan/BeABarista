import { Routes, Route } from "react-router-dom";
import { Pages } from "./pages/pages";
import { FruitToCup } from "./pages/fruitToCup";
import { HistoryOfCoffee } from "./pages/historyOfCoffee";
import { BenefitsOfCoffee } from "./pages/benefitsOfCoffee";
import { TypesOfCoffee } from "./pages/typesOfCoffee";
import { TestYourself } from "./pages/testPage";
import { Homepage } from "./pages/homepage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="pages/fruittocup" element={<FruitToCup />} />
            <Route path="pages/historyofcoffee" element={<HistoryOfCoffee />} />
            <Route path="pages/benefitsofcoffee" element={<BenefitsOfCoffee />} />
            <Route path="pages/typesofcoffee" element={<TypesOfCoffee />} />
            <Route path="pages/test" element={<TestYourself />} />

        </Routes>
    )
}