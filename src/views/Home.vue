<template>
  <section class="home">
    <section class="to-do drop-zone" @drop="onDrop($event, 'todo')" @dragover.prevent @dragenter.prevent>
      <h2>To Do</h2>
      <Task :task="task" @delete="handleDelete" v-for="task in toDo" :key="task.id" class="drag-el" draggable="true" @dragstart="startDrag($event, task)"/>
    </section>
    <section class="doing drop-zone" @drop="onDrop($event, 'doing')" @dragover.prevent @dragenter.prevent>
      <h2>Doing</h2>
      <Task :task="task" @delete="handleDelete" v-for="task in doing" :key="task.id" class="drag-el" draggable="true" @dragstart="startDrag($event, task)"/>
    </section>
    <section class="done drop-zone" @drop="onDrop($event, 'done')" @dragover.prevent @dragenter.prevent>
      <h2>Done</h2>
      <Task :task="task" @delete="handleDelete" v-for="task in done" :key="task.id" class="drag-el" draggable="true" @dragstart="startDrag($event, task)"/>
    </section>
  </section>
</template>

<script>
import getTasks from '@/composables/getTasks'
import Task from '@/components/Task.vue'

export default {
  name: 'Home',
  components: { Task },
  setup () {
    const { tasks, error, load } = getTasks()

    load()

    return { tasks, error }
  },
  methods: {
    startDrag (evt, task) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('taskID', task.id)
    },
    onDrop (evt, state) {
      const taskID = evt.dataTransfer.getData('taskID')
      const task = this.tasks.find(task => task.id == taskID)
      task.state = state

      fetch('http://localhost:3000/tasks/' + taskID, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: state }) 
      })
    },
    handleDelete (id) {
      this.tasks = this.tasks.filter((task) => {
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
