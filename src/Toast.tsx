import React from "react";

type ToastPosition = {
    xPosition: "left" | "right",
    yPosition: "up" | "down",
}

type ToastProps = {
    message: string,
    position: ToastPosition,

}

const Toast: React.FC<ToastProps> = ({message, position}) => {

    const getPositionOfToast = () => {
        if (position.xPosition === "left") {

        }
    }

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default Toast;