import { useSelector } from "react-redux";
import { GALLERY_ROOT } from "../DATA/Gallery_URL";
import { PrevilegedState, selectCore } from "../store/slices/core";

const Private = () => {
    const { privMode } = useSelector(selectCore);
    return <div>
        <div>
            { privMode === PrevilegedState.PUBLIC && <span>You don't have a permission.</span>}
            { (privMode === PrevilegedState.PRIVATE || privMode ===PrevilegedState.ADMIN) &&
                <img src={GALLERY_ROOT + "ART/VincentVanGogh_AlmondBlossomOnly.jpg"} alt="Best Art Ever" />
            }
            { privMode === PrevilegedState.ADMIN && <span>You don't have a permission.</span>}
        </div>
    </div>
};
export default Private;