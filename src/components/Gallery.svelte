<script>
    import Image from './Image.svelte'
    import Carousel from '@beyonk/svelte-carousel'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
    
    
    export let media
</script>

<div>
    <Carousel perPage={{ 1000: 4, 800: 3, 500: 2 }}>
        <span class="control bg-gray-300" slot="left-control">
            <ChevronLeftIcon />
        </span>
            {#each media as item, i}
                    <div class="instagram-card">
                        <Image {...item} />
                        <p class="text-lg">{item.caption}</p>
                    </div>
            {/each}
        <span class="control" slot="right-control">
            <ChevronRightIcon />
        </span>
    </Carousel>
</div>

<style>
	.control :global(svg) {
		width: 100%;
		height: 100%;
		color: #fff;
		border: 2px solid #fff;
		border-radius: 32px;
	}
</style>