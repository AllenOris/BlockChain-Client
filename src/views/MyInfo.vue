<template>
    <div class="fillcontain">
        <div style="margin: 20px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>借贷方</el-breadcrumb-item>
                <el-breadcrumb-item>我的个人信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="margin: 20px 0;"></div>
        <el-card style="margin: 20px;width: 100%;">
            <el-button @click="refresh">刷新</el-button>
            <div style="margin: 20px 0;"></div>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="Name"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="value"
                        label="Value"
                        sortable>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "MyInfo",
        data() {
            return {
                tableData: {
                    name: ["姓名", "身份证", "性别", "出生日期", "住址", "手机号", "银行卡号"],
                    value: []
                }
            }
        },
        created() {
            this.getProfile();
        },
        methods: {
            getProfile() {
                let js = {};
                this.$axios.post("/platforms/search-specific", js,
                    {
                        params: {access_token: localStorage.getItem('eleToken')}
                    }).then(res => {
                    // 登录成功
                    console.log(res.data);
                    if (res.data.code * 1 === 0) {
                        this.tableData.value = [];
                        this.$message({message: "查询成功", type: "success"});
                        let data = res.data.data;
                        this.tableData.value.push(data.name);
                        this.tableData.value.push(data.id);
                        this.tableData.value.push(data.gender);
                        this.tableData.value.push(data.birth_date);
                        this.tableData.value.push(data.address);
                        this.tableData.value.push(data.phone);
                        this.tableData.value.push(data.card_number);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                }, err => {
                    this.$message.error(err.message);
                });
            },
            refresh() {
                this.getProfile();
            },
        }
    }
</script>

<style scoped>
    .fillcontain {
        width: 100%;
        height: 100%;
        padding: 16px;
        box-sizing: border-box;
    }
</style>
