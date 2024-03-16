import { Button } from "../../customs/Buttons"
import { FlexColumnCenter } from "../../customs/Divs"
import { H1, H2, H3, SPAN } from "../../customs/Spans"

export const ExpElements = () => {
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
    </FlexColumnCenter>
}