import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getTasks = () => {
  const tasks = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('tasks').get()
      
      tasks.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { tasks, error, load}
}

export default getTasks