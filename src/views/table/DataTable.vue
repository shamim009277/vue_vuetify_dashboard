<template>
  <div>
    <v-container fluid class="my-3">
      <v-row>
        <!-- Card -->
        <v-col cols="12" md="12" lg="12">
          <h4 class="text-body-1 text-gray mb-3">Simple Data Table (Server Side)</h4>
          <hr class="hr-purple"><br>
          <v-card class="pa-4 card-border-purple">
              <SimpleDataTable />
          </v-card>
        </v-col>

        <v-col cols="12" md="12" lg="12">
          <FilterDataTable />
        </v-col>


        <v-col cols="12" md="12" lg="12">
          <SearchTable />
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import SimpleDataTable from '@/components/table/SimpleDataTable.vue'
import FilterDataTable from '@/components/table/FilterDataTable.vue'
import SearchTable from '@/components/table/SearchTable.vue'
</script>

<style>

</style>