import {
    useControls
} from "react-zoom-pan-pinch";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";


const Controlsimagesize=()=>{
    const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}><FaPlus /></button><br/><br/>
      <button onClick={() => zoomOut()}><FaMinus /></button><br/><br/>
      <button onClick={() => resetTransform()}><GrPowerReset /></button><br/><br/>
    </div>
  );
}
export default Controlsimagesize;