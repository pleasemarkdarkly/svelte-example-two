<script lang="ts">
    import { preferences } from "./store";
    import { onMount } from "svelte";

    onMount(() => {
        if ($preferences.theme === "dark") {
            document.querySelector("html").classList.add("dark");
        }
    });
    $: {
        if (typeof document != "undefined") {
            if ($preferences.theme === "dark") {
                document.querySelector("html").classList.add("dark");
            } else {
                document.querySelector("html").classList.remove("dark");
            }
        }
    }
</script>

<title>Example SvelteKit Project</title>

<div>
    <article>
        <h2 class="text-3l font-bold mb-2">Default route</h2>
        <p>
            This blog is made by Svelte-kit, Tailwind-css, Typescript, and
            Snowpack.
        </p>
        <p>
            <a href="/example">Example page</a>
        </p>

        <img src="./images/pleasemarkdarkly.png" alt="pleasemarkdarkly" />

        <br />
        <h2 class="text-3l font-bold mb-2">
            Currently you are in {$preferences.theme} theme
        </h2>
        <button
            on:click={() =>
                ($preferences.theme =
                    $preferences.theme === "dark" ? "light" : "dark")}
        >
            Toggle Theme
        </button>
    </article>
</div>

<style lang="postcss">
    div {
        @apply text-left;
    }
    h2 {
        @apply underline;
    }
    p {
        @apply mt-0 mb-2;
    }
    a {
        @apply text-indigo-600 hover:underline;
    }
</style>
