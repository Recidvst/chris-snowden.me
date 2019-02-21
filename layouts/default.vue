<template>
  <div>
    <Header/>
    <nuxt/>
    <Lines/>
    <!-- <Footer/> -->
  </div>
</template>


<script>
// components
import Header from "~/components/Header";
import Footer from "~/components/Footer";
// svg lines
import Lines from "~/components/Lines";

export default {
  components: {
    Header,
    Footer,
    Lines
  },
  data() {
    return {};
  }
};
</script>
