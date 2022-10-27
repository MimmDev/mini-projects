import "./swipeText.css";

export const SwipeText = () => {
    return (
        <>
            <div className="swipe-target slide-away">
                <div className="overlay"></div>
                {/* <div className="swipe"></div> */}
                <div className="overlay finalOverlay"></div>
                <h1 className="swipe-text">Hello There.</h1>
            </div>
        </>
    );
};
