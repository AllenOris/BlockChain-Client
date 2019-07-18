<template>
    <div class="fillcontain">
        <div style="margin: 20px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{userTypeName}}</el-breadcrumb-item>
                <el-breadcrumb-item>查询信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="margin: 20px 0;"></div>
        <el-card style="margin: 20px;width: 100%;">>
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
        name: "Query",
        data() {
            return {
                tableData: {
                    name: ["姓名", "身份证", "性别", "出生日期", "住址", "手机号", "银行卡号"],
                    value: []
                },
                userTypeName: "",
            }
        },
        created() {
            this.getProfile();
        },
        methods: {
            getProfile() {
                let userType = localStorage.getItem('userType') * 1;
                this.userTypeName = this.userType === 0 ? '借贷方' : this.userType === 1 ? '平台方' : '商户方';
                let wantID = localStorage.getItem('wantID');
                let aim = localStorage.getItem('aim');
                let js = {id: wantID, aim: aim};
                if (userType === 1) {
                    this.$axios.post("/platforms/search-specific", js).then(res => {
                        // 登录成功
                        if (res.data.code * 1 === 0) {
                            this.$message({message: "查询成功", type: "success"});
                            console.log(res.data);
                            let data = res.data.data;
                            this.tableData.value.push(data.name);
                            this.tableData.value.push(data.id);
                            this.tableData.value.push(data.gender);
                            this.tableData.value.push(data.birth_date);
                            this.tableData.value.push(data.address);
                            this.tableData.value.push(data.phone);
                            this.tableData.value.push(data.card_number);
                            this.$message('查询成功,您的查询行为已被记入区块链网络')
                        } else {
                            this.$message.error(res.data.message);
                        }
                    }, err => {
                        this.$message.error(err.message);
                    });
                } else if (userType === 2) {
                    this.$axios.post("/merchants/search-platform", js).then(res => {
                        // 登录成功
                        if (res.data.code * 1 === 0) {
                            this.$message({message: "查询成功", type: "success"});
                            let data = res.data.data;
                            this.tableData.value.push(data.name);
                            this.tableData.value.push(data.id);
                            this.tableData.value.push(data.gender);
                            this.tableData.value.push(data.birth_date);
                            this.tableData.value.push(data.address);
                            this.tableData.value.push(data.phone);
                            this.tableData.value.push(data.card_number);
                            this.$message('查询成功,您的查询行为已被记入区块链网络')
                        } else {
                            this.$message.error(res.data.message);
                        }
                    }, err => {
                        this.$message.error(err.message);
                    });
                }
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
