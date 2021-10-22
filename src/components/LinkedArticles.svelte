<script>
export let image
export let alt
export let title

</script>

<div class="instagram-card">
    <img src={image} srcset="../images/instagam-post-04-p-500.jpeg 500w, ../images/instagam-post-04.jpg 640w" sizes="(max-width: 479px) 47vw, (max-width: 767px) 48vw, (max-width: 991px) 23vw, 25vw" alt={alt}>
    <div class="absolute bottom-0 left-0">{title}</div>
</div>
