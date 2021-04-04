
<script>
  import { onMount } from 'svelte';
  import Carousel from '@beyonk/svelte-carousel'
  import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'

  let instaJSON; 
  const images = []
  function isOdd(num) { return num % 2;}
  function makeSet(src){
    let srcset = src +' 500w' + ', .' + src +' 800w'
    return srcset
  }

  let carousel;

  function enter() {
    carousel.pause();
  }

  function leave() {
    carousel.resume();
  }
  
  onMount(async () => {
    const res = await new InstagramFeed({
        'username': 'theislandiva',
        'items' : 8,
        'lazy_load' : true,
        'host': 'https://images' + ~~(Math.random() * 3333) + '-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/',
        'callback': function(data){
        instaJSON = data
        instaJSON.edge_owner_to_timeline_media.edges.forEach((element,i) => {
          images.push({
            'caption': element.node.edge_media_to_caption.edges[0].node.text,
            'url' : 'https://www.instagram.com/p/' + element.node.shortcode,
            'src' : element.node.thumbnail_resources[1].src,
            'rank' : i
          })
        });
                }
    });
  })
</script>
 
{#if instaJSON}
  <div class="section-instagram">
    <div class="instagram-padding">
      <div class="instagram-header">
        <ul role="list" class="w-list-unstyled">
          <li>
            <div class="title-xs">My Latest</div>
          </li>
          <li>
            <div><em>Instagram Posts</em></div>
          </li>
        </ul>
        <div class="line-horizontal-grow"></div>
        <div class="w-layout-grid grid-userpic-instagram"><img src="{instaJSON.profile_pic_url}" sizes="(max-width: 479px) 48px, 64px" alt="@theislandiva" class="instagram-userpic">
          <div id="w-node-12d705721f99-05721f8b">
            <div>{instaJSON.edge_followed_by.count} followers</div>
            <a data-w-id="963d51d2-b926-4a2d-23df-12d705721f9c" href="https://www.instagram.com/theislandiva" target="_blank" class="link-black w-inline-block">
              <div>@theislandiva</div>
              <div class="hover-line"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Carousel bind:this={carousel} on:mouseenter={enter} on:mouseleave={leave}
      perPage={{1000: 6, 800: 4, 500: 2 }}
      autoplay={4000}
      duration={3000}
      >
        <span class="control bg-gray-300" slot="left-control">
            <ChevronLeftIcon />
        </span>
            {#each images as image}  
              {#if isOdd(image.rank)}
                <div class="slide-content instagram-card-shift "><a href={image.url}><img src={image.src}  alt={image.caption} title={image.caption}></a></div>
              {:else}
                <div class="slide-content instagram-card "><a href={image.url}><img src={image.src}  alt={image.caption} title={image.caption}></a></div>
              {/if}
            {/each} 
        <span class="control" slot="right-control">
            <ChevronRightIcon />
        </span>
    </Carousel>
  </div>
{/if}



