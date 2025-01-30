<template>
    <v-container fluid class="my-3">
        <v-row>
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Simple Buttons</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-btn color="primary mr-2">
                        Button
                    </v-btn>
                    <v-btn color="success mr-2">
                        Button
                    </v-btn>
                    <v-btn color="error mr-2">
                        Button
                    </v-btn>
                    <v-btn color="warning mr-2">
                        Button
                    </v-btn>
                    <v-btn color="info mr-2">
                        Button
                    </v-btn>
                </v-card><br>

                <v-card class="pa-4 card-border-purple">
                    <v-btn variant="outlined" color="primary mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" color="success mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" color="error mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" color="warning mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" color="info mr-2">
                        Button
                    </v-btn>
                </v-card><br>

                <v-card class="pa-4 card-border-purple">
                    <v-btn variant="outlined" prepend-icon="$vuetify" color="primary mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" prepend-icon="$vuetify" color="success mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" prepend-icon="$vuetify" color="error mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" prepend-icon="$vuetify" color="warning mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" append-icon="$vuetify" color="info mr-2">
                        Button
                    </v-btn>
                    <v-btn variant="outlined" append-icon="$vuetify" color="mr-2">
                        Button
                    </v-btn>
                </v-card>


            </v-col>

            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Icon Buttons</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-btn density="compact" icon="mdi-plus" color="info" class="mr-2"></v-btn>
                    <v-btn density="comfortable" icon="$vuetify" color="warning" class="mr-2"></v-btn>
                    <v-btn density="default" icon="mdi-open-in-new" color="success" class="mr-2"></v-btn>

                    <v-btn icon="mdi-account" size="x-small" class="mr-2"></v-btn>
                    <v-btn icon="mdi-plus" size="small" class="mr-2"></v-btn>
                    <v-btn icon="$vuetify" class="mr-2" color="error"></v-btn>
                    <v-btn icon="mdi-open-in-new" size="large" class="mr-2"></v-btn>
                    <v-btn icon="mdi-calendar" size="x-large" class="mr-2"></v-btn>

                    <v-btn density="compact" variant="outlined" icon="mdi-plus" color="info" class="mr-2"></v-btn>
                    <v-btn density="comfortable" variant="outlined" icon="$vuetify" color="warning"
                        class="mr-2"></v-btn>
                    <v-btn density="default" variant="outlined" icon="mdi-open-in-new" color="success"
                        class="mr-2"></v-btn><br>
                </v-card><br>

                <v-card class="pa-4 card-border-purple">
                    <div class="">
                        <v-btn append-icon="mdi-account-circle" prepend-icon="mdi-check-circle" class="mr-3">
                            <template v-slot:prepend>
                                <v-icon color="success"></v-icon>
                            </template>

                            Button

                            <template v-slot:append>
                                <v-icon color="warning"></v-icon>
                            </template>
                        </v-btn>

                        <v-btn append-icon="mdi-account-circle" variant="outlined" prepend-icon="mdi-check-circle"
                            class="mr-3">
                            <template v-slot:prepend>
                                <v-icon color="success"></v-icon>
                            </template>

                            Button

                            <template v-slot:append>
                                <v-icon color="warning"></v-icon>
                            </template>
                        </v-btn>

                        <v-btn append-icon="mdi-account-circle" variant="outlined" prepend-icon="mdi-check-circle"
                            color="success" class="mr-3">
                            <template v-slot:prepend>
                                <v-icon color="success"></v-icon>
                            </template>

                            Button

                            <template v-slot:append>
                                <v-icon color="warning"></v-icon>
                            </template>
                        </v-btn>
                    </div>
                </v-card><br>

                <v-card class="pa-5 card-border-purple">
                    <v-btn variant="outlined" color="primary mr-2" :loading="loading" @click="load">
                        Loadning
                    </v-btn>
                    <v-btn variant="outlined" color="success mr-2" :loading="loading" @click="load">
                        Loadning
                    </v-btn>
                    <v-btn variant="outlined" color="error mr-2" :loading="loading" @click="load">
                        Loadning
                    </v-btn>
                    <v-btn variant="outlined" color="warning mr-2" :loading="loading" @click="load">
                        Loadning
                    </v-btn>
                    <v-btn variant="outlined" color="info mr-2" :loading="loading" @click="load">
                        Loadning
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({ loading: false }),

    methods: {
        load() {
            this.loading = true
            setTimeout(() => (this.loading = false), 3000)
        },
    },
}
</script>

<style></style>