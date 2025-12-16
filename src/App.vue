<script setup lang="ts">
    import { useRoute, useRouter } from "vue-router";

    const route = useRoute();
    const router = useRouter();

    // function goCollections() {
        if (route.path === "/collections") {
            const searchInput = document.getElementById("search-input");
            if (searchInput) searchInput.focus();
        } else {
            router.push("/collections");
        }
    //}
</script>

<template>
    <mdui-layout>
        <mdui-layout-main class="app-container">
            <router-view v-slot="{ Component }">
                <component :is="Component" :key="route.path" />
            </router-view>
        </mdui-layout-main>
    </mdui-layout>
</template>

<style scoped>
    .app-container {
        padding: 16px;
        box-sizing: border-box;
        min-height: 100%;
    }

    mdui-navigation-bar,
    mdui-navigation-rail {
        position: fixed !important;
        -webkit-tap-highlight-color: transparent;
    }

    mdui-navigation-bar {
        height: var(--nav-bar-height);
        padding-bottom: var(--nav-bar-padding-bottom);
    }

    mdui-navigation-rail {
        display: none;
    }
    @media (min-aspect-ratio: 1.001/1) {
        mdui-navigation-bar {
            display: none;
        }
        mdui-navigation-rail {
            display: block !important;
        }
    }
</style>

<style>
    body {
        margin: 0;
    }
    #app {
        width: 100%;
        min-height: 100vh;
        display: block;
        overflow: hidden;
    }
    button {
        padding: initial;
        border: initial;
        background: initial;
        font-family: initial;
        font-size: initial;
        font-weight: initial;
        border-radius: initial;
        cursor: initial;
        transition: initial;
        color: initial;
    }
</style>
