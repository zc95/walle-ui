<template>
  <div class="home">
    <h3>Button 按钮</h3>

    <ol-button>基础按钮</ol-button>
    <ol-button type="danger">警告按钮</ol-button>

    <ol-button size="small">小按钮</ol-button>
    <ol-button size="large">大按钮</ol-button>

    <ol-button disabled>禁用</ol-button>
    <ol-button type="danger" disabled>禁用</ol-button>

    <h3>Switch 开关 checked: {{ checked }}</h3>
    <p>正常：<ol-switch v-model="checked"></ol-switch></p>
    <p>禁用：<ol-switch v-model="checked" disabled></ol-switch></p>

    <h3>Tag 标签</h3>
    <p>
      <ol-tag type="primary">重要</ol-tag>
      <ol-tag type="danger">危险</ol-tag>
      <ol-tag type="warning">警告</ol-tag>
      <ol-tag type="success">成功</ol-tag>
      <ol-tag type="default">信息</ol-tag>
    </p>
    <p>
      <ol-tag size="large" type="primary">大号</ol-tag>
      <ol-tag size="medium" type="primary">中号</ol-tag>
      <ol-tag size="small" type="primary">小号</ol-tag>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin: 40px 0 10px;
}
/deep/ .ol-button,
/deep/ .ol-tag {
  margin: 5px;
}
</style>
