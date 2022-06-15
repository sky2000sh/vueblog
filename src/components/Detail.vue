<template>
  <div>
    <h5> {{ blogData[0].content }} </h5>
  </div>
  <div>
    <h5> {{ blogData[1].content }} </h5>
  </div>
  <div>
    <h5> {{ blogData[2].content }} </h5>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Detail',

    props: {
        blogData: Object
    },

}
</script>

<style>

</style>