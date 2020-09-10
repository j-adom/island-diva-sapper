<script>
    import Image from './Image.svelte'
    import Carousel from '@beyonk/svelte-carousel'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
    
    export let articleLinks
    console.log(articleLinks)
</script>
<div class="section-instagram">
  <div class="instagram-padding">
    <div class="instagram-header">
        <ul role="list" class="w-list-unstyled">
        <li>
            <div class="title-xs">Featured Articles</div>
        </li>
        <li>
            <div><em>Written by Danielle</em></div>
        </li>
        </ul>
        <div class="line-horizontal-grow"></div>
        <!-- <div class="w-layout-grid grid-userpic-instagram"><img src="../images/human-face-with-misty-glass-3494913.jpg" srcset="../images/human-face-with-misty-glass-3494913-p-500.jpeg 500w, ../images/human-face-with-misty-glass-3494913-p-1080.jpeg 1080w, ../images/human-face-with-misty-glass-3494913-p-1600.jpeg 1600w, ../images/human-face-with-misty-glass-3494913.jpg 2000w" sizes="(max-width: 479px) 48px, 64px" alt="" class="instagram-userpic">
        <div id="w-node-12d705721f99-05721f8b">
            <div>233K followers</div>
            <a data-w-id="963d51d2-b926-4a2d-23df-12d705721f9c" href="https://www.instagram.com/" target="_blank" class="link-black w-inline-block">
            <div>@template</div>
            <div class="hover-line"></div>
            </a>
        </div>
        </div> -->
    </div>
  </div>
       <Carousel perPage={{ 1000: 4, 800: 3, 500: 2 }}>
            <span class="control bg-gray-300" slot="left-control">
                <ChevronLeftIcon />
            </span>
                {#each articleLinks as article, i}
                        <div class="instagram-card">
                            <Image {...article.mainImage} />
                            <a href={article.articleUrl}>
                                <p class="text-lg">{article.title}</p>
                            </a>
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
        background-color: #fac3c5;
    }
</style>