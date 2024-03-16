import { useNavigate } from "react-router-dom";

export const ProjectsMain = () => {
    const navigate = useNavigate();
    return <div>
        <button onClick={() => navigate('/Projects/Evidential-Semantic-Mapping') }>Evidential Semantic Mapping</button>

    </div>
};