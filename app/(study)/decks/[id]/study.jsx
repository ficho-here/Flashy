import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { getDeckWithId } from "../../data/deck1";
const StudyPage = () => {
  const { id } = useLocalSearchParams();
  const deck = getDeckWithId(id);
  
 


  {
    /*
    [ ] - Card Showcase the most important feature with swipe up and down
    [ ] - Again, Hard, Good, Easy button after card
    [ ] -  


    */
  }
  return (
    <View>
      <Text>StudyPage of id {id}</Text>
    </View>
  );
};

export default StudyPage;
