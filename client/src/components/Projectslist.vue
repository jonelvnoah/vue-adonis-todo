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
import CreateRecord from '@/components/createRecord';
import EditableRecord from '@/components/EditableRecord';
export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ])
  },
  mounted () {
    this.getProjects();
  },
  methods: {
    ...mapMutations('projects', [
      'setProjectName',
      'setEditMode',
      'unsetEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects', [
      'createProject', 
      'getProjects',
      'saveProject',
      'deleteProject',
    ])
  }
}
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

