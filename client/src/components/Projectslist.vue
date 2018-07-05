<template>
  <Panel title="Projects">
    <div
      v-for="project in projects"
      :key="project.id">
      {{ project.title }}
    </div>
    <v-layout>
      <v-flex xs8>
        <v-text-field
          placeholder="My project Name"
          :value="newProjectName"
          @input="setProjectName"></v-text-field>   
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
  methods: {
    ...mapMutations('projects', [
      'setProjectName',
    ]),
    ...mapActions('projects', [
      'createProject',
    ])
  }
}
</script>
