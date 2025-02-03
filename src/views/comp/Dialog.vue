<template>
    <v-container fluid class="my-3">
        <v-row>
            <v-col cols="12" md="6" lg="6">
                <h4 class="text-body-1 text-gray mb-3">Simple Dialogs</h4>
                <hr class="hr-purple"><br>
                <v-card class="pa-4 card-border-purple">
                    <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps" color="info" text="Open Dialog" variant="flat"></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card title="Dialog">
                                <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                    <div class="py-4">
                        <v-btn @click="dialog = true" color="warning">
                            Open Dialog
                        </v-btn>

                        <v-dialog v-model="dialog" width="auto">
                            <v-card max-width="400" prepend-icon="mdi-update"
                                text="Your application will relaunch automatically after the update is complete."
                                title="Update in progress">
                                <template v-slot:actions>
                                    <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
                                </template>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-card><br>

                <v-card class="pa-4 card-border-purple">
                    <div class="py-4">
                        <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn prepend-icon="mdi-cog" size="small" text="Settings"
                                    v-bind="activatorProps"></v-btn>
                            </template>

                            <v-card>
                                <v-toolbar>
                                    <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

                                    <v-toolbar-title>Settings</v-toolbar-title>

                                    <v-spacer></v-spacer>

                                    <v-toolbar-items>
                                        <v-btn text="Save" variant="text" @click="dialog = false"></v-btn>
                                    </v-toolbar-items>
                                </v-toolbar>

                                <v-list lines="two">
                                    <v-list-subheader>User Controls</v-list-subheader>

                                    <v-list-item
                                        subtitle="Set the content filtering level to restrict apps that can be downloaded"
                                        title="Content filtering" link></v-list-item>

                                    <v-list-item
                                        subtitle="Require password for purchase or use password to restrict purchase"
                                        title="Password" link></v-list-item>

                                    <v-divider></v-divider>

                                    <v-list-subheader>General</v-list-subheader>

                                    <v-list-item subtitle="Notify me about updates to apps or games that I downloaded"
                                        title="Notifications" @click="notifications = !notifications">
                                        <template v-slot:prepend>
                                            <v-list-item-action start>
                                                <v-checkbox-btn v-model="notifications"
                                                    color="primary"></v-checkbox-btn>
                                            </v-list-item-action>
                                        </template>
                                    </v-list-item>

                                    <v-list-item subtitle="Auto-update apps at any time. Data charges may apply"
                                        title="Sound" @click="sound = !sound">
                                        <template v-slot:prepend>
                                            <v-list-item-action start>
                                                <v-checkbox-btn v-model="sound" color="primary"></v-checkbox-btn>
                                            </v-list-item-action>
                                        </template>
                                    </v-list-item>

                                    <v-list-item subtitle="Automatically add home screen widgets"
                                        title="Auto-add widgets" @click="widgets = !widgets">
                                        <template v-slot:prepend>
                                            <v-list-item-action start>
                                                <v-checkbox-btn v-model="widgets" color="primary"></v-checkbox-btn>
                                            </v-list-item-action>
                                        </template>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        }
    },
}
</script>

<style></style>