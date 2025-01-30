<template>
    <v-container fluid class="my-3">
        <v-row>
            <v-col cols="12" md="4">
                <v-card subtitle="This is a card subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
                    title="This is a title"></v-card>

                <div class="text-center text-caption">Using Props Only</div>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <template v-slot:title>
                        This is a title
                    </template>

                    <template v-slot:subtitle>
                        This is a card subtitle
                    </template>

                    <template v-slot:text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                        labore
                        voluptatibus!
                    </template>
                </v-card>

                <div class="text-center text-caption">Using Slots Only</div>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <v-card-item>
                        <v-card-title>This is a title</v-card-title>

                        <v-card-subtitle>This is a card subtitle</v-card-subtitle>
                    </v-card-item>

                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                        labore
                        voluptatibus!
                    </v-card-text>
                </v-card>

                <div class="text-center text-caption">Using Markup Only</div>
            </v-col>

            <v-col cols="12" md="4">
                <v-card class="mx-auto" prepend-icon="$vuetify" subtitle="The Vue UI Library">
                    <template v-slot:title>
                        <span class="font-weight-black">Welcome to Vuetify</span>
                    </template>

                    <v-card-text class="bg-surface-light pt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                        labore
                        voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro
                        libero rerum
                        unde voluptatem!
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card class="mx-auto" color="surface-variant"
                    image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg" subtitle="Take a walk down the beach Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est
                        labore
                        voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro
                        libero rerum
                        unde voluptatem!" title="Evening sunset">
                    <template v-slot:actions>
                        <v-btn append-icon="mdi-chevron-right" color="red-lighten-2" text="Book Activity"
                            variant="outlined" block></v-btn>
                    </template>
                </v-card>
            </v-col>
        </v-row>

        <v-row align="center" justify="center" dense>
            <v-col cols="12" md="3">
                <v-card append-icon="mdi-check" class="mx-auto" prepend-icon="mdi-account"
                    subtitle="prepend-icon and append-icon" title="Icons">
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="3">
                <v-card class="mx-auto" subtitle="prepend and append" title="Icons">
                    <template v-slot:prepend>
                        <v-icon color="primary" icon="mdi-account"></v-icon>
                    </template>
                    <template v-slot:append>
                        <v-icon color="success" icon="mdi-check"></v-icon>
                    </template>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="3">
                <v-card append-avatar="https://cdn.vuetifyjs.com/images/john.jpg" class="mx-auto"
                    prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                    subtitle="prepend-avatar and append-avatar" title="Avatars">
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="3">
                <v-card class="mx-auto" subtitle="prepend and append" title="Avatars">
                    <template v-slot:prepend>
                        <v-avatar color="blue-darken-2">
                            <v-icon icon="mdi-alarm"></v-icon>
                        </v-avatar>
                    </template>
                    <template v-slot:append>
                        <v-avatar size="24">
                            <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                        </v-avatar>
                    </template>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
                </v-card>
            </v-col>


        </v-row>

        <v-row>
            <v-col cols="12" md="3">
                <v-card class="mx-auto">
                    <v-img color="surface-variant" height="200"
                        src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" cover>
                        <v-toolbar color="transparent">
                            <template v-slot:prepend>
                                <v-btn icon="$menu"></v-btn>
                            </template>

                            <v-toolbar-title class="text-h6" text="Messages"></v-toolbar-title>

                            <template v-slot:append>
                                <v-btn icon="mdi-dots-vertical"></v-btn>
                            </template>
                        </v-toolbar>
                    </v-img>

                    <v-card-text>
                        <div class="font-weight-bold ms-1 mb-2">Today</div>

                        <v-timeline align="start" density="compact">
                            <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                                size="x-small">
                                <div class="mb-4">
                                    <div class="font-weight-normal">
                                        <strong>{{ message.from }}</strong> @{{ message.time }}
                                    </div>

                                    <div>{{ message.message }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="3">
                <v-card class="mx-auto">
                    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

                    <v-card-title>
                        Top western road trips
                    </v-card-title>

                    <v-card-subtitle>
                        1,000 miles of wonder
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="orange-lighten-2" text="Explore"></v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                                won't have
                                time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go
                                with that
                                data file! Hey, you add a one and two zeros to that or we walk! You're going to do his
                                laundry?
                                I've got to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>

            <v-col cols="12" md="3">
                <v-card :disabled="loading" :loading="loading" class="mx-auto" max-width="374">
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear :active="isActive" color="deep-purple" height="4"
                            indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" cover></v-img>

                    <v-card-item>
                        <v-card-title>Cafe Badilico</v-card-title>

                        <v-card-subtitle>
                            <span class="me-1">Local Favorite</span>

                            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                        </v-card-subtitle>
                    </v-card-item>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :model-value="4.5" color="amber" density="compact" size="small" half-increments
                                readonly></v-rating>

                            <div class="text-grey ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            $ • Italian, Cafe
                        </div>

                        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                            seating.
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-title>Tonight's availability</v-card-title>

                    <div class="px-4 mb-2">
                        <v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
                            <v-chip>5:30PM</v-chip>

                            <v-chip>7:30PM</v-chip>

                            <v-chip>8:00PM</v-chip>

                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </div>

                    <v-card-actions>
                        <v-btn color="deep-purple-lighten-2" text="Reserve" block border @click="reserve"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        show: false,
        messages: [
            {
                from: 'You',
                message: `Sure, I'll see you later.`,
                time: '10:42am',
                color: 'deep-purple-lighten-1',
            },
            {
                from: 'John Doe',
                message: 'Yeah, sure. Does 1:00pm work?',
                time: '10:37am',
                color: 'green',
            },
            {
                from: 'You',
                message: 'Did you still want to grab lunch today?',
                time: '9:47am',
                color: 'deep-purple-lighten-1',
            },
        ],
        loading: false,
        election: 1,
    }),
    methods: {
        reserve() {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>

<style></style>