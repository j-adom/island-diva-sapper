<script context="module">
    import client from "../../sanityClient";
    import urlFor from '../../sanityImageUrlBuilder'
    import generateImage from '../../generateImage'
    
    export async function preload({params}) {

		const query = `{
                "publications": *[_type == "publication"] {authorURL, name, "imageURL": mainImage.asset->url},
                "articleLinks": *[_type == "articleLink"] {..., mainImage{..., asset->}, ...}
            }`;
		const result = await client
			.fetch(query)
            .catch(err => this.error(500,err));
        const publications = result.publications
        const articleLinks = result.articleLinks
        articleLinks.forEach(link => {
            link.mainImage = generateImage(link.mainImage)
        });
        return {publications, articleLinks};
	};

</script>

<script>
    import PubListItem from '../../components/PubListItem.svelte';
    import Header from '../../components/Header.svelte';
    import ArticleCarousel from '../../components/ArticleCarousel.svelte';

</script>


<div class="border-white-on-page">
    <div class="body-linen"></div>
</div>

<div class="content-section">
    <div class="container">
        <h1 class="title-l margin-grid fade-in-1st">Events</h1>
        <h3 class="title-s margin-grid fade-in-1st">Insert here</h3>
    </div>

</div>