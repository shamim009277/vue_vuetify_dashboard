<template>
    <v-container fluid class="my-3">
        <v-row>
            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Basic Form</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple" title="User Registration" prepend-icon="mdi-account-check" density="compact">
                    <v-form density="compact" class="mt-5" @submit.prevent>
                        <v-row>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="First Name" type="text" v-model="fname" variant="outlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Last Name" type="text" v-model="fname" variant="outlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Email" type="email" v-model="email" variant="outlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Password" type="password" v-model="password" variant="outlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" lg="12">
                                <v-textarea label="Address" variant="outlined" density="compact" color="primary"></v-textarea>
                            </v-col>

                            <v-col cols="12" md="12" lg="12">
                                <v-btn class="mt-2 float-right" prepend-icon="$vuetify" type="submit" color="success">Submit</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Basic Form Icon</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple" title="User Registration (Icons)" prepend-icon="mdi-account-check" density="compact">
                    <v-form density="compact" class="mt-5" @submit.prevent>
                        <v-row>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="First Name" prepend-inner-icon="mdi-account" type="text" v-model="fname" variant="outlined"
                                    density="compact" color="info"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Last Name" prepend-inner-icon="mdi-account" type="text" v-model="fname" variant="outlined"
                                    density="compact" color="info"></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Email" type="email" prepend-inner-icon="mdi-email" v-model="email" variant="outlined"
                                    density="compact" color="info"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Password" type="password" prepend-inner-icon="mdi-lock" v-model="password" variant="outlined"
                                    density="compact" color="info"></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" lg="12">
                                <v-textarea label="Address" variant="outlined" prepend-inner-icon="mdi-map-marker" density="compact" color="info"></v-textarea>
                            </v-col>

                            <v-col cols="12" md="12" lg="12">
                                <v-btn class="mt-2 float-right" prepend-icon="mdi-open-in-new" type="submit" color="warning">Submit</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Basic Form</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple" title="User Registration" prepend-icon="mdi-account-check" density="compact">
                    <v-form density="compact" class="mt-5" @submit.prevent>
                        <v-row>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="First Name" type="text" v-model="fname" variant="underlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Last Name" type="text" v-model="fname" variant="underlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Email" type="email" v-model="email" variant="underlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" lg="6">
                                <v-text-field label="Password" type="password" v-model="password" variant="underlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" lg="12">
                                <v-text-field label="Phone Number" type="text" v-model="phone" variant="underlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" lg="12">
                                <v-text-field label="Address" type="text" v-model="address" variant="underlined"
                                    density="compact" color="primary"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" lg="12">
                                <v-btn class="mt-2 float-right" prepend-icon="$vuetify" type="submit" color="info">Submit</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Validation Form</h4>
                <hr class="hr-purple"><br>
                <ValForm />
            </v-col>

        </v-row>
    </v-container>
</template>

<script setup>
import ValForm from '@/components/form/ValForm.vue'
</script>

<style></style>