import Vue from 'vue'
import Router from 'vue-router'

const login = resolve=>System.import('@/pages/login')
const index = resolve=>System.import('@/pages/index')

Vue.use(Router);

const router = new Router({
	routes: [
	{
		path: '/login',
		name:"登录",
		component: login
	},
	{
		path: '/index',
		name:"接单平台",
		component: index
	},
	]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router;
