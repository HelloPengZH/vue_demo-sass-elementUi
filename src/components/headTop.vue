<template>
	<div id="header" class="clearfix">
		<div class="logo fl">
			<img src="../../../static/images/logo.png" height="20" width="70" alt="">
		</div>
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo fl" mode="horizontal" @select="handleSelect" router>
			<el-menu-item index="first" :route="{name:'first'}">首页</el-menu-item>
            <el-menu-item v-for="(item, index) in headerList" :index="item.menu.url" @click='goPage(item)' v-if="item.auth" :key="index">{{item.menu.name}}</el-menu-item>
		</el-menu>
		<div class="fr right-nav">
			<el-badge is-dot class="fl item fa fa-envelope-o"></el-badge>
			<div class="admin fr">
				<el-dropdown @command="handleCommand" trigger="click">
			      	<span class="el-dropdown-link">
			        	{{ admin.uname }}&nbsp;<i class="el-icon-arrow-down el-icon--right"></i>
			      	</span>
					<el-dropdown-menu slot="dropdown" class="header_dropdown">
						<el-dropdown-item command="设置"><i class="fa fa-cog"></i>设置</el-dropdown-item>
						<el-dropdown-item command="注销账户"><i class="fa fa-power-off"></i>注销账户</el-dropdown-item>
					</el-dropdown-menu>
			    </el-dropdown>
			</div>
		</div>
        <vMenu :treeModel="treeModel" :activeIndex="$route.name"></vMenu>
	</div>
</template>

<script>
    import vMenu from './Menu.vue'
	export default {
        components: {
            vMenu,
        },
        computed: {
            activeIndex(){         //返回的一级菜单的name名
		        return this.$route.path.split('/')[2]
            },
            headerList() {
		        return this.$store.state.menu.allMenu
            },
            admin() {
                return this.$store.getters.doneAdmin
            },
            //写入侧边栏菜单数据
            treeModel() {
                return this.$store.state.menu.childMenu
            }
        },
        //刷新 侧边菜单       数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
        beforeUpdate() {
            this.$nextTick(function () {
                this.$store.commit('getMenuList', this.activeIndex)
            })
        },
		methods: {
			//导航按钮
			handleSelect(key, keyPath) {

			},
			//个人设置
		    handleCommand(command) {
				if(command == '注销账户') {
                    this.$confirm('您确定要退出, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        localStorage.removeItem('admin');
                        location.href = this.$store.state.base.loginIp
                    }).catch(() => {});
                }
            },
            goPage(router){
                var ary = router.childrenNode;
                for(var i=0; i<ary.length; i++){
                    //权限不在子菜单
                    if(ary[i].auth && ary[i].childrenNode.length == 0){
                        this.$router.push({name: ary[i].menu.url});
                        return
                    }
                    //权限在子菜单
                    if(ary[i].auth && ary[i].childrenNode.length > 0){
                        for(let l=0; l<ary[i].childrenNode.length; l++){
                            if(ary[i].childrenNode[l].auth && ary[i].childrenNode[l].childrenNode.length == 0){
                                this.$router.push({name: ary[i].childrenNode[l].menu.url});
                                return
                            }
                        }
                    }
                }
            }
		},
        watch: {
            '$route' (to, from) {
                this.$store.commit('getMenuList', this.activeIndex)
            }
        }
	}
</script>

<style lang="scss">
	@import '../../assets/style/header.scss';
</style>
