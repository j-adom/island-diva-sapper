<script context="module">
    import client from "../../sanityClient";
    import urlFor from '../../sanityImageUrlBuilder'
    import generateImage from '../../generateImage'
    import BlockContent from "@movingbrands/svelte-portable-text";
    import serializers from "../../components/serializers";
    
    export async function preload({params}) {

        const filter = `*[_id == "bloghome"][0]`
        const projection = `{
				...,
				mainImage{
					...,
					asset->
                },
                section2{
                    ...,
                    section2images{
                        largeImage{
                            ...,
                            asset->
                        },
                        smallImage{
                            ...,
                            asset->
                        }
                    }
                },
                'categories': *[_type == "category" && _createdAt > "2020"]{
                    ...,
                    mainImage{
                        ...,
                        asset->
                    }
                }
			}`;
		const query = filter + projection	
		const blogHome = await client
			.fetch(query)
            .catch(err => this.error(500,err));
		blogHome.mainImage = generateImage(blogHome.mainImage)
        blogHome.section2.section2images.largeImage = generateImage(blogHome.section2.section2images.largeImage)
        blogHome.section2.section2images.smallImage = generateImage(blogHome.section2.section2images.smallImage)
        return {blogHome};
	};

</script>

<script>
    import CategoryBox from '../../components/CategoryBox.svelte';
	import Image from '../../components/Image.svelte'

	// import { fly } from 'svelte/transition'
    
    export let blogHome

</script>



<div class="border-white-on-page">
    <div class="body-linen"></div>
</div>
<!-- <div class="content-section-space-desktop">
    <div class="w-layout-grid hero-grid">
        <div id="w-node-5c6ec26be52c-6e6961cc" class="bg-hero fade-in-6th"></div>
        <div id="w-node-5c6ec26be52d-6e6961cc" class="image-size-hero fade-in-1st">
            <div data-w-id="f47b15ce-56ee-b59a-a0a8-5c6ec26be52f" style="display:block" class="image-cover-shape"></div>
                <Image {...blogHome.mainImage} />
            </div>
        <div id="w-node-5c6ec26be530-6e6961cc" class="hero-block-spacing">
            <div class="category-wrapper fade-in-2nd">
                <p class="text-black caption">About</p>
            </div>
            <h1 class="title-m fade-in-3rd">
                <BlockContent blocks={blogHome.section1.introHeader} {serializers} />
            </h1>
            <div class="w-layout-grid grid-shift">
                <p id="w-node-5c6ec26be537-6e6961cc" class="lead fade-in-4th">
                    <BlockContent blocks={blogHome.section1.introText} {serializers} />
                </p>
            </div>
        </div>
    </div>  
</div> -->

<div class="content-section">
    <div class="w-layout-grid _5-columns">
        <div id="w-node-54f1722d5666-516961ce">
            <h2 class="caption text-black fade-in-1st">Values</h2>
            <div class="margin">
            <div class="title-m fade-in-1st">{blogHome.section2.lead1}<br></div>
            <div class="title-m fade-in-1st"><em>{blogHome.section2.lead2}</em></div>
            </div>
            <div class="fade-in-1st">
                <BlockContent blocks={blogHome.section2.section2body} {serializers} />   
            </div>
        </div>
        <div id="w-node-ae85c1359f2f-516961ce" class="fade-in-6th">
            <Image {...blogHome.section2.section2images.largeImage} />
        </div>
        <div id="w-node-39cf9d2d87f4-516961ce" class="fade-in-1st">
            <div data-w-id="ec1afa23-c7db-89ed-7f4c-6280f9bf1638" class="overflow-hidden">
                <Image {...blogHome.section2.section2images.smallImage} />
            </div>
        </div>
    </div>
</div>
<div class="content-section fade-in-1st">
    <div class="w-layout-grid _3-columns">
        <div id="w-node-65fecb4dd5ab-516961ce">
            <div class="w-layout-grid thumb-info-small-grid margin-grid">
                <div id="w-node-160e37da4ab4-516961ce">
                    <div class="numbers text-white fade-in-1st">01</div>
                </div>
                <div id="w-node-2019c0d8dc70-516961ce">
                    <div class="title-s fade-in-1st">{blogHome.section3.action1lead1}</div>
                    <div class="title-s fade-in-1st"><em>{blogHome.section3.action1lead2}</em></div>
                </div>
            </div>
            <div class="fade-in-1st">
                <BlockContent blocks={blogHome.section3.action1} {serializers} />   
            </div>
        </div>
        <div id="w-node-6843d5a0f0dd-516961ce">
            <div class="w-layout-grid thumb-info-small-grid margin-grid">
                <div id="w-node-27921c41347e-516961ce">
                    <div class="numbers text-white fade-in-1st">02</div>
                </div>
                <div id="w-node-27921c413481-516961ce">
                    <div class="title-s fade-in-1st">{blogHome.section3.action2lead1}</div>
                    <div class="title-s fade-in-1st"><em>{blogHome.section3.action2lead2}</em></div>
                </div>
            </div>
            <div class="fade-in-1st">
                <BlockContent blocks={blogHome.section3.action2} {serializers} />   
            </div>
        </div>
        <div id="w-node-c67003ba5e58-516961ce">
            <div class="w-layout-grid thumb-info-small-grid margin-grid">
                <div id="w-node-adf97273e90d-516961ce">
                    <div class="numbers text-white fade-in-1st">03</div>
                </div>
                <div id="w-node-adf97273e910-516961ce">
                    <div class="title-s fade-in-1st">{blogHome.section3.action3lead1}</div>
                    <div class="title-s fade-in-1st"><em>{blogHome.section3.action3lead2}</em></div>
                </div>
            </div>
            <div class="fade-in-1st">
                <BlockContent blocks={blogHome.section3.action3} {serializers} />   
            </div>
        </div>
    </div>
</div>  

<CategoryBox categories={blogHome.categories}/>