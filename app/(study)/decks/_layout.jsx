import { Stack } from 'expo-router'

const DeckLayout = () => {
  return (

    <Stack>
        
        <Stack.Screen
            name='index'
            options={{
                title: 'Your Decks',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        />
        <Stack.Screen
            name='[id]' 
            options={{
                title: 'Deck Page',
            }}
        
        />


    </Stack>
  )
}

export default DeckLayout