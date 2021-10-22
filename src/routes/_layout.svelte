<script context="module">
    import client from "../sanityClient";
    
    export async function preload({params}) {
		const { slug } = params;
        const filter = '*[_type == "siteSettings"][0]'
        const projection = `{
			'header':{
				
				'bgImage':header.bg_img.asset->url,
				'logo': header.logo_img.asset->url
			},
			'categories': *[_type == "category" ]{
				...,
				mainImage{
					...,
					asset->
				}
			},	
			...
			}`;
					
		const query = filter + projection;
		const siteInfo = await client
			.fetch(query)
			.catch(err => this.error(500,err));
		siteInfo.pg = slug
		return {siteInfo};
	};

</script>

<script>
	import { fade } from 'svelte/transition'
	import Instagram from '../components/Instagram.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
    import { stores } from "@sapper/app"
    import { derived } from 'svelte/store';
	import Tailwindcss from '../components/Tailwindcss.svelte';
    
    const { navigating } = stores();
    const delayedNavigating = derived(navigating, (currentNavigating, set) => {
        setTimeout(() => set(currentNavigating), 250);
    });
	
	export let siteInfo;
	let { header, categories } = siteInfo
	let visible = true
	let	onLoad = false
	let open = false

	let pg = siteInfo.pg 
	// onMount(async () => {
	// 	setTimeout(function() {onLoad = true}, 50)
		
	// })

</script>

<style>
	/* :global(body) {
		padding: 0;
	}
	main {
		background-color: white;
	} */
	/* #page{
		display: none;
	} */
</style>

<Tailwindcss />

<main  in:fade class="layout" id='page'>
	<Header {categories} {pg} />
	<slot></slot>
	<!-- <Instagram /> -->
	<Footer links={siteInfo.links} description={siteInfo.description} />
</main>

{#if $navigating && $delayedNavigating} <!-- Show Loading spinner -->
    <div class="preloader"><img src="assets/images/25_125.gif" alt="" class="preloader-image"></div>
{/if}