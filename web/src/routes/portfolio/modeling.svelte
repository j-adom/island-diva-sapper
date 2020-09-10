<script context="module">
    import client from "../../sanityClient";
    import urlFor from '../../sanityImageUrlBuilder'
   	import BlockContent from "@movingbrands/svelte-portable-text";
	import serializers from "../../components/serializers";
    import generateImage from '../../generateImage'

    
    export async function preload({params}) {

		const query = `*[_type == "imageGallery" && slug.current == 'modeling'][0]
                        {
                            ...,
                            photos[]{..., asset->}
                        }`;
		const result = await client
			.fetch(query)
            .catch(err => this.error(500,err));
        const media = result.photos
        const intro = result.intro
        const title = result.title
        media.forEach(photo => {
            photo = generateImage(photo)
        });
        return {media, intro, title};
	};

</script>

<script>
    import PubListItem from '../../components/PubListItem.svelte';
    import Header from '../../components/Header.svelte';
    import LibLoader from '../../components/LibLoader.svelte'

    export let media
    export let intro
    export let title

    let galleryLoaded = false

    function onLoaded() {
        lightGallery(document.getElementById('gallery'), {
            thumbnail:true
        });
    }
</script>

<LibLoader url="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/js/lightgallery-all.min.js"
on:loaded="{onLoaded}" />

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/css/lightgallery.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/js/lightgallery-all.min.js" on:load={galleryLoaded}></script>

</svelte:head>
<Header />

<div class="border-white-on-page">
    <div class="body-linen"></div>
</div>

<div class="content-section">
    <div class="container">
        <h1 class="title-l margin-grid fade-in-1st">{title}</h1>
        <h3 class="title-s margin-grid fade-in-1st">
            <BlockContent blocks = {intro} {serializers} />
        </h3>
    </div>
    <div class="cms-collection w-dyn-list">
        <div role="list" id="gallery" class="relative grid grid-cols-3 gap-10  ">
            {#each media as m}
                <a href="{urlFor(m).url()}">
                    <img src={urlFor(m).width(200).height(200).url()} 
                    alt={m.alt}/>
                </a>
            {/each}
        </div>
        <!-- <div class="empty-state w-dyn-empty">
            <div>No items found.</div>
        </div> -->
    </div>
</div>


