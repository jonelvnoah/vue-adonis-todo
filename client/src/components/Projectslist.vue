<template>
  <Panel title="Projects">
    <div
      class="project mb-2"
      v-for="project in projects"
      :key="project.id">
      <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
          <span v-if="!project.isEditMode">
            {{ project.title }}
          </span>
          <v-text-field
            autofocus
            @keyup.enter="saveProject(project)"
            v-if="project.isEditMode"
            :value="project.title"
            @input="setProjectTitle({
              project,
              title: $event
            })"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon
            v-if="!project.isEditMode"
            @click="setEditMode(project)">edit</v-icon>
          
           <v-icon
            v-if="project.isEditMode"
            @click="saveProject(project)">check</v-icon>
           <v-icon
            v-if="project.isEditMode"
            @click="deleteProject(project)">delete</v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap class="mt-4">
      <v-flex xs8>
        <v-text-field
          placeholder="My project Name"
          :value="newProjectName"
          @input="setProjectName"
          @keyup.enter="createProject"></v-text-field>   
      </v-flex>

      <v-flex xs4>
        <v-btn
          color="green"
          dark
          class="mt-2"
          @click="createProject">
          <v-icon class="mr-2">add_circle</v-icon>
          Create
        </v-btn> 
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
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

