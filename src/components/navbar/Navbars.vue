<template>
  <div class="nav-container">
    <el-row class="nav-warp">
      <el-col :span="4">
        a
      </el-col>
      <el-col :span="20">
        <ul class="nav-item-box">
          <li>系统功能</li>
          <li v-for="(item,index) in navType1List" class="nav-item" :id="index" @click="todo($event)">
            <i class="iconfont item-icon-radius" :class="item.iconClass"></i>
            <p class="item-txt">{{ item.navName }}</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  let navType1List = [
    {iconClass:"icon-home",navName:"新闻"},
    {iconClass:"icon-daohangdizhi",navName:"地图"},
    {iconClass:"icon-worker",navName:"视频"},
    {iconClass:"icon-iconfontanquan",navName:"贴吧"},
    {iconClass:"icon-icon_huifu-mian",navName:"学术"},
    {iconClass:"icon-setting",navName:"设置"},
    {iconClass:"icon-tubiaozhizuomoban",navName:"数据库1"},
    {iconClass:"icon-huabanfuben",navName:"数据库2"},
    {iconClass:"icon-mn_dunpai_fill",navName:"数据库3"},
    {iconClass:"icon-partner",navName:"数据库4"},
    {iconClass:"icon-view2",navName:"数据库5"},
    {iconClass:"icon-shengyin",navName:"数据库6"}
  ];
  
  function siblings(elm) {
    let nodes = [];
    let childrens = elm.parentNode.children;
    for(let i =0,childrensl= childrens.length;i<childrensl;i++) {
      if(childrens[i] !== elm) nodes.push(childrens[i]);
    }
    return nodes;
  }
export default {
  name:"Navbars",
  created() {
  },
  data() {
    return {
      navType1List:navType1List
    }
  },
  methods: {
    todo(event){
      //获取当前被点击的元素
      let elm = event.currentTarget;
      //为当前元素添加 active类名
      elm.className +=" active";
      //获取所有兄弟节点
      let siblingNodes = siblings(elm);
      //清除兄弟节点的 active 类名
      siblingNodes.forEach(item=>{
        //拆分成数组
        let classArr = item.className.trim().split(" ");
        //过滤点active
        let newClassNameArr = classArr.filter(item=>item!=="active");
        //组装成字符串
        let classStr = newClassNameArr.join(" ").trim();
        //从新设置类名
        item.className = classStr;
        // console.log(this.$router.push('/example'));
      })
    }
  }
}
</script>

<style scoped>
  ul,li,p{
    margin: 0;
    padding: 0;
  }
  .nav-container{
    height:120px;
    text-align: center;
    /*border:1px solid #00f;*/
  }
  li{
    list-style: none;
  }
  ul{
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  .iconfont{
    font-size:1.6em;
  }

  .nav-item-box{
    height:120px;
  }
  .nav-item-box li:nth-child(7){
  }
  .nav-item{
    height: 80px;
    width: 80px;
    /*border:1px solid #f00;*/
    cursor: pointer;

  }
  .item-icon-radius{
    position: relative;
    top:0.2em;
    display: inline-block;
    height: 1.6em;
    width: 1.6em;
    line-height: 1.6em;
    border-radius:50%;
    background-color: #aaa;
    transition: all .25s;
  }
  .item-icon-radius:after{
    content: '';
    position: absolute;
    top:-5px;
    left:-5px;
    width: 2em;
    height: 2em;
    background-color: rgba(255,0,0,.4);
    border-radius: 50%;
    z-index: -1;
    display: none;   
    transition: all .25s;
  }
  .nav-item:hover,.active{
    color:#f00;
  }
  .nav-item:hover .item-icon-radius,.active .item-icon-radius{
    color:#fff;
    background-color:rgba(255,0,0,.6);
  }
  .nav-item:hover .item-icon-radius:after,.active .item-icon-radius:after{
    display: block;
  }
  
  .item-txt{
    margin-top:0.8em;
    font-size: 0.8em;
    line-height: 2em;
  }
</style>
