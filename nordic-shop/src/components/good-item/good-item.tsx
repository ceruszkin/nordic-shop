import React from "react"

export function GoodItem({data}: any){
    return (
        <>
            {data.TITLE}
            {data.DISCR}
            {data.IMG}
        </>
    )
}