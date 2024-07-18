import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'K', 'L', 'm','n','o','p','q','r','s','t'];
  const lettersMap = letters.map( (value, index) => ({letterText:value, key:index}) )

  return (
    <View style={styles.container}>
      {/* <Text>Hello!</Text>
      <Hello name = "Athi" />
      <Hello name = "Sudo Labs" />
      <Text>Count: {count}</Text>
      <Button onPress={() => {setCount(count+1)}} title='click me!' /> 
      <StatusBar style="auto" /> 
      <TextInput placeholder='Type Here' onChangeText={(newText) => { setText(newText) }} />
      <Text>{text}</Text>
      <ScrollView>
      {letters.map( (letter, index) => { return ( <Text style={styles.text} >{letter}</Text> ) } )}
      </ScrollView> */}
      <FlatList 
        data={lettersMap}
        renderItem={(letter) => { return ( <Text style={styles.text} >{letter.item.letterText}</Text> ) }}
      />
    </View>
  );
}

// const Hello = (props) => {
//   return (
//     <Text>Hello {props.name}!</Text>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingBottom: 100,
    color: 'black',
  }
});
