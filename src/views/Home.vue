<template>
  <section class="home">
    <section class="to-do">
      <h2>To Do </h2>
      <Task :task="task" @delete="handleDelete" v-for="task in toDo" :key="task.id"/>
    </section>
    <section class="doing">
      <h2>Doing </h2>
      <Task :task="task" @delete="handleDelete" v-for="task in doing" :key="task.id"/>
    </section>
    <section class="done">
      <h2>Done </h2>
      <Task :task="task" @delete="handleDelete" v-for="task in done" :key="task.id"/>
    </section>
  </section>
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
    toDo () {
      return this.tasks.filter(task => task.state === 'todo')
    },
    doing () {
      return this.tasks.filter(task => task.state === 'doing')
    },
    done () {
      return this.tasks.filter(task => task.state === 'done')
    }
  }
}
</script>
