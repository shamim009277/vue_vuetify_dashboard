import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Table from '@/views/table/Layout.vue'
import SimpleTable from '@/views/table/Simple.vue'
import DataTable from '@/views/table/DataTable.vue'
import Alerts from '@/views/comp/Alert.vue'
import Card from '@/views/comp/Card.vue'
import Button from '@/views/comp/Button.vue'
import Form from '@/views/comp/Form.vue' 
import FormLayout from '@/views/comp/FormLayout.vue' 
import Login from '@/views/authentication/Login.vue'
import Register from '@/views/authentication/Register.vue'
import ForgetPassword from '@/views/authentication/ForgetPass.vue'
import ResetPassword from '@/views/authentication/ResetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/table',
      redirect:'/simple',
      name: 'table',
      component: Table,
      children: [
          {path: '/simple', name: 'simpletable', component: SimpleTable},
          {path: '/datatable', name: 'datatable', component: DataTable}
      ]
    },
    {
      path: '/alarts',
      name: 'alarts',
      component: Alerts,
    },
    {
      path: '/card',
      name: 'card',
      component: Card,
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Button,
    },
    {
      path: '/form-element',
      name: 'form',
      component: Form,
    },
    {
      path: '/form-layout',
      name: 'formlayout',
      component: FormLayout,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/forget-password',
      name: 'forgetpassword',
      component: ForgetPassword,
    },
    {
      path: '/reset-password',
      name: 'resetpassword',
      component: ResetPassword,
    },
  ],
})

export default router
