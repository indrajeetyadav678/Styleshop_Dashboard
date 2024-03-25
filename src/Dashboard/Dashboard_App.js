import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash_Layout from "./Dash_Layout";
import Dashboard from "./Dash_Component/Dashboard";
import "./dashboard.css";
import Home from "../component/Home";


const Dashboard_App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dash_Layout />}>
                        <Route index element={<Dashboard />} />

                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="dmen" element={<Dashboard />} />
                        <Route path="Dwomen" element={<Dashboard />} />
                        <Route path="Dkids" element={<Dashboard />} />
                        <Route path="dbaby" element={<Dashboard />} />
                        <Route path="Toys" element={<Dashboard />} />
                        <Route path="Analysis" element={<Dashboard />} />
                        <Route path="Setting" element={<Dashboard />} />

                        <Route path="notify" element={<Dashboard />} />
                        <Route path="email" element={<Dashboard />} />
                        <Route path="Account" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default Dashboard_App;