<template>
  <article class="task">
    <h3 @click="toggleDetails">{{ task.title }}</h3>
    <div class="details" v-if="showDetails" :toggle="toggleDetails">
    <p>{{ task.details }}</p>
    <p>{{ task.startDate }}</p>
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
export default {
props: ['task'],
 data () {
   return {
     showDetails: false,
     uri: 'http://localhost:3000/tasks/' + this.task.id
   }
 },
  methods: {
   deleteTask () {
     fetch(this.uri, { method: 'DELETE' })
      .then(() => this.$emit('delete', this.task.id))
      .catch(err => console.log(err.message))
   },
   toggleDetails () {
     this.showDetails = !this.showDetails
   }
  }
}
</script>
