import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash_Layout from "./Dash_Layout";
import Dashboard from "./Dash_Component/Dashboard";
import "./dashboard.css";
import Home from "../component/Home";
import Dmenwear from "./Dash_Component/Dmenwear";
import Dwomenwear from "./Dash_Component/Dwomenwear";
import Dkidswear from "./Dash_Component/Dkidswear";
import Dbabywear from "./Dash_Component/Dbabywear"
import Dsetting from "./Dash_Component/Dsetting";
import Dtoys from "./Dash_Component/Dtoys";
import Analysis from "./Dash_Component/Analysis";
import Notificationd from "./Dash_Component/Notificationd";
import Emaild from "./Dash_Component/Emaild";
import Profiled from "./Dash_Component/Profiled";


const Dashboard_App = () => {
    return (
        <div id="modebody">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dash_Layout />}>
                        <Route index element={<Dashboard />} />

                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="dmen" element={<Dmenwear />} />
                        <Route path="Dwomen" element={<Dwomenwear />} />
                        <Route path="Dkids" element={<Dkidswear />} />
                        <Route path="dbaby" element={<Dbabywear />} />
                        <Route path="Toys" element={<Dtoys/>} />
                        <Route path="Analysis" element={<Analysis />} />
                        <Route path="Setting" element={<Dsetting />} />

                        <Route path="notify" element={<Notificationd />} />
                        <Route path="email" element={<Emaild />} />
                        <Route path="Account" element={<Profiled />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default Dashboard_App;