<template>
  <div>
    <!-- 音乐榜单的热歌榜 -->
    <!-- 调用Music_List组件并传参 -->
    <MusicList :url="url" />
  </div>
</template>

<script>
import MusicList from "../../components/Music_List";

export default {
  data() {
    return {
      url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=5&offset=0"
    };
  },
  components: {
    MusicList
  }
};
</script>

<style>
</style>