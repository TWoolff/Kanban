<template>
  <form @submit.prevent="handleSubmit" class="add-task">
    <label>Title:</label>
    <input type="text" v-model="title" required>
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Task</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore} from '../firebase/config'

export default {
  setup() {
    const title = ref('')
    const details = ref('')
    const startdate = ref('')
    const state = ref('')

    const router = useRouter()

    const handleSubmit = async () => {
      const task = {
        title: title.value,
        details: details.value,
        startdate: new Date().toLocaleDateString('en-GB'),
        state: 'todo'
      }

      const res = await projectFirestore.collection('tasks').add(task)
      console.log(res)
      router.push({ name: 'Home' })
    }
     return { title, details, startdate, state, handleSubmit }
  }
}
</script>

<style>
 
</style>