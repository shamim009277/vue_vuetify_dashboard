<template>
    <v-card class="pa-4 card-border-purple" title="User Registration" prepend-icon="mdi-account-check"
        density="compact">
        <v-form density="compact" class="mt-5" @submit.prevent>
            <v-row>
                <v-col cols="12" md="6" lg="6">
                    <v-text-field label="First Name" type="text" v-model="fname" :rules="rules" variant="underlined" density="compact"
                        color="primary"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                    <v-text-field label="Last Name" type="text" v-model="lname" :rules="rules" variant="underlined" density="compact"
                        color="primary"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                    <v-text-field label="Email" type="email" v-model="email" :rules="rules" variant="underlined" density="compact"
                        color="primary"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                    <v-text-field label="Password" type="password" v-model="password" :rules="rules" variant="underlined"
                        density="compact" color="primary"></v-text-field>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                    <v-text-field label="Phone Number" type="text" v-model="phone" :rules="rules" variant="underlined"
                        density="compact" color="primary"></v-text-field>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                    <v-text-field label="Address" type="text" v-model="address" :rules="rules" variant="underlined" density="compact"
                        color="primary"></v-text-field>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                    <v-btn class="mt-2 float-right" prepend-icon="$vuetify" type="submit" color="info">Submit</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        fname: '',
        rules: [
            value => {
                if (value) return true

                return 'You must enter a first name.'
            },
        ],
        lname: '',
        rules: [
            value => {
                if (value) return true

                return 'You must enter a last name.'
            },
        ],
        email: '',
        rules: [
            value => {
                if (value) return true

                return 'You must enter a valid email address.'
            },
        ],
        password: '',
        rules: [
            value => {
                if (value) return true

                return 'You must enter a password.'
            },
        ],
        phone: '',
        rules: [
            value => {
                if (value) return true

                return 'You must enter a phone.'
            },
        ],
    }),
}
</script>

<style></style>