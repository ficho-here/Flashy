export const deck1 = [
    {id: 1, front: 'hello', back: 'dobar dan'},
    {id: 2, front: 'goodbye', back: 'dovidenja'},
    {id: 3, front: 'one', back: 'jedan'},
    {id: 4, front: 'two', back: 'dva'},
]
export const deck2 = [
    {id: 1, front: 'dog', back: 'pas'},
    {id: 2, front: 'cat', back: 'macka'},
    {id: 3, front: 'horse', back: 'konj'},
    {id: 4, front: 'water', back: 'voda'},
]
export const getDeckWithId = (id) => {
    if (id === 1) return deck1
    if (id === 2) return deck2
    return null
}