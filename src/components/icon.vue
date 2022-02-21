<template>
  <svg class="icon" aria-hidden="true" @click="onClick">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>  