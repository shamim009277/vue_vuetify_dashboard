<template>
    <v-app-bar app color="#4F52B2" dark density="compact">
        <v-app-bar-nav-icon @click="$emit('toggle-sidebar')"></v-app-bar-nav-icon>
        <v-toolbar-title>Admin Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn icon class="mr-3">
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>

        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
            </template>

            <v-list>
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams">
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list :lines="false" density="compact" nav>
                <v-list-item color="primary">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-home" href="#"></v-icon>
                    </template>

                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>

                <v-list-item color="primary">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-cog"></v-icon>
                    </template>

                    <v-list-item-title>Setting</v-list-item-title>
                </v-list-item>

                <v-list-item color="primary">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-account-outline"></v-icon>
                    </template>

                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>

                <v-list-item color="primary">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-logout"></v-icon>
                    </template>

                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script setup>
const emit = defineEmits(["toggle-sidebar"]);
</script>

<style></style>