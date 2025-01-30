<template>
    <v-container fluid class="my-3">
        <v-row>
            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Simple Alarts</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-alert closable density="compact"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
                        title="Alert title" type="success">
                    </v-alert>
                    <br>

                    <v-alert closable density="compact"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima!"
                        title="Alert title" type="warning">
                    </v-alert>
                    <br>
                    <v-alert closable density="compact"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima!"
                        title="Alert title" type="error">
                    </v-alert>
                    <br>
                    <v-alert closable density="compact"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima!"
                        title="Alert title" type="info">
                    </v-alert>
                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Border Alarts</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-alert border="start" border-color="deep-purple accent-4" elevation="2" closable>
                        Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

                        Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus
                        consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
                        nisi.
                    </v-alert>

                    <br>

                    <v-alert border="top" border-color="success" elevation="2" closable>
                        Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero.
                        Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
                    </v-alert>

                    <br>

                    <v-alert border="bottom" border-color="warning" elevation="2" closable>
                        Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit
                        quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo
                        eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit
                        libero, sodales nec, volutpat a, suscipit non, turpis.
                    </v-alert>

                    <br>

                    <v-alert border="end" border-color="error" elevation="2" closable>
                        Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate
                        arcu.
                    </v-alert>
                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Icon Alarts</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-alert closable color="#2A3B4D" density="compact" icon="mdi-firework" theme="dark">
                        Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Quisque
                        ut nisi. Maecenas malesuada.
                    </v-alert>

                    <br>

                    <v-alert closable color="#C51162" icon="mdi-material-design" theme="dark" border>
                        Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
                        faucibus non, euismod id, nulla. In ut quam vitae odio lacinia tincidunt.
                    </v-alert>

                    <br>

                    <v-alert closable color="primary" icon="$vuetify" theme="dark" prominent>
                        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra quis,
                        feugiat a, tellus.
                    </v-alert>
                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Alarts Outline</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-alert closable color="purple" variant="outlined">
                        <template v-slot:title>
                            Outlined Alert
                        </template>

                        Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis
                        nunc et lorem.
                        
                    </v-alert>

                    <br>

                    <v-alert closable type="success" variant="outlined">
                        Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent
                        ac massa at ligula
                        laoreet iaculis.
                    </v-alert>

                    <br>

                    <v-alert closable border="top" type="warning" variant="outlined" prominent>
                        Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl
                        sit amet velit
                        hendrerit rutrum.
                    </v-alert>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

</script>

<style></style>