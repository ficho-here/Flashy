import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getDeckWithId } from "../../data/deck1";

const StudyPage = () => {
  const { id } = useLocalSearchParams();
  const deck = getDeckWithId(id);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [shuffledIndicies, setShuffledIndicies] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [deckCompleted, setDeckCompleted] = useState(false);
  useEffect(() => {
    if (deck && deck.length > 0) {
      const indicies = Array.from({ length: deck.length }, (_, i) => i);
      const shuffled = indicies.sort(() => Math.random() - 0.5);

      setShuffledIndicies(shuffled);
      setCurrentCardIndex(shuffled[0]);
      setCurrentPosition(0);
      setDeckCompleted(false);
    }
  }, [deck]);

  const nextCard = () => {
    if (shuffledIndicies.length === 0) return;

    const nextPos = currentPosition + 1;

    if (nextPos >= shuffledIndicies.length) {
      const indicies = Array.from({ length: deck.length }, (_, i) => i);
      const newShuffled = indicies.sort(() => Math.random() - 0.5);

      setShuffledIndicies(newShuffled);
      setCurrentCardIndex(newShuffled[0]);
      setCurrentPosition(0);
      setDeckCompleted(true);
    } else {
      setCurrentPosition(nextPos);
      setCurrentCardIndex(shuffledIndicies[nextPos]);
    }
    setCardFlipped(false);
  };

  {
    /*
    [ ] - Card Showcase the most important feature with swipe up and down
    [ ] - Again, Hard, Good, Easy button after card
    */
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => setCardFlipped(!cardFlipped)}
      >
        <Text style={styles.cardText}>
          {cardFlipped
            ? deck[currentCardIndex].back
            : deck[currentCardIndex].front}
        </Text>
      </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={nextCard}>
        <Text style={styles.buttonText}>Next Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    minHeight: 300,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  cardText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#2c3e50",
    textAlign: "center",
    lineHeight: 36,
  },
  flipHint: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 20,
    fontStyle: "italic",
  },
  progressContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    right: 20,
  },
  progressText: {
    fontSize: 16,
    color: "#34495e",
    textAlign: "center",
    fontWeight: "500",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#ecf0f1",
    borderRadius: 2,
    marginTop: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#3498db",
    borderRadius: 2,
  },
});

export default StudyPage;
