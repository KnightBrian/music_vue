<template>
<!-- 歌手详情展示页 -->
  <div>
      <Title :name="this.$route.params.name" :avatar="this.$route.params.avatar"/>
      <List :ting_uid="this.$route.params.ting_uid"/>
  </div>
</template>

<script>
import Title from "../../components/details/title"
import List from "../../components/details/list"

export default {
    name:"details",
    data(){
    return{

    }
  },
  components:{
    Title,
    List
  }
}
</script>

<style>

</style>