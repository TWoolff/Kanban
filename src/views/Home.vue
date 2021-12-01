<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in filteredTasks" :key="task.id">
        <Task :task="task" @delete="handleDelete"/>
      </div>
    </div>
    <div v-else>
      <p>Loading Tasks</p>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'

export default {
  name: 'Home',
  components: { Task },
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => this.tasks = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.tasks = this.task.filter((task) => {
        return task.id !== id
      })
    }
  },
  computed: {
    filteredTasks () {
      if (this.current === 'completed') {
        return this.tasks.filter(task => task.complete)
      }
      if (this.current === 'ongoing') {
        return this.tasks.filter(task => !task.complete)
      }
      return this.tasks
    }
  }
}
</script>
