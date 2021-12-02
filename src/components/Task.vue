<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <p>{{ task.details }}</p>
    <h5>{{ task.state }}</h5>
    <p>{{ task.startDate }}</p>
    <span class="material-icons">edit</span>
    <span @click="deleteTask" class="material-icons">delete</span>
  </div>
</template>

<script>
export default {
props: ['task'],
 data () {
   return {
     showDetails: false,
     uri: 'http://localhost:3000/tasks/' + this.task.id
   }
 },
  methods: {
   deleteTask() {
     fetch(this.uri, { method: 'DELETE' })
      .then(() => this.$emit('delete', this.task.id))
      .catch(err => console.log(err.message))
   }
  }
}
</script>
