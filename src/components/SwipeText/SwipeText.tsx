import "./swipeText.css";

export const SwipeText = () => {
    return (
        <div>
            <h1 className="swipe-target">
                <div className="overlay"></div>
                <div className="swipe"></div>
                Hello There
            </h1>
        </div>
    );
};
