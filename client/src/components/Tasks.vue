<template>
  <Panel title="Tasks">
    <div
      class="tasks mb-2"
      v-for="task in tasks"
      :key="task.id"
    >
      <editable-record
        :isEditMode = "task.isEditMode"
        :title = "task.description"
        :record = "task"
        @onInput = "setTaskTitle({
          task,
          title: $event
        })"
        @onEdit = "setEditMode(task)"
        @onSave = "saveTask(task)"
        @onDelete = "deleteTask(task)"></editable-record>
    </div>

    <create-record
      placeholder = "I need to ...."
      :value = "newTaskName"
      @onInput = "setTaskName"
      @create = "createTask"></create-record>
  </Panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CreateRecord from '@/components/createRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
  },
  methods: {
    ...mapMutations('tasks', [
      'setTaskName',
      'setEditMode',
    ]),
    ...mapActions('tasks', [
      'createTask',
      'saveTask',
      'deleteTask',
    ]),
  }
};
</script>

<style scoped>

</style>

