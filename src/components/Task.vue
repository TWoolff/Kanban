<template>
  <article class="task">
    <h3 @click="toggleDetails">{{ task.title }}</h3>
    <div class="details" v-if="showDetails" :toggle="toggleDetails">
      <p>{{ task.details }}</p>
      <p class="small">Start Date: {{ task.startdate }}</p>
    </div>
    <div class="icons">
      <span class="material-icons state">bookmark</span>
      <router-link :to="{ name: 'EditTask', params: { id: task.id }}">
        <span class="material-icons">edit</span>
      </router-link>
      <span @click="deleteTask" class="material-icons">delete</span>
    </div>
  </article>
</template>

<script>
import { useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'
import { ref } from '@vue/reactivity'

export default {
props: ['task', 'id'],
setup(props) {
  const router = useRouter()
  let showDetails = ref(false)
  const toggleDetails = () => {
    showDetails.value = !showDetails.value
  }
  const deleteTask = async () => {
    await projectFirestore.collection('tasks').doc(props.id).delete()

    router.push('/')
  }

  return { deleteTask, showDetails, toggleDetails }
}
}
</script>
