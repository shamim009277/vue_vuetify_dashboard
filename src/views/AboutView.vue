<template>
  <v-row align="center" justify="space-between">
    <v-col cols="12" md="6" lg="6">
      <v-card-title class="text-h5 font-weight-bold color-gray">
        Components
      </v-card-title>
    </v-col>

    <v-col cols="12" md="6" lg="6" class="d-flex justify-end">
      <v-breadcrumbs :items="items">
        <template v-slot:prepend>
          <v-icon icon="mdi-home" size="small"></v-icon>
        </template>
      </v-breadcrumbs>
    </v-col>
  </v-row>
</template>

<script setup>
const items = [
  {
    title: 'Dashboard',
    disabled: false,
    href: 'breadcrumbs_dashboard',
  },
  {
    title: 'Link 1',
    disabled: false,
    href: 'breadcrumbs_link_1',
  },
  {
    title: 'Link 2',
    disabled: true,
    href: 'breadcrumbs_link_2',
  },
]
</script>

<style></style>
