<template>
    <v-container fluid class="d-flex align-center justify-center full-height" style="height: 100vh;">
        <v-row justify="center" align="center">
            <v-col cols="12" md="6" lg="4">
                <v-card class="pa-4 card-border-purple">
                    <div class="border border-info pa-10">
                        <div class="text-center">
                            <img src="../../assets/img/for.png" alt="" width="100px" height="100px">
                        </div>
                        <div class="text-center">
                            <h3 class="text-h6">Forgot Password?</h3>
                            <p>Enter your registered email ID to reset the password ? </p>
                        </div>

                        <div class="text-center custom-top">
                            <v-form density="compact" class="mt-5" @submit.prevent>
                                <v-text-field label="Email Address" type="email" prepend-inner-icon="mdi-email"
                                    v-model="email" variant="outlined" density="compact" color="info"></v-text-field>


                                <v-btn class="w-100" prepend-icon="mdi-open-in-new" type="submit" color="primary">
                                    Send
                                </v-btn><br><br>

                                <router-link :to="{ name: 'login' }" class="router-link">
                                    <v-btn class="w-100" prepend-icon="mdi-open-in-new" type="submit" color="warning">
                                        Send
                                    </v-btn>
                                </router-link>
                            </v-form>
                        </div>
                    </div>
                </v-card><br>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

</script>

<style>
.custom-top {
    margin-top: 60px !important;
}

.router-link {
    text-decoration: none;
    color: #fff;
    margin: 0px;
    padding: 0px;
}
</style>