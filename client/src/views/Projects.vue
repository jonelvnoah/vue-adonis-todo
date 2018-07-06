<template>
<div>
  <v-container>
    <v-layout>
      <v-flex :class="{'xs4': currentProject}">
        <projects-list></projects-list>
      </v-flex>

      <v-flex xs8 class="pl-4" v-if="currentProject">
        <Tasks></Tasks>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import ProjectsList from '@/components/Projectslist.vue';
import Tasks from '@/components/Tasks.vue';
import router from '../router';

export default {
  components: {
    ProjectsList,
    Tasks,
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login')
    }
  },
  computed: {
    ...mapState('projects', [
      'currentProject'
    ]),
    ...mapGetters('authentication', [
      'isLoggedIn'
    ]),
  }
};
</script>
