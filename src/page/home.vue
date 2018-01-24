<template>
  <div>
    <h1 class="index">首页</h1>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang='scss'>
 $highlight-color: #F90;
.index {
  color: $highlight-color
}

</style>
