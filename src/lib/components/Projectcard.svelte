<script lang="ts">
    // export let src: string = "https://via.placeholder.com/130";
    // export let alt: string = "Project image";
    export let title: string;
    export let description: string;
    export let url: string;
</script>

<div class="project-card card card-side bg-base-200 border border-base-200 rounded-md shadow-xl mb-4 break-inside-avoid-column">
    <!-- <figure><img {src} {alt}/></figure> -->
    <div class="card-body p-6">
        <h2 class="card-title italic font-semibold">{ title }</h2>
        <p class="text-sm">{@html description }</p>
        <div class="card-actions justify-end">
            <a href={url} target={url.length === 1 ? '_self' : '_blank'}><span class="text-xs underline text-sky-700">Link</span></a>
        </div>
    </div>
</div>
