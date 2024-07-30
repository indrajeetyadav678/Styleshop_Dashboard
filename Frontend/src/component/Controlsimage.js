import React from "react";
import {
    TransformWrapper,
    TransformComponent,
} from "react-zoom-pan-pinch";
import Controlsimagesize from "./Controlsimagesize";

const Controlsimage = (props) => {
    return (
        <>
            <TransformWrapper
                initialScale={1}
                initialPositionX={200}
                initialPositionY={100}
            >

                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <>
                        <Controlsimagesize />
                        <TransformComponent>
                            <div id="detail_show_image">
                                <img src={props.imageopen} alt="" />
                            </div>
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper >
        </>
    )

}
export default Controlsimage;