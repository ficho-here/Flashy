export const deck1 = [
    {id: '1', front: 'hello', back: 'dobar dan'},
    {id: '2', front: 'goodbye', back: 'dovidenja'},
    {id: '3', front: 'one', back: 'jedan'},
    {id: '4', front: 'two', back: 'dva'},
]
export const deck2 = [
    {id: '1', front: 'hello', back: 'dobar dan'},
    {id: '2', front: 'goodbye', back: 'dovidenja'},
    {id: '3', front: 'one', back: 'jedan'},
    {id: '4', front: 'two', back: 'dva'},
]
export const deck3 = [
    {id: '1', front: 'hello', back: 'dobar dan'},
    {id: '2', front: 'goodbye', back: 'dovidenja'},
    {id: '3', front: 'one', back: 'jedan'},
    {id: '4', front: 'two', back: 'dva'},
]
export const deck4 = [
    {id: '1', front: 'hello', back: 'dobar dan'},
    {id: '2', front: 'goodbye', back: 'dovidenja'},
    {id: '3', front: 'one', back: 'jedan'},
    {id: '4', front: 'two', back: 'dva'},
]

export const getDeckWithId = (id) => {
    if (id === '1') return deck1
    if (id === '2') return deck2
    if (id === '3') return deck3
    if (id === '4') return deck4
    return null
}

