<template>
    <div>
        <h1>123</h1>
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/images/user.png" alt="">
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
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    }
}
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
</style>