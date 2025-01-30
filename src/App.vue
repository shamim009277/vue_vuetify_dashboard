
<script setup>
import { ref } from "vue";
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'
const isDrawerOpen = ref(true);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
}
</script>

<template>
  <v-app>
    <!-- Layout Wrapper -->
    <v-container fluid class="pa-0">
      <!-- Topbar -->
      <Topbar @toggle-sidebar="toggleDrawer" />

      <!-- Sidebar -->
      <Sidebar v-model:isDrawerOpen="isDrawerOpen" />

      <!-- Main Content -->
      <v-main>
        <RouterView />
      </v-main>

      <!-- Footer -->
      <Footer />
    </v-container>
  </v-app>
</template>

<style>
body {
  margin: 0;
}
.card-border-purple {
  border-left: 3px solid #7461E8 !important;
}

.card-border-red {
  border-left: 3px solid #F85C92 !important;
}

.card-border-cyan {
  border-left: 3px solid #50CFDD !important;
}

.card-border-green {
  border-left: 3px solid #15CA20 !important;
}

.v-list-item__content {
  display: flex;
}
.footer{
  height: 30px;
}

/* Customize list item */
.custom-list-item {
  padding: 8px 16px;
  color: #4f52b2;
  font-weight: bold;
}

.custom-exact-active {
  color: #FFFFFF;
  font-weight: bolder;
}
</style>
