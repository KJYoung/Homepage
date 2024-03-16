import { useSelector } from "react-redux";
import { selectCore } from "../store/slices/core";

const New = () => {
    const { windowSize } = useSelector(selectCore);
    return <div>
        <div>
            <span>무엇을 추가해볼까요?</span>
            <span>WindowSize : [{windowSize[0]}, {windowSize[1]}]</span>
        </div>
    </div>
};
export default New;