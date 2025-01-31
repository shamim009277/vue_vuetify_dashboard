<template>
    <v-container fluid class="d-flex align-center justify-center" style="height: 100vh;">
        <v-row justify="center" align="center">
            <v-col cols="12" md="6" lg="4">
                <v-card class="pa-4 card-border-purple">
                    <div class="border border-info pa-10">
                        <div class="text-center">
                            <h3 class="text-h6">Sign Up</h3>
                            <p>Already have an account? <RouterLink :to="{ name: 'login' }"><a href="#">Sign in here</a></RouterLink></p>
                        </div>

                        <div class="text-center mt-10">
                            <v-btn class="w-100 mb-5" prepend-icon="mdi-google">
                                <template v-slot:prepend>
                                    <v-icon color="success"></v-icon>
                                </template>
                                <span class="text-capitalize text-bold text-center">Sign up with Google</span>
                            </v-btn>

                            <v-btn class="w-100" prepend-icon="mdi-facebook" color="info">
                                <template v-slot:prepend>
                                    <v-icon color="white"></v-icon>
                                </template>
                                <span class="text-capitalize text-bold text-center">Sign up with Facebook</span>
                            </v-btn>
                        </div>

                        <div class="login-separater text-center">
                            <span>OR SIGN UP WITH EMAIL</span>
                        </div>

                        <div class="text-center custom-top">
                            <v-form density="compact" class="mt-5" @submit.prevent>
                                <v-text-field label="First Name" prepend-inner-icon="mdi-account" type="text"
                                    v-model="fname" variant="outlined" density="compact" color="info"></v-text-field>

                                <v-text-field label="Last Name" prepend-inner-icon="mdi-account" type="text"
                                    v-model="fname" variant="outlined" density="compact" color="info"></v-text-field>

                                <v-text-field label="Phone Number" prepend-inner-icon="mdi-phone" type="text"
                                    v-model="phone" variant="outlined" density="compact" color="info"></v-text-field>

                                <v-text-field label="Email Address" type="email" prepend-inner-icon="mdi-email"
                                    v-model="email" variant="outlined" density="compact" color="info"></v-text-field>



                                <v-text-field label="Password" type="password" prepend-inner-icon="mdi-lock"
                                    v-model="password" variant="outlined" density="compact" color="info"></v-text-field>

                                <v-switch v-model="rememberMe" color="primary" density="compact"
                                    label="I read and agree to Terms & Conditions" hide-details></v-switch><br>

                                <v-btn class="w-100" prepend-icon="mdi-open-in-new" type="submit" color="primary">
                                    Register
                                </v-btn>

                            </v-form>
                        </div>
                    </div>
                </v-card><br>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const people = ref(['1']);
</script>

<style>
.login-separater {
    position: relative;
    top: 26px;
    margin-top: -10px;
    background: #fff;
    padding: 5px;
    font-size: 12px;
    color: #cbcbcb;
    z-index: 1;
}

.custom-top {
    margin-top: 60px !important;
}
</style>