<template lang="html">
<!-- 歌词展示 -->
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
         {{ getAllKey }}
      <p
        class="lrc-p"
        :class="{active:parseInt(currentTime) >= keyArr[index] && parseInt(currentTime) < keyArr[index+1]}"
        v-for="(item,key,index) in lrcData" :key="index">
        {{ item }}{{ srcollLrc(key,index) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "lrc",
  data() {
    return {
      lrc: {},
      lrcData: {},
      keyArr: [] //存储key
    };
  },
  props: {
    songid: {
      type: [String, Number],
      default: ""
    },
    currentTime:{ //当前播放时间
      type:[String,Number],
      default:0
    },
    durationTime:{ //歌曲总时长
      type:[String,Number],
      default:0
    }
  },
  mounted() {
    const LRCUrl = this.HOST +"/v1/restserver/ting?method=baidu.ting.song.lry&songid="+this.songid;
    this.$axios.get(LRCUrl)
    .then(res => {
      this.lrc = res.data;
      //数据格式处理：将歌词字符串转成一个对象，以每个回车符之前的字符为一句
        var lyrics = res.data.lrcContent.split("\n");
        var lrcObj = {};
        for(var i = 0 ;i<lyrics.length;i++){
          var lyric = decodeURIComponent(lyrics[i]);
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
          var timeRegExpArr = lyric.match(timeReg);
          if(!timeRegExpArr)continue;
          var clause = lyric.replace(timeReg,'');
             for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
                 var t = timeRegExpArr[k];
                 var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                     sec = Number(String(t.match(/\:\d*/i)).slice(1));
                 var time = min * 60 + sec;
                 lrcObj[time] = clause;
             }
           }
           this.lrcData = lrcObj;
           console.log(this.lrcData)
    })
    .catch(error => {
      console.log(error);
    })
  },
  computed:{
    getAllKey(){
      for(var i in this.lrcData){
        this.keyArr.push(i);
      }

    }
  },
  methods:{
    srcollLrc(key,index){
      const lrcDiv = this.$refs.lrc
       if(key < this.currentTime && key > this.currentTime - (this.keyArr[index+1] - this.keyArr[index])){
           lrcDiv.style.top = -((index-2)*30)+"px"  //滚动
       }
    }
  }
};
</script>

<style scoped>

.lrcContainer{
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.lrc{
	width: 100%;
  position: absolute;
  top: 0;
}
.active{
  color: red !important;
}
.lrc-p{
  height: 30px;
	line-height: 30px;
}

.up30{
	margin-top: -30px;
}

</style>
