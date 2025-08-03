export const sampleDecks = [
        {id: 1, name: 'Japanese Hiragana', cardCount: 20, lastReviewed: '2 days ago'},
        {id: 2, name: 'Japanese Katakana', cardCount: 25, lastReviewed: '10 days ago'},
        {id: 3, name: 'Japanese Kanji', cardCount: 100000, lastReviewed: '10 months ago'},
]

export const getDeckById = (id) => {
    return sampleDecks.find(deck => deck.id === parseInt(id))
}