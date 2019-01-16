<template>
  <footer id="footer">
    <div class="copyright">© {{currentYear}} Chris Snowden</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
</style>
