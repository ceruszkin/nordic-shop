import React from 'react'
import {Outlet} from 'react-router-dom'
import { HelloBlock } from './components/hello-block/hello-block'
import { SearchInput } from "./components/search-input/search-input"


/**
 * Goods - компонент статики старицы Ассортимент
 */
export function Main() : JSX.Element{
    return (
            <>
                <HelloBlock />
                <SearchInput />
                <Outlet />
            </>
        )
}