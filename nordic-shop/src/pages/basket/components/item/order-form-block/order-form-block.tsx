import { useSelectorTyped } from '../../../../../generics/use-selector-typed'
import { IReduxGoodsState } from '../../../../../types/i-redux-goods-state'
import { iGoods } from '../../../../../components/good-list/types'
import { telegramBot } from '../../../../../utils/telegram-bot'


import { StyledForm, StyledInput } from './style'

const formRef = useRef()

export function OrderFormBlock(){

    const basket: iGoods = useSelectorTyped<IReduxGoodsState, iGoods>(state => state.goods.basket)

    const sendOrderMessage = (event: any) => {
        event?.preventDefault()
        console.log("Send data")
        console.log(basket)
        console.log(telegramBot)
    }

    return (
        <StyledForm ref={formRef} onSubmit={(event) => sendOrderMessage(event)}>
            <h2>Форма для оформления заказа</h2>
            <StyledInput placeholder="Введите ваше ФИО" />
            <StyledInput placeholder="Введите ваш телефон" type="tel" />
            <StyledInput placeholder="Введите вашу почту" type="e-mail" />
            <StyledInput value="Оставить заявку" type="submit"/>
        </StyledForm>
    )
}