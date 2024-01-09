<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handlMenu" type="primary" icon="el-icon-menu" size="mini" class="search"></el-button>
            <!-- 面包屑 -->
            <span class="txt"></span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/user.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        handlMenu() {
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style lang="less" scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    .txt {
        color: #fff;
        font-size: 14px;
    }
    .user {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
}
</style>