<script lang="ts">
    export let src: string = "https://via.placeholder.com/150";
    export let alt: string = "avatar";
    let className: string = "w-64 rounded-full";
    export { className as class };
</script>

<div class="avatar">
    <div class={className}>
      <img {src} {alt}/>
    </div>
</div>