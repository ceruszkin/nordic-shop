export function createExtraActions(){
    return {
        addToBasket,
    };

    function addToBasket(good: any) {
        return{
            type: 'ADD_TO_BASKET',
            payload: { good },
        };
    }
}