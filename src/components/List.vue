<template>
  <div>
    <!-- $route는 현재경로 / $router는 페이지 이동관련 기능 -->
    <h5 @click="$router.push('/detail/0')"> {{ blogData[0].title }} </h5>
    <p> {{ blogData[0].date }} </p>
  </div>
  <div>
    <h5> {{ blogData[1].title }} </h5>
    <p> {{ blogData[1].date }} </p>
  </div>
  <div>
    <h5> {{ blogData[2].title }} </h5>
    <p> {{ blogData[2].date }} </p>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'List',

    props: {
        blogData: Object
    },

}
</script>

<style>

</style>