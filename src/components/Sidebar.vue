<template>
    <v-navigation-drawer :model-value="isDrawerOpen" @update:model-value="emit('update:isDrawerOpen', $event)"
        :expand-on-hover="true" rail app color="#4F52B2">
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                title="Sandra Adams"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>

            <RouterLink :to="{ name: 'home' }" active-class="custom-exact-active" style="display: flex;"><v-list-item
                    prepend-icon="mdi-home" link title="Dashbaord"></v-list-item></RouterLink>
            <RouterLink :to="{ name: 'about' }" active-class="custom-exact-active" style="display: flex;"><v-list-item
                    prepend-icon="mdi-folder" link title="About"></v-list-item></RouterLink>

            <v-list-group value="Component" prepend-icon="mdi-tag-heart" density="compact" nav
                active-class="custom-exact-active">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Component"></v-list-item>
                </template>

                <RouterLink :to="{ name: 'alarts' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Alarts"
                        value="simpletable"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'datatable' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Badges"
                        value="datatable"></v-list-item>
                </RouterLink>

                <RouterLink :to="{ name: 'buttons' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Buttons"
                        value="buttons"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'card' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Cards"
                        value="card"></v-list-item>
                </RouterLink>
            </v-list-group>


            <v-list-group value="Table" prepend-icon="mdi-table-of-contents" density="compact" nav
                active-class="custom-exact-active">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Table"></v-list-item>
                </template>

                <RouterLink :to="{ name: 'simpletable' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Simple Table"
                        value="simpletable"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'datatable' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Data Table"
                        value="datatable"></v-list-item>
                </RouterLink>
            </v-list-group>

            <v-list-group value="Form" prepend-icon="mdi-pencil-box-outline" density="compact" nav
                active-class="custom-exact-active">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Form"></v-list-item>
                </template>

                <RouterLink :to="{ name: 'form' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Form Elements"
                        value="form"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'formlayout' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Form Layout"
                        value="formlayout"></v-list-item>
                </RouterLink>
            </v-list-group>

            <v-list-group value="Authentication" prepend-icon="mdi-lock" density="compact" nav
                active-class="custom-exact-active">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Authentication"></v-list-item>
                </template>

                <RouterLink :to="{ name: 'login' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Login"
                        value="login"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'register' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Register"
                        value="register"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'forgetpassword' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Forgot Password"
                        value="forgetpassword"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'resetpassword' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Reset Password"
                        value="resetpassword"></v-list-item>
                </RouterLink>
            </v-list-group>

            <v-list-group value="Error" prepend-icon="mdi-alert" density="compact" nav
                active-class="custom-exact-active">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Errors"></v-list-item>
                </template>

                <RouterLink :to="{ name: 'error404page' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="404 Error"
                        value="error404page"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'error500page' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="500 Error"
                        value="error500page"></v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'blankpage' }" active-class="custom-exact-active" style="display: flex;">
                    <v-list-item class="v-item-list-custom" prepend-icon="mdi-plus" title="Blank Page"
                        value="blankpage"></v-list-item>
                </RouterLink>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const emit = defineEmits(["update:isDrawerOpen"]);
defineProps({
    isDrawerOpen: Boolean,
});
</script>
