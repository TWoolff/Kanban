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
export default {
  data () {
    return {
      title: '',
      details: ''
    }
  },
  methods: {
    handleSubmit () {
      let task = {
        title: this.title,
        details: this.details,
        startDate: new Date().toLocaleDateString('en-GB'),
        state: 'todo'
      }

      fetch('http://localhost:3000/tasks/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      }).then(() => {
        this.$router.push('/')
      }).catch(err => console.log(err.message))
    }
  }
}
</script>

<style>
 
</style>