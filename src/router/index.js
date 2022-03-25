import { createRouter, createWebHistory } from "vue-router"
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Student from '@/components/CreateStudent.vue'
import Menu from '@/components/Menu.vue'
import Users from '@/components/Users.vue'
import Reports from '@/components/Reports.vue'
import Students from '@/components/Students.vue'
import Audit from '@/components/Audit.vue'

const routes = [
  { path: "/", name:"Login", component: Login },
  { path: "/register", name:"Register", component: Register },
  { path: "/student", name:"Student", component: Student },
  { path: "/menu", name:"Menu", component: Menu },
  { path: "/users", name: "Users", component: Users},
  { path: "/reports", name: "Reports", component: Reports},
  { path: "/students", name: "Students", component: Students},
  { path: "/audit", name: "Audit", component: Audit},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router