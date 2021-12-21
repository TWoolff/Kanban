import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getTask = (id) => {

  const task = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let res = await projectFirestore.collection('tasks').doc(id).get()

      if (!res.exists) {
        throw Error('That task does not exist')
      }
      task.value = { ...res.data(), id: res.id }
      console.log(task.value)
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { task, error, load } 
}

export default getTask