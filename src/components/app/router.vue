<script lang="ts">
    import { createRouter, createMemoryHistory } from "vue-router";

    import CollectionsPage from "../../pages/collections.vue";

    const routes = [
        { path: "/", redirect: "/collections" },
        { path: "/collections", component: CollectionsPage },
    ];

    const router = createRouter({
        history: createMemoryHistory(),
        routes,
    });

    export default router;
</script>
