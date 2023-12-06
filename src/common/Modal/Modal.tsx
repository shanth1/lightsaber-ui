import React from "react";

function Modal() {
    const mediaQuery = window.matchMedia(
        "(min-width: 768px) and (orientation: landscape)"
    );

    const handleMediaChange = (event: MediaQueryListEvent | MediaQueryList) => {
        if (event.matches) {
        } else {
        }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    handleMediaChange(mediaQuery);
    return <div>ModalCenter</div>;
}

export default Modal;
