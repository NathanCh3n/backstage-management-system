<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img src="../assets/images/user.png" alt="" />
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2021-7-19</span></p>
            <p>上次登录地点：<span>武汉</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 460px">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val" :key="key"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0}">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color}"></i>
            <div class="txt">
              <p class="price">$ {{ item.value }}</p>
              <p class="dec">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '月度购买',
        totalBuy: '总购买',
      }, 
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  img {
    width: 150px;
    height: 150px;
    margin-right: 40px;
    border-radius: 50%;
  }
  .userinfo {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999;
    }
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      font-size: 16px;
      color: #999;
    }
  }
}
.login-info {
  border-top: #999 olid 1px;
  margin-top: 20px;
  p {
    font-size: 16px;
    margin-bottom: 10px;
    span {
      margin-left: 60px;
      color: #999;
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .txt {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 15px;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      height: 30px;
      line-height: 30px;
    }
    .desc {
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
}
</style>
 