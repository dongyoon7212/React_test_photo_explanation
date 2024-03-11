import Component1 from "./components/Component1/Component1";
import { useRecoilState } from "recoil";
import { inputState } from "./atoms/inputState";

function GlobalState(props) {
    const [value] = useRecoilState(inputState);

    return (
        <div>
            <h1>{value}</h1>
            <Component1 />
        </div>
    );
}

export default GlobalState;
