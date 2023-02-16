<template>
  <div class="app-container">
    <div>登录成功 </div>
    <div>用户名：<span>admin</span></div>

    <el-button type="primary"  size="mini" @click="bind">绑定企微</el-button>

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog title="绑定说明" :visible.sync="open" width="500px" append-to-body>
      请按要求扫码绑定企微
      <div>
        <el-button type="primary" @click="bindRefresh">我以绑定</el-button>
        <el-button type="danger" @click="bindRefresh">绑定失败</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { bindInfo, getBindUrl } from "@/api/system/bind";

export default {
  name: "Config",
  data() {
    return {
      open: false
    };
  },
  created() {
    this.bindRefresh()
  },
  methods: {
    bindRefresh(){
      this.open = false
    },
    bind() {
      this.open = true
      window.open("https://www.baidu.com","_blank");
    }
  }
};
</script>
