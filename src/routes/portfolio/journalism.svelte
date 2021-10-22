<script context="module">
    import client from "../../sanityClient";
    import urlFor from '../../sanityImageUrlBuilder'
    import generateImage from '../../generateImage'
    
    export async function preload({params}) {

		const query = `{
                "publications": *[_type == "publication"] {authorURL, name, "imageURL": mainImage.asset->url},
                "articleLinks": *[_type == "articleLink"] {..., "asset": mainImage.asset->}
            }`;
		const result = await client
			.fetch(query)
            .catch(err => this.error(500,err));
        const publications = result.publications
        const articleLinks = result.articleLinks
        articleLinks.forEach(link => {
            link.mainImage.asset = link.asset
            link.mainImage = generateImage(link.mainImage)
        });
        return {publications, articleLinks};
	};

</script>

<script>
    import PubListItem from '../../components/PubListItem.svelte';
    import Header from '../../components/Header.svelte';
    import ArticleCarousel from '../../components/ArticleCarousel.svelte';

    export let publications
    export let articleLinks
</script>



<div class="border-white-on-page">
    <div class="body-linen"></div>
</div>

<div class="content-section">
    <div class="container">
        <h1 class="title-l margin-grid fade-in-1st">Journalism</h1>
        <h3 class="title-s margin-grid fade-in-1st">Check out my published articles on these publications:</h3>
    </div>
    <div class="cms-collection w-dyn-list">
        <div role="list" class=" relative grid grid-cols-1 md:grid-cols-3 gap-10  ">
            {#each publications as pub}
                <PubListItem {...pub} />
            {/each}
        </div>
        <!-- <div class="empty-state w-dyn-empty">
            <div>No items found.</div>
        </div> -->
    </div>
</div>

<ArticleCarousel {articleLinks} />

<style>
    .content-section{
        background-color: #fafaf3;
    }
</style>
