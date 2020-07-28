
<script context="module">
    import client from "../sanityClient";
	import urlBuilder from '@sanity/image-url'
	import BlockContent from "@movingbrands/svelte-portable-text";
	import serializers from "../components/serializers";
		
	const urlFor = source => urlBuilder(client).image(source)
	export async function preload({params}) {
        const filter = `*[_id == "about"]`
        const projection = `{
				...,
				body[]{
					...,
					children[]{
						...,
						_type == 'authorReference' => {
							_type,
							author->
						}
					}
				},
				mainImage{
					...,
					asset->
				}
			}`;
		const query = filter + projection			
		const result = await client
			.fetch(query)
			.catch(err => this.error(500,err));
		const about = result[0]
		return { about }
	};

</script>
<script>
	import { fade } from 'svelte/transition'

	export let about
	console.log(about)
</script>
<style>
</style>

<svelte:head>
	<title></title>
</svelte:head>

<main class="body-editorial">
    <div class="navbar-left">
      <a href="#table-of-content"  data-w-id="116f901f-4fc8-fe4e-438d-a6ae58f561f5" class="menu-editorial w-inline-block">
        <div class="menu-point-editorial"></div>
        <div class="menu-point-editorial"></div>
        <div class="menu-point-editorial"></div>
        <div data-w-id="22f598bb-c8ac-b6d1-cb6b-27fa548e617a" class="hover-shape"></div>
      </a>
	  <a href="/" aria-current="page" class="w-inline-block w--current">
		<img src="assets/images/logo-black.png" alt="logo" class="block md:hidden pt-2 w-20">
	  </a>    
	</div>
    <div class="z-10">
      <div class="section-hero-editorial">
        <div class="w-layout-grid grid-editorial-intro">
          <div class="hero-image-editorial"><img src="images/woman-in-white-long-sleeve-sitting-on-brown-chair-3778327.jpg" srcset="images/woman-in-white-long-sleeve-sitting-on-brown-chair-3778327-p-1080.jpeg 1080w, images/woman-in-white-long-sleeve-sitting-on-brown-chair-3778327-p-1600.jpeg 1600w, images/woman-in-white-long-sleeve-sitting-on-brown-chair-3778327.jpg 2000w" sizes="100vw" in:fade style="-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="" class="bg-image"></div>
          <div class="section-editorial-intro">
            <div>	
              <div class="title-l fade-in-1st">Welcome to</div>
              <div class="title-l fade-in-2nd">Danielle James.</div>
            </div>
            <div class="fade-in-3rd">
				<BlockContent blocks = {about.intro} {serializers} />
			</div>
          </div>
         </div>	
        <div class="moving-image-shape bg-dark"></div>
      </div>
      <div class="section-under"> 
        <div class="min-height-editorial">
          <div class="sticky-editorial">
            <div class="w-layout-grid grid-editorial-foreword">
              <div class="section-large-editorial">
                <div class="w-layout-grid grid-2x-editorial">
                  <div id="w-node-a6ae58f56068-9e6961c7" class="title-l"><a href="#aboutme">About Me</a></div>
				  <div id="w-node-a6ae58f5606a-9e6961c7" class="small-text"> 
                    <div class="caption text-black" style="font-size: 16px">“I’m not living for myself. I’m living for my legacy.”</div>
                    <div style="font-size: 16px"><em>- Danielle James</em></div>
                  </div>
                  <div id="w-node-a6ae58f56070-9e6961c7">
					<BlockContent blocks = {about.body} {serializers} />
				  </div>
                </div>
            </div>
            <div class="section-large-padding-stretch">
              <div class="image-size-stratch-featured"><img src="images/woman-in-brown-bikini-standing-on-brown-blanket-3778693.jpg" srcset="images/woman-in-brown-bikini-standing-on-brown-blanket-3778693-p-500.jpeg 500w, images/woman-in-brown-bikini-standing-on-brown-blanket-3778693.jpg 800w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 98vw" in:fade style="-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="" class="bg-image"></div>
            </div>
		  </div>
        </div>
      </div>
      </div>
      <div id="table-of-content" class="w-layout-grid grid-table-of-content">
        <div class="section-editorial-menu first">
          <div class="display-3">Table of</div>
          <div class="display-3">Content</div>
        </div>
		<div class="section-editorial-menu">
			<div class="display-4">
		  	<a href="/portfolio/" class="hover-line-grow">Portfolio</a>
		</div>
        <div class="line-light-chapter"></div>
		<ul role="list" class="italic w-list-unstyled">
			<li>
				<a href="/portfolio/journalism" class="hover-line-grow w-inline-block">
				<div>Journalism</div>
				<div class="hover-line black"></div>
				</a>
			</li>
			<li>
				<a href="/portfolio/redcarpet" class="hover-line-grow w-inline-block">
				<div>Red Carpet</div>
				<div class="hover-line black"></div>
				</a>
			</li>
			<li>
				<a href="https://www.hellobeautiful.com/wardgirls" class="hover-line-grow w-inline-block">
				<div>Film Production - Ward Girls</div>
				<div class="hover-line black"></div>
				</a>
			</li>
			<li>
				<a href="/portfolio/interviews" class="hover-line-grow w-inline-block">
				<div>Video Interviews</div>
				<div class="hover-line black"></div>
				</a>
			</li>
			<li>
				<a href="/portfolio/modeling" class="hover-line-grow w-inline-block">
				<div>Modeling</div>
				<div class="hover-line black"></div>
				</a>
			</li>
			<li>
				<a href="/portfolio/hosting" class="hover-line-grow w-inline-block">
				<div>Hosting</div>
				<div class="hover-line black"></div>
				</a>
			</li>
			<li>
				<a href="/portfolio/events" class="hover-line-grow w-inline-block">
				<div>Events</div>
				<div class="hover-line black"></div>
				</a>
			</li>
			<li>
				<a href="/portfolio/speaking" class="hover-line-grow w-inline-block">
				<div>Speaking Engagements</div>
				<div class="hover-line black"></div>
				</a>
			</li>
		</ul>
    </div>
	<div class="section-editorial-menu">
		<div class="display-4">
		<a href="/consulting/" class="hover-line-grow">Consulting</a>
	</div>
	<div class="line-light-chapter"></div>
	<ul role="list" class="italic w-list-unstyled">
		<li>
		<a href="/consulting/services" class="hover-line-grow w-inline-block">
			<div>Consulting Services</div>
			<div class="hover-line black"></div>
		</a>
		</li>
		<li>
		<a href="/consulting/brand" class="hover-line-grow w-inline-block">
			<div>Brand Consulting</div>
			<div class="hover-line black"></div>
		</a>
		</li>
		<li>
		<a href="/consulting/image" class="hover-line-grow w-inline-block">
			<div>Image/Style Consulting</div>
			<div class="hover-line black"></div>
		</a>
		</li>
	</ul>
      </div>
        <div class="section-editorial-menu">
           <div class="display-4">
		  	<a href="/brandwork/" class="hover-line-grow">Brand Work</a>
		  </div>
          <div class="line-light-chapter"></div>
          <!-- <div class="editorial-chapter">Shopping</div> -->
          <ul role="list" class="italic w-list-unstyled">
			<!-- <li>
              <a href="/consulting/image" class="hover-line-grow w-inline-block">
                <div>Image/Style Consulting</div>
                <div class="hover-line black"></div>
              </a>
            </li>
            -->
          </ul>
        </div>
        <div class="section-editorial-menu">
           <div class="display-4">
		  	<a href="/press/" class="hover-line-grow">Press</a>
		  </div>
          <div class="line-light-chapter"></div>
          <!-- <div class="editorial-chapter">Shopping</div> -->
          <ul role="list" class="italic w-list-unstyled">
			<!-- <li>
              <a href="/consulting/image" class="hover-line-grow w-inline-block">
                <div>Image/Style Consulting</div>
                <div class="hover-line black"></div>
              </a>
            </li>
            -->
          </ul>
        </div>
		<div class="section-editorial-menu">
          <div class="display-4">
		  	<a href="/contactme/" class="hover-line-grow">Contact Me</a>
		  </div>
          <div class="line-light-chapter"></div>
          <ul role="list" class="italic w-list-unstyled">
			<li>
              <a href="/contactme/" class="hover-line-grow w-inline-block">
                <div></div>
                <div class="hover-line black"></div>
              </a>
            </li>
           
          </ul>
      </div>
</main>