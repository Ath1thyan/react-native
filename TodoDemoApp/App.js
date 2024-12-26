import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(-1)

// Add new task
  const handleAddTask = () => {
    if (task) {
      // If the editIndex is not -1, it means we are editing a task
      if (editIndex!== -1) {
        // Replace the task at the editIndex with the new task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);  // Reset the editIndex
        setTask("");  // Clear the input field after editing the task
      } else {
        // If the editIndex is -1, it means we are adding a new task
        // Add the new task to the tasks array
        setTasks([...tasks, task])
      }
      // Clear the input field after adding the task
      setTask("")
    }
  }

  // Edit task
  const handleEdit = (index) => { 
    const editTask = tasks[index];
    setTask(editTask);
    setEditIndex(index);
  }
  
  // Delete task
  const handleDelete = (index) => () => {
    // Create a new array without the task at the given index
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.taskContainer}>
        <Text style={styles.taskText}>{item}</Text>
        <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete(index)}>
            <Text style={styles.deleteButtonText} >Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEdit(index)} >
            <Text style={styles.editButtonText} >Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading} >Sudo Labs</Text>
      <Text style={styles.title} >ToDo App</Text>
      <TextInput style={styles.input} placeholder='Enter a Task' value={task} onChangeText={(text) => setTask(text)} />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText} >
          {editIndex !== -1 ? "Update Task" : " Add Task"}
        </Text>
      </TouchableOpacity>
      <FlatList data={tasks} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 7,
    textTransform: 'uppercase',
    color: 'dodgerblue',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    width: '40%',
    alignSelf: 'center',
  },
  addButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  taskContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  taskText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor:'red',
    padding: 5,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButtonText: {
    fontSize: 14,
  },
  editButton: {
    backgroundColor:'green',
    padding: 5,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  editButtonText: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
    width: '50%',
  },
});
