<template>
  <Panel title="Projects">
    <div
      class="project mb-2"
      v-for="project in projects"
      :key="project.id">
      <editable-record
        :isEditMode = "project.isEditMode"
        :title = "project.title"
        :record = "project"
        @onInput = "setProjectTitle({
          project,
          title: $event
        })"
        @onClick = "projectClicked(project)"
        @onEdit = "setEditMode(project)"
        @onSave = "saveProject(project)"
        @onDelete = "deleteProject(project)"></editable-record>
    </div>
    <create-record
      placeholder = "My project name is ..."
      :value = "newProjectName"
      @onInput = "setProjectName"
      @create = "createProject"></create-record>
  </Panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import CreateRecord from '@/components/createRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
    ...mapState('tasks', [
      'tasks',
    ]),
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    projectClicked(project) {
      this.setCurrentProject(project);
      this.fetchTasksForProject(project);
    },
    ...mapMutations('projects', [
      'setProjectName',
      'setEditMode',
      'unsetEditMode',
      'setProjectTitle',
      'setCurrentProject',
    ]),
    ...mapActions('projects', [
      'createProject',
      'getProjects',
      'saveProject',
      'deleteProject',
    ]),
    ...mapActions('tasks', [
      'fetchTasksForProject',
    ]),
  },
};
</script>

<style scoped>
  .project {
    font-size:20px;
  }

  .icon {
    cursor: pointer;
  }

  .icon:hover {
    color:#333;
  }
</style>

