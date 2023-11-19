import React from "react";
import { Html } from "@react-three/drei";
import loading from "../assets/images/turtle-run.gif";
const Loader = () => {
    return (
        <Html>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                }}
            >
                <img
                    src={"https://art.pixilart.com/4d10d7022b94368.gif"}
                    alt="loading"
                    height="auto"
                    width="200%"
                />
                Loading..
            </div>
        </Html>
    );
};

export default Loader;
