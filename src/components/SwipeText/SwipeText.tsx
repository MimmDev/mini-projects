import "./swipeText.css";

export const SwipeText = () => {
    return (
        <>
            <h1 className="swipe-target slide-away">
                <div className="overlay"></div>
                <div className="swipe"></div>
                <div className="overlay finalOverlay"></div>
                Hello There
            </h1>
        </>
    );
};
