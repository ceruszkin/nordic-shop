import React from "react"

import { Link } from 'react-router-dom'

import { StyledListUl, StyledListLi} from "./style"
import { iGood, iGoods } from "./types"
import { GoodItem } from "../good-item"

import goodJSON from "../../stub/goods.json"

export function GoodList() : JSX.Element{
    return (
        <StyledListUl>{
                goodJSON.map((good: iGood, index: number) => 
                    (
                        <StyledListLi key={good.TITLE+index}>
                            <Link to={`/goods/${good.ID}`}>
                                {good.TITLE}
                                <GoodItem data={good}/>
                            </Link>
                        </StyledListLi>
                    )
                ) as any
            }
        </StyledListUl>
    )
}