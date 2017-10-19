<template>
  <div>
    <div class="crumbs title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 资源管理</el-breadcrumb-item>
        <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

  <el-row :gutter="20">
    <el-col :span="8">
        <div class="handle-box">
            <el-breadcrumb separator="|">
              <el-breadcrumb-item><i class="el-icon-plus"></i> 新增</el-breadcrumb-item>
              <el-breadcrumb-item><i class="el-icon-edit"></i> 编辑</el-breadcrumb-item>
              <el-breadcrumb-item><i class="el-icon-delete"></i> 删除</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-tree
          :data="dataSystem"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[1, 4, 9, 11,12]"
          :default-checked-keys="[]"
          :props="defaultProps">
        </el-tree>
    </el-col>
    <el-col :span="16">
        <div class="handle-box">
          <el-breadcrumb separator="|">
            <el-breadcrumb-item><i class="el-icon-plus"></i> 新增</el-breadcrumb-item>
            <el-breadcrumb-item><i class="el-icon-edit"></i> 编辑</el-breadcrumb-item>
            <el-breadcrumb-item><i class="el-icon-delete"></i> 删除</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-tree
          :data="dataMenu"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[1, 2, 3, 4]"
          :default-checked-keys="[]"
          :props="defaultProps">
        </el-tree>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataSystem: [{
          id: 1,
          label: '系统根节点',
          disabled: true,
          children: [{
            id: 4,
            label: '基础数据库共享',
            disabled: true
          },{
            id: 9,
            label: '用户自定义系统',
            children: [{
              id: 11,
              label: '管理员自定义子系统'
            }]
          },{
            id: 12,
            label: '通用系统',
            children:[{
              id: 13,
              label: '钻孔数据库'
            },{
              id: 14,
              label: '地质矿产网格化管理系统'
            },{
              id: 15,
              label: '地质资料集群化产业化服务系统'
            },{
              id: 16,
              label: '房产管理地理信息系统'
            },{
              id: 17,
              label: '青州地质矿产管理系统'
            }]
          }]
        }],
        dataMenu: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    created () {
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 8px;
  }
  /*.dialog-footer{*/
    /*padding: 0px 20px 15px;*/
    /*text-align: right;*/
    /*box-sizing: border-box;*/
  /*}*/
  .handle-box{
    margin-bottom: 10px;
  }
  .handle-select{
    width: 120px;
  }
  .handle-input{
    width: 180px;
    display: inline-block;
  }
  .title{
    background: #f9fafc;
    padding: 10px 0;
  }
</style>
