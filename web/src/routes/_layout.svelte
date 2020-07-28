<script context="module">
    import client from "../sanityClient";
    
    export async function preload({params}) {
        const filter = '*[_type == "siteSettings"][0]'
        const projection = `{
			...,
			'header':{
					
					'bgImage':header.bg_img.asset->url,
					'logo': header.logo_img.asset->url
				},
			...
			}`;
					
		const query = filter + projection;
		const siteInfo = await client
			.fetch(query)
			.catch(err => this.error(500,err));
		return {siteInfo};
	};

</script>

<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition'
	import Footer from '../components/Footer.svelte';
	
	export let siteInfo;
	let visible = true
	let	onLoad = false
	
	onMount(async () => {
		setTimeout(() => onLoad = true, 50)
		
	})

	let open = false;
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
{#if onLoad && visible}
	<main  in:fade class="layout" id='page'>
		<div>
			<slot></slot>
			<Footer {...siteInfo.footer} />
		</div>	
	</main>
{/if}
<div class="preloader"><img src="assets/images/25_125.gif" alt="" class="preloader-image"></div>
