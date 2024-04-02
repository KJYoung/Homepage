import { useState } from "react"
import { Button } from "../../customs/Buttons"
import { CustomToggle } from "../../customs/CustomToggle"
import { FlexColumnCenter, FlexRowStart } from "../../customs/Divs"
import { H1, H2, H3, SPAN } from "../../customs/Spans"
import styled from "styled-components"
import { getRandomHex } from "../../utils/Color"

export const ExpElements = () => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const [color, setColor] = useState<string>('#000000');
    return <FlexColumnCenter>
        <SPAN>SPAN Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum</SPAN>
        <br />
        <H1>H1 Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum</H1>
        <br />
        <H2>H2 Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum</H2>
        <br />
        <H3>H3 Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum</H3>
        <br />
        <Button>Button</Button>
        <br />
        <CustomToggle toggleState={isOn} onText="ONNN" offText="OFFFF" onToggle={() => {setIsOn(iO => !iO)}}/>
        <FlexRowStart>
            <ColorCircleLarge color={color}>
                <div onClick={() => { setColor(getRandomHex()); }}></div>
            </ColorCircleLarge>
            {color}
        </FlexRowStart>

    </FlexColumnCenter>
}

export const ColorCircle = styled.div<{ color: string, ishard?: string }>`
    position: relative;
    width: 20px;
    height: 20px;

    > div {
        cursor: pointer;
    }

    > div:first-child {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: ${props => ((props.ishard === 'true') ? '2px solid var(--ls-red)' : 'none')};
        background-color: ${props => (props.color)};;
        
        margin-right: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    > div:last-child {
        position: absolute;
        top: 10px;
        left: 20px;
        width: 20px;
        height: 20px;
    }
`;

export const ColorCircleLarge = styled(ColorCircle)`
    width: 25px;
    height: 25px;

    margin-left: 8px;

    > div:first-child {
        width: 25px;
        height: 25px;
    }

    > div:last-child {
        position: absolute;
        top: 13px;
        left: 22px;
    }
`;