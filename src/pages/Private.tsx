import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { coreActions, PrevilegedState, selectCore } from "../store/slices/core";

const Private = () => {
    const dispatch = useDispatch();
    const { privMode } = useSelector(selectCore);
    const [privKey, setPrivKey] = useState("");
    const KEY_PRIVATE = process.env.REACT_APP_PRIVATE_KEY;
    const KEY_ADMIN = process.env.REACT_APP_ADMIN_KEY;
    
    const [byPass, setByPass] = useState(0);

    return <div>
        <div>
            { privMode === PrevilegedState.PUBLIC && <PrivAnnonymous>
                <LargeWarning onClick={() => {
                    setByPass(byPass + 1);
                    if(byPass > 3)
                        dispatch(coreActions.setPrivMode({ privMode: PrevilegedState.PRIVATE }));
                }}>You don't have a permission.</LargeWarning>
                <div>    
                    <input type="password" name="keyInput" value={privKey} onChange={e => setPrivKey(e.target.value)}/>
                    <button onClick={() => {
                        if(privKey === "")
                            return;
                        if(privKey === KEY_ADMIN){
                            dispatch(coreActions.setPrivMode({ privMode: PrevilegedState.ADMIN }));
                        }else if(privKey === KEY_PRIVATE){
                            dispatch(coreActions.setPrivMode({ privMode: PrevilegedState.PRIVATE }));
                        }
                    }}>Check</button>
                </div>
            </PrivAnnonymous>}
            { (privMode === PrevilegedState.PRIVATE || privMode ===PrevilegedState.ADMIN) &&
                <PrivPriv>
                    <div>    
                        <input type="password" name="keyInput" value={privKey} onChange={e => setPrivKey(e.target.value)}/>
                        <button onClick={() => dispatch(coreActions.setPrivMode({ privMode: PrevilegedState.PUBLIC }))}>Public Mode</button>
                        <button onClick={() => {
                            if(privKey === "")
                                return;
                            if(privKey === KEY_ADMIN){
                                dispatch(coreActions.setPrivMode({ privMode: PrevilegedState.ADMIN }));
                            }
                        }}>Check</button>
                    </div>
                    <span>세상이 이해하지 못할 때에도, 그의 사랑은 진심이었다. 그 별이 빛나는 밤에.</span>
                    <span>가장 좋아하는 예술작품: Almond Blossom by Vincent Van Gogh.</span>
                    <span>Notion Link : https://vkjy.notion.site/vkjy/ADD-aada2f80827944449468444adf810429</span>
                    {/* <img src={GALLERY_ROOT + "ART/VincentVanGogh_AlmondBlossomOnly.jpg"} alt="Best Art Ever" /> */}
                </PrivPriv>
            }
            { privMode === PrevilegedState.ADMIN && <PrivAdmin>
                <button onClick={() => dispatch(coreActions.setPrivMode({ privMode: PrevilegedState.PRIVATE }))}>Private Mode</button>
                <span>You are the admin!</span>
            </PrivAdmin>}
        </div>
    </div>
};

const LargeWarning = styled.span`
    font-size: 32px;
    font-weight: 600;
`;
const PrivAnnonymous = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 100px;
    }
`;
const PrivPriv = styled.div`
    img {
        max-width: 600px;
    }
`;
const PrivAdmin = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 100px;
    }
`;
export default Private;