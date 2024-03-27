import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineModeNight } from "react-icons/md";
var profshow=0;
var Lsnav = 0;
const Dash_Layout = () => {

    const leftside_navbarhide_show=()=>{
        if(Lsnav===0){
            document.getElementById('Dnavbar_left_wrapper').style.display="none";
            document.getElementById('dashboard_body').style.paddingLeft="0px";
            Lsnav=1;
        }
        else if(Lsnav===1)
        {
            document.getElementById('Dnavbar_left_wrapper').style.display="block";
            document.getElementById('dashboard_body').style.paddingLeft="200px";
            Lsnav=0;
        }
    }
    const activelightmode=()=>{
        document.getElementsByClassName('modebody').style.backgroundcolor="none"
    }
    const activedarkmode=()=>{
        // document.getElementsByClassName('modebody').style.backgroundcolor="dark"
        if (document.body) {
            // Set the background color property of the body element
            document.body.style.backgroundColor = 'white';
        } else {
            console.error('Document body is undefined.');
        }
    }
    const shownotice_box=()=>{
        document.getElementById('dnotice_box_wrapper').style.display="block";
        
    }
    const showemail_box=()=>{
        document.getElementById('demail_Box_wrapper').style.display="block";

    }
    const hidenotice_box=()=>{
        document.getElementById('dnotice_box_wrapper').style.display="none";
        
    }
    const hideemail_box=()=>{
        document.getElementById('demail_Box_wrapper').style.display="none";
        
    }
const ad_profile=()=>{
    if(profshow===0){
        document.getElementById('dlogin_profile_wrapper').style.display="block";
        profshow=1;
    }
    else if(profshow===1){
        document.getElementById('dlogin_profile_wrapper').style.display="none";
        profshow=0;
    }
}
const hide_email_notice_box=()=>{
    let track = window.event.clientX;
    console.log(track)
    if (track < -10) {
        document.getElementById('demail_Box_wrapper').style.display = "none";
        document.getElementById('dnotice_box_wrapper').style.display = "none";
    }
    else if (track > 55) {
        document.getElementById('demail_Box_wrapper').style.display = "none";
        document.getElementById('dnotice_box_wrapper').style.display = "none";
    }
}

    return (
        <div id="modebody">
        <div className="adbody">
            <aside id="Dnavbar_left_wrapper">
                <ul id="Dnavbar_left_box">
                    <li id="Dshopname">Styleshop</li>
                    <li> <Link to="dashboard" className="Dbtn1">Dashboard</Link></li>
                    <li> <Link to="dmen" className="Dbtn1">Men wear</Link></li>
                    <li> <Link to="Dwomen" className="Dbtn1">Women wear</Link></li>
                    <li> <Link to="Dkids" className="Dbtn1">Kids wear</Link></li>
                    <li> <Link to="dbaby" className="Dbtn1">Babies wear</Link></li>
                    <li> <Link to="Toys" className="Dbtn1">Toys</Link></li>
                    <li> <Link to="Analysis" className="Dbtn1">Analysis</Link></li>
                    <li> <Link to="Setting" className="Dbtn1">Setting</Link></li>
                </ul>
            </aside>
            <div id="dashboard_body">
                <div id="Dnavbar_top_box" >
                    <div to="dshowmanu" className="Dbtn2" onClick={leftside_navbarhide_show}><FaBars /></div>
                    <div id="Dshopname1">Styleshop</div>
                    <div id="dtop_nabvar_right" onMouseLeave={hide_email_notice_box}>
                        <div id="Light_modes">
                            <div onClick={activelightmode}><MdOutlineLightMode /></div>
                            <div onClick={activedarkmode}><MdOutlineModeNight /></div>
                        </div>
                        <Link to="notify" className="Dbtn2">
                            <div id="dnotify_icon_no"></div>
                            <div id="dnotify_icon" onMouseEnter={shownotice_box}><IoNotifications /></div>
                        </Link>
                        <Link to="email" className="Dbtn2">
                            <div id="demail_icon_no"></div>
                            <div id="demail_icon" onMouseEnter={showemail_box} ><MdEmail /></div>
                        </Link>
                        <Link to="Account" className="Dbtn2">
                            <div id="admin_profile" onClick={ad_profile}>
                                <img src="" alt="" />
                            </div>
                        </Link>
                        <div id="dlogin_profile_wrapper"></div>
                        <div id="demail_Box_wrapper" onMouseLeave={hideemail_box}></div>
                        <div id="dnotice_box_wrapper" onMouseLeave={hidenotice_box}></div>
                    </div>
                </div>
                <Outlet />
                <div className="developer">&#169; Developed by Indrajeet Yaduwanshi</div>
            </div>
            </div>
        </div>
    );
}
export default Dash_Layout;