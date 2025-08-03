import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'
import { sampleDecks } from '../data/sampleDecks'
const Decks = () => {
  return (
    <View>
      <Text>Decks</Text>
      <FlatList
        data = {sampleDecks}
        renderItem={({ item }) =>  (
          <View>
            
            <Link href={`decks/${item.id}`}/>
            <Text>name : {item.name}</Text>
            <Text>last time reviewed : {item.lastReviewed}</Text>
            <Text>number of cards : {item.cardCount}</Text>
          </View>
        )} 
      />
    </View>
  )
}

export default Decks 