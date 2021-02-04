<script>
    import { onMount } from "svelte";
    let PdfViewer;

    onMount(async () => {
        const module = await import("svelte-pdf");
        PdfViewer = module.default;
    });
</script>

<svelte:component this={PdfViewer} url="./pdfs/pleasemarkdarkly.pdf" />

<div class="flex items-center justify-center px-16 py-16">
    <div class="bg-red-500 w-10 h-10" />
    <div class="bg-blue-500 w-10 h-10" />
    <div class="bg-green-500 w-10 h-10" />
</div>
