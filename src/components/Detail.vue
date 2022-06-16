<template>
  <!-- $route.params => url의 파라미터 자리에 기입된 모든것을 알려준다. 그 중에서 id(= 작명)의 값을 알고싶다면 .id 입력 -->
  <!-- {{$route.params.id}} -->
  <div>
    <h5> {{ blogData[$route.params.id].title }} </h5>
    <p> {{ blogData[$route.params.id].content }} </p>
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