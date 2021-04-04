<script>
  import urlFor from '../sanityImageUrlBuilder'
  import { stores } from '@sapper/app';
  
  const { page } = stores();
  $: route = $page.path;
  export let sidebar = false
  export let header 
  header.categories.map(category => {
            category.url = 'blog/categories/' + category.slug.current //Create relative path link for category
  });
  let cats = header.categories

  const handleSideBar = () => (sidebar = ! sidebar)
</script>

{#if route.length > 1}
<div data-collapse="all" data-animation="default" data-duration="0" data-no-scroll="1" data-doc-height="1" role="banner" class="navbar w-nav ">
  <div class="navbar-container "><a href="/" class="brand w-nav-brand mt-2 pb-2 object-contain"><img src="assets/images/logo-black.png" alt="" class="h-full w-auto"></a>
    <div class="subnav-wrapper">
      <div class="w-layout-grid navbar-grid">
        <a id="w-node-b726e2004fc6-678324bc" data-w-id="c7aeb36b-75ab-8a0e-8d0e-b726e2004fc6" href="/" class="link-navbar w-inline-block">
          <div>Home</div>
          <div class="hover-line"></div>
        </a>
        <a id="w-node-083fc35857b5-678324bc" data-w-id="60d604dc-b89b-ed07-af8e-083fc35857b5" href="/#aboutme" class="link-navbar w-inline-block">
          <div>About</div>
          <div class="hover-line"></div>
        </a>
        <a id="w-node-af249d419a86-678324bc" data-w-id="eb6b58c1-2c16-24dd-2c44-af249d419a86" href="/contactme/" class="link-navbar w-inline-block">
          <div>Contact</div>
          <div class="hover-line"></div>
        </a>
        <!-- <a id="w-node-b9c5b81e2b73-678324bc" data-w-id="c519d7a1-e1c9-a60a-bf97-b9c5b81e2b73" href="https://webflow.com/templates/html/blogos-blog-website-template" target="_blank" class="link-purchase w-inline-block">
          <div class="button-label">Purchase</div>
          <div class="hover-shape black"></div>
        </a> -->
      </div>
      <button data-w-id="a73b22f2-97c2-44e4-d79c-54fdca8e2fec" on:click={() => sidebar = !sidebar}  class="menu-button w-inline-block">
        <div class="menu-circle"></div><img src="images/drag_handle-24px.svg" alt="Open Menu"></button>
    </div>
  </div>
</div >
{/if}

{#if sidebar}
<aside class="navigation-menu" class:sidebar>
  <div class="menu-wrapper">
    <div class="w-layout-grid grid-navigation">
      <div class="w-layout-grid thumb-info-small-grid">
        <div class="caption">BROWSE Topics<br></div>
        <div class="cms-collection w-dyn-list">
          <div role="list" class="cms-tag-list-search w-dyn-items">
            {#each cats as cat, i}
              <div id="w-node-eb28a2104376-109e35ba" data-w-id="46ff58e0-d0b0-4787-5196-eb28a2104376" role="listitem" class="tags-block-search w-dyn-item">
                {#if i > 0}
                  <div class="tags-dot">•</div>
                {/if}
                <img src={urlFor(cat.mainImage).width(200).url()} alt="" class="tooltip-image navi">
                <a on:click={() => sidebar = !sidebar} data-w-id="46ff58e0-d0b0-4787-5196-eb28a2104379" href={cat.url} class="cms-link-white w-inline-block">
                  <div>{cat.title}</div>
                  <div class="hover-line"></div>
                </a>
              </div>
            {/each}
          </div>
        </div>
      </div>
      <div class="w-layout-grid thumb-info-small-grid">
        <div id="w-node-97ff109e35d7-109e35ba" class="w-layout-grid grid-navbar">
          <a on:click={() => sidebar = !sidebar} href="/" class="navbar-link w-inline-block">
            <div>Home</div>
            <div class="hover-line"></div>
          </a>
          <a on:click={() => sidebar = !sidebar} href="/#aboutme" class="navbar-link w-inline-block">
            <div>About me</div>
            <div class="hover-line"></div>
          </a>
          <a on:click={() => sidebar = !sidebar} href="/contactme/" class="navbar-link w-inline-block">
            <div>Contact</div>
            <div class="hover-line"></div>
          </a>
          <!-- <a on:click={() => sidebar = !sidebar} href="privacy-policy.html" class="navbar-link w-inline-block">
            <div>Privacy &amp; Cookies</div>
            <div class="hover-line"></div>
          </a> -->
        </div>
      </div>
      <!-- <form action="/search" class="search w-form">
        <input type="search" class="text-field-filled w-input" maxlength="256" name="query" placeholder="Search…" id="search" required="">
        <input on:click={() => sidebar = !sidebar} type="submit" value="Search" class="search-button w-button">
      </form> -->
      <!-- <div class="w-layout-grid thumb-info-small-grid">
        <div class="align-center">Dummy Media A/S, Example Street 34<br>DK-1147 København K<br></div>
      </div> -->
    </div>
    <button data-w-id="bd3fd343-2fd5-6d46-8cbc-97ff109e35ec" on:click={() => sidebar = !sidebar} class="close-search w-inline-block">
      <img src="images/close-24px.svg" alt="Close Menu" class="close-button-label">
    </button>
  </div>
</aside>
{/if}
<style>
	aside {
		top: -100%;
		transition: top 0.3s ease-in-out
    }
	
	.sidebar {
    top: 0;
    display: block
  }
</style>