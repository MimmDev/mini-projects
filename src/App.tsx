import { Cascade } from "./components/Cascade/Cascade";

function App() {
    return (
        <div className="app-container">
            {/* <Clock /> */}
            {/* <Shapes /> */}
            {/* <SwipeText /> */}
            <Cascade interval={0.2}>
                <h1>Hello World</h1>
                <h1>Welcome To My Show</h1>
                <h1>This is A Test</h1>
            </Cascade>
        </div>
    );
}

export default App;
