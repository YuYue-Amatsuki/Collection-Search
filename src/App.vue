<script setup lang="ts">
    import { useRoute, useRouter } from "vue-router";

    const route = useRoute();
    const router = useRouter();

    function goCollections() {
        if (route.path === "/collections") {
            const searchInput = document.getElementById("search-input");
            if (searchInput) searchInput.focus();
        } else {
            router.push("/collections");
        }
    }
</script>

<template>
    <mdui-layout>
        <mdui-navigation-bar :value="route.path" label-visibility="labeled">
            <mdui-navigation-bar-item
                icon="collections"
                value="/collections"
                @click="goCollections"
            >
                收藏品
            </mdui-navigation-bar-item>
        </mdui-navigation-bar>

        <mdui-navigation-rail :value="route.path">
            <mdui-navigation-rail-item
                icon="collections"
                value="/collections"
                @click="goCollections"
            >
                收藏品
            </mdui-navigation-rail-item>
        </mdui-navigation-rail>

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
        height: 100%;
        overflow-y: auto;
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
