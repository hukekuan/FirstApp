<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-button type="primary" icon="plus" class="handle-del mr10" @click="addOne('adduser_form')">新增</el-button>
      <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
      <!--
      <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
        <el-option key="1" label="广东省" value="广东省"></el-option>
        <el-option key="2" label="湖南省" value="湖南省"></el-option>
      </el-select>-->
      <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
      <el-button type="primary" icon="search" @click="search">搜索</el-button>
    </div>



    <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="用户ID" width="350">
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="170">
      </el-table-column>
      <el-table-column prop="phonenumber" label="手机号" :formatter="formatter">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        @current-change ="handleCurrentChange"
        layout="prev, pager, next"
        :current-page="cur_page"
        :page-size="pagesize"
        :total="userCount">
      </el-pagination>
    </div>


    <!--用户新建表单-->
    <el-dialog title="新建用户" :visible.sync="addUserFormVisible">
      <el-form :model="adduser_form" :rules="formRules" ref="adduser_form" :label-width="formLabelWidth">
        <el-form-item label="用户名称：" prop="username">
          <el-input v-model="adduser_form.username" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="adduser_form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkpass">
          <el-input type="password" v-model="adduser_form.checkpass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" prop="phonenumber">
          <el-input v-model.number="adduser_form.phonenumber"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('adduser_form')">取 消</el-button>
        <el-button type="primary" @click="submitForm('adduser_form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      let validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        }
        setTimeout(() => {
          if (value.length < 6) {
            callback(new Error('用户名至少6个字符'))
          } else {
            callback()
          }
        })
      }
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.adduser_form.checkpass !== '') {
            this.$refs.adduser_form.validateField('checkpass')
          }
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.adduser_form.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      let checkPhoneNumber = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('手机号输入错误'))
          } else {
            callback()
//            if (value.length !== 11) {
//              callback(new Error('手机号格式错误'))
//            } else {
//              callback()
//            }
          }
        }, 1000)
      }
      return {
        pagesize: 5,
        cur_page: 1,
        multipleSelection: [],
        select_cate: '',
        select_word: '',
        del_list: [],
        is_search: false,
        adduser_form: {
          id: '',
          username: '',
          password: '',
          checkpass: '',
          phonenumber: ''
        },
        formRules: {
          username: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkpass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phonenumber: [
            { validator: checkPhoneNumber, trigger: 'blur' }
          ]
        },
        addUserFormVisible: false,
        formLabelWidth: '90px'
      }
    },
    created () {
      this.getData()
    },
    computed: {
      data () {
        return this.$store.getters.userList
      },
      userCount () {
        return this.$store.getters.userCount
      }
    },
    methods: {
      // 分页
      handleCurrentChange (val) {
        this.cur_page = val
        this.getData()
      },
      // 获取数据源
      getData () {
        let self = this
        self.$store.dispatch('GetUserList', {pagesize: this.pagesize, currentpage: this.cur_page})
      },
      // 查询按钮触发事件
      search () {
        this.is_search = true
      },
      // 手机号formatter
      formatter (row, column) {
        return row.phonenumber
      },
      filterTag (value, row) {
        return row.tag === value
      },
      handleEdit (index, row) {
        this.$message('编辑第' + (index + 1) + '行')
      },
      handleDelete (index, row) {
        this.$store.dispatch('RemoveUser', {userids: [row.id], page: this.cur_page})
      },
      delAll () {
        let self = this, length = self.multipleSelection.length
        if (length > 0) {
          self.del_list = []
          for (let i = 0; i < length; i++) {
            self.del_list.push(self.multipleSelection[i].id)
          }
          this.$store.dispatch('RemoveUser', {userids: self.del_list, page: this.cur_page})

          self.multipleSelection = []
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      addOne (formName) {
        this.addUserFormVisible = true
      },

      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('AddUser', this.adduser_form).then((res) => {
              this.$refs[formName].resetFields()
              this.addUserFormVisible = false

              this.cur_page = 1
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>
  /*.dialog-footer{*/
    /*padding: 0px 20px 15px;*/
    /*text-align: right;*/
    /*box-sizing: border-box;*/
  /*}*/
  .handle-box{
    margin-bottom: 20px;
  }
  .handle-select{
    width: 120px;
  }
  .handle-input{
    width: 200px;
    display: inline-block;
  }
</style>
