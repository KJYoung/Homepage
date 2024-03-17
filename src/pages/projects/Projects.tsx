import { useNavigate } from "react-router-dom";
import { PublicationWrapperDiv } from "../public/PublicationContents";

export const ProjectsMain = () => {
    const navigate = useNavigate();
    return <div>
        <PublicationWrapperDiv navigate={navigate}/>
    </div>
};