<template>
<div>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <projects-list></projects-list>
      </v-flex>

      <v-flex xs8 class="pl-4">
        <Panel title="Tasks">
          <h1>Testing</h1>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import ProjectsList from '@/components/Projectslist'
import router from '../router';
import { mapState, mapGetters } from 'vuex';
export default {
  components: {
    ProjectsList,
  },
  mounted () {
    if (!this.isLoggedIn) {
      return router.push('/login')
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn'
    ])
  }
};
</script>
