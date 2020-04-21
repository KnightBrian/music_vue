<template>
  <div>
    <!-- 主界面包含：-->
    <!-- 轮播图 -->
    <SwiperBanner />
    <!-- 今日推荐组件 -->
    <TodayRecommend title="今日榜单" type="1" />
    <!-- 新歌速递组件 -->
    <NewsMusic />
    <!-- 音乐榜单导航 -->
    <MusicListnav />
    <!-- 音乐榜单展示 -->
    <!-- 页面缓存 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- 热门歌单组件 -->
    <TodayRecommend title="热门歌单" type="24" />
  </div>
</template>

<script>
import TodayRecommend from "../components/Today_Recommend";
import NewsMusic from "../components/News_Music";
import SwiperBanner from "../components/Swiper_Banner";
import MusicListnav from "./musiclist/music_listnav";

export default {
  name: "home",
  components: {
    TodayRecommend,
    NewsMusic,
    SwiperBanner,
    MusicListnav
  }
};
</script>

<style>
</style>