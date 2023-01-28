import {StyledDiscription} from './style/'
import { StyledImg } from "./style/img.style"
import { StyledTitle } from "./style/title.style"

export function GoodItem({data}: any){
    return (
        <>
            <StyledImg src={data.IMG} />

            <StyledTitle>
            {data.TITLE}
            </StyledTitle>
            
            <StyledDiscription>
                {data.DISCR}
            </StyledDiscription>
        </>
    )
}