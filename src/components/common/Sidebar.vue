<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: 'el-icon-menu',
            index: 'main',
            title: '首页'
          },
          {
            icon: 'el-icon-menu',
            index: '2',
            title: '权限管理',
            subs: [
              {
                index: 'basetable',
                title: '用户管理'
              },
              {
                index: 'vuetable',
                title: '角色管理'
              },
              {
                index: 'vuetable',
                title: '令牌管理'
              }
            ]
          },
          {
            icon: 'el-icon-menu',
            index: '3',
            title: '资源管理',
            subs: [
              {
                index: 'baseform',
                title: '菜单管理'
              },
              {
                index: 'vueeditor',
                title: '地图服务管理'
              },
              {
                index: 'markdown',
                title: '空间数据管理'
              },
              {
                index: 'upload',
                title: '地图样式管理'
              },
              {
                index: 'upload',
                title: '数据接口管理'
              }
            ]
          },
          {
            icon: 'el-icon-menu',
            index: '8',
            title: '字典管理'
          }
        ]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    }
  }
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 220px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
