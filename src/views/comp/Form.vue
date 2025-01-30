<template>
    <v-container fluid class="my-3">
        <v-row>
            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Text Inputs</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-text-field label="Label" variant="outlined"></v-text-field>
                    <v-text-field label="Label" variant="outlined" density="compact"></v-text-field>
                    <v-text-field label="Label" variant="outlined" density="compact" color="primary"></v-text-field>
                    <v-text-field label="Label" variant="underlined" density="compact" color="info"></v-text-field>
                    <v-text-field label="Label" variant="solo" density="compact" color="info" clearable></v-text-field>
                    <v-text-field label="Label" variant="underlined" density="compact" color="info"
                        clearable></v-text-field>
                    <v-text-field label="Disabled" variant="underlined" density="compact" color="info" clearable
                        disabled></v-text-field>

                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Icon Inputs</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-text-field label="Label" prepend-icon="mdi-comment" variant="outlined" density="compact"
                        color="primary"></v-text-field>
                    <v-text-field label="Label" prepend-inner-icon="mdi-account" color="warning" variant="outlined"
                        density="compact"></v-text-field>
                    <v-text-field label="Label" prepend-inner-icon="mdi-account" variant="underlined" density="compact"
                        color="info"></v-text-field>
                    <v-text-field label="Label" append-icon="mdi-account" variant="solo" density="compact" color="info"
                        clearable></v-text-field>
                    <v-text-field label="Label" append-inner-icon="mdi-account" variant="underlined" density="compact"
                        color="info" clearable></v-text-field>
                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Auto Complete</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-autocomplete clearable chips label="Autocomplete"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" multiple
                        variant="outlined" density="compact" color="info"></v-autocomplete>

                    <v-autocomplete clearable chips label="Autocomplete"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" multiple
                        variant="solo" density="compact"></v-autocomplete>

                    <v-radio-group density="compact">
                        <v-radio color="primary" label="primary" value="primary"></v-radio>
                        <v-radio color="secondary" label="secondary" value="secondary"></v-radio>
                        <v-radio color="success" label="success" value="success"></v-radio>
                        <v-radio color="info" label="info" value="info"></v-radio>
                        <v-radio color="warning" label="warning" value="warning"></v-radio>
                        <v-radio color="error" label="error" value="error"></v-radio>
                    </v-radio-group>
                </v-card>


            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Select Input</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-select clearable chips label="Select"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="solo"
                        density="compact"></v-select>

                    <v-select clearable chips label="Select Multiple"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" multiple
                        variant="solo" density="compact"></v-select>

                    <v-select clearable chips label="Select Multiple"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" multiple
                        variant="solo"></v-select>

                    <v-select clearable variant="solo" v-model="favorites" :items="states"
                        hint="Pick your favorite states" label="Select" multiple persistent-hint density="compact"
                        color="success"></v-select>
                </v-card>
            </v-col>

            <!-- Card -->
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Other Input</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-file-input clearable label="File input" variant="outlined"></v-file-input>
                    <v-file-input clearable label="File input" variant="underlined"></v-file-input>
                    <v-file-input label="File input" variant="underlined" counter multiple show-size></v-file-input>

                    <v-text-field label="Select Date" type="date" variant="outlined" density="comfortable"
                        color="primary" prepend-inner-icon="mdi-calendar"></v-text-field>

                    <v-text-field label="Select Date" type="time" variant="outlined" density="comfortable"
                        color="primary" prepend-inner-icon="mdi-calendar"></v-text-field>

                    <v-text-field label="Select Date" type="date" variant="outlined" density="comfortable"
                        color="primary"></v-text-field>

                    <v-text-field label="Select Date" type="time" variant="outlined" density="comfortable"
                        color="primary"></v-text-field>

                    <v-slider max="100" min="10" step="5" color="orange" label="color"></v-slider>
                    <v-range-slider v-model="value" step="10" thumb-label="always" color="info"></v-range-slider>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            value: [20, 40],
            favorites: [],
            states: [
                'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada',
                'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
                'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
            ],
        }
    },
}
</script>

<style></style>