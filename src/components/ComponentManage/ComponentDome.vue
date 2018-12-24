<template>
  <div>
    <p>
      <demo :msg="msgData" v-bind="msgDome" :math="mathData" :fn="myFunction"></demo>
    </p>
  </div>
</template>
<script>
import Demo from "./ChildComponents.vue";
export default {
  data() {
    return {
      msgData: "",
      mathData: 2,
      msgDome: { subjectId: "2", status: "0" }
    };
  },
  methods: {
    myFunction() {
      alert("hello");
    }
  },
  components: {
    Demo
  }
};
</script>