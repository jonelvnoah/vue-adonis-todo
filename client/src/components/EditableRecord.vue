<template>
  <v-layout row wrap>
    <v-flex xs9 class="text-xs-left">
      <span v-if="!isEditMode" @click="$emit('onClick')">
        {{ title }}
      </span>
      <v-text-field
        autofocus
        @keyup.enter="$emit('onInput', $event)"
        v-if="isEditMode"
        :value="title"
        @input="$emit('onInput', $event)"></v-text-field>
    </v-flex>
    <v-flex xs3>
      <v-icon
        v-if="!isEditMode"
        @click="$emit('onEdit')">edit</v-icon>
      
        <v-icon
        v-if="isEditMode"
        @click="$emit('onSave')">check</v-icon>
        <v-icon
        v-if="isEditMode"
        @click="$emit('onDelete')">delete</v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'isEditMode',
    'title',
    'record',
  ]
}
</script>
