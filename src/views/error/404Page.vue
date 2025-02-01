<template>
    <v-container fluid class="d-flex align-center justify-center full-height" style="height: 90vh;">
        <v-row justify="center" align="center">
            <v-col cols="12" md="6" lg="6">
                <v-card class="pa-10 card-border-purple text-center">
                    <v-row align="center" justify="space-between">
                        <!-- Left Side Information -->
                        <v-col class="justify-end align-center">
                            <h4 class="text-gray font">Opps! ...</h4>
                            <h3 class="text-h6 mb-1 font-weight-bold" style="color:#7461E8">404 - Page not found</h3>
                            <p class="text-subtitle-2 text-gray">
                                The page you are looking for can't be found
                            </p><br><br>
                            <router-link :to="{ name: 'home' }" class="router-link">
                                <v-btn class="w-10" prepend-icon="mdi-arrow-left-bold" type="submit" color="warning">
                                    Home
                                </v-btn>
                            </router-link>
                        </v-col>

                        <!-- Right Side Icon/Button -->
                        <v-col class="d-flex justify-end align-center" cols="auto">
                            <img src="../../assets/img/404.png" alt="" width="400px" cover>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

</script>

<style>
.router-link {
    text-decoration: none;
    color: #fff;
    margin: 0px;
    padding: 0px;
}

.font {
    font-size: 32px !important;
}
</style>