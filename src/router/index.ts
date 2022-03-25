import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath;
  if (!window.history.state.back) window.history.state.back = from.fullPath;
  // 手动修改history的state
  return next();
});

export default router