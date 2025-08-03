import { Link, useLocalSearchParams } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { getDeckWithId } from '../data/deck1';
import { getDeckById } from '../data/sampleDecks';
const DeckScreen = () => {
   const { id }  = useLocalSearchParams();


   const deckInfo = getDeckById(id);
   const deck = getDeckWithId(id); 

  return (
    <View>
      <Text>ID : {deckInfo.id}</Text>
      <Text>Deck Name : {deckInfo.name}</Text>
      <Text>Number of Cards : {deckInfo.cardCount}</Text>
      <Text>Last Time Reviewed : {deckInfo.lastReviewed}</Text>

      <Link href={`../decks/${id}/study`}   asChild>
        <TouchableOpacity>
          <Text>Start Studying</Text>   
        </TouchableOpacity> 
      </Link>

    </View>


    
  )
}

export default DeckScreen