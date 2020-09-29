
<script context="module">
    import client from "../../../sanityClient";
    import urlFor from '../../../sanityImageUrlBuilder'
    import BlockContent from "@movingbrands/svelte-portable-text";
	import serializers from "../../../components/serializers";
    
    export async function preload({params}) {
        const slug = params.slug;
		const query = `*[_type == "category" && slug.current == $slug][0]{
            ...,
            mainImage{
                ...,
                asset->
            },
            'posts': *[_type == "post" && references(^._id)]{
                ...,
                authors[]->{
                  ...,
                  image{
                    ...,
                    asset->
                  }
                },
                mainImage{
                    ...,
                    asset->
                }
            } ,
            'categories': *[_type == "| order(publishedAt desc)category" && _createdAt > "2020"]{
                ...,
                mainImage{
                    ...,
                    asset->
                }
            }
        } `;
		const category = await client
			.fetch(query, {slug})
            .catch(err => this.error(500,err));
        // category.forEach(category => {
        //     category.url = 'blog/categories/' + category.slug.current //Create relative path link for category
        // });
        return {category};
	};

</script>

<script>
    import Header from '../../../components/Header.svelte';
    import CategoryBox from '../../../components/CategoryBox.svelte';

    import { stores } from '@sapper/app';
    const { page } = stores();
    $: console.log($page.params);
    
    export let category
    let posts = category.posts
    posts.forEach(article => {
        article.url = 'blog/posts/' + article.slug.current
    });

    let featPosts = posts.filter(post => post.featured ==true )
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    function formatDate (utc) {
      const d = new Date(utc)
      const monthName = months[d.getMonth()]
      const year = d.getFullYear()
      const date = d.getDate()
      const fullDate = `${monthName} ${date}, ${year}`
      return fullDate
    }
</script>

<svelte:head>
  <title>{category.title}</title>
</svelte:head>

<Header />
<div class="border-white-on-page">
      <div class="body-linen"></div>
</div>

<div class="content-section">
    <div class="container">
        <div class="container">
            <h1 class="title-l margin-grid fade-in-1st">{category.title}</h1>
        </div>
        {#if posts.length}
            <div class="w-layout-grid _2-columns-2-to-1">
            <div id="w-node-dd00ab3eedd4-626961c2" class="sticky-top-5vh">
                <div class="cms-collection w-dyn-list">
                    <div role="list" class="cms-list w-dyn-items">
                        <div role="listitem" class="cms-item fade-in-1st w-dyn-item">
                            <a href={posts[0].url} data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedd8" class="image-filled-featured w-inline-block">
                                <img data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedd9" src={urlFor(posts[0].mainImage).url()} alt={posts[0].mainImage.alt} class="bg-image">
                                <div class="gradient-bottom"></div>
                                <div class="w-layout-grid thumb-info-small-grid">
                                    <div class="category-wrapper align-center">
                                        <div>{formatDate(posts[0].publishedAt)}</div>
                                        <!-- <div class="caption-dot">·</div>
                                        <div></div><div> min</div> -->
                                    </div>
                                    <div>{posts[0].title}</div>
                                    <div id="w-node-dd00ab3eedde-626961c2" class="author-wrapper-italic">
                                        <div>by </div>
                                        <div>{posts[0].authors[0].name}</div>
                                    </div>
                                    <div id="w-node-dd00ab3eede3-626961c2" data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eede3" class="post-summary">
                                        <div>
                                            <BlockContent blocks={posts[0].excerpt} {serializers} />
                                        </div>
                                    </div>
                                </div>
                                <div data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eede5" style="display:block" class="image-cover-shape"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="w-node-dd00ab3eede9-626961c2" class="cms-collection w-dyn-list">
                <div role="list" class="_1-column-2-on-mobile w-dyn-items">
                    {#each posts as post,i}
                        {#if i>0 && i<4}
                            <div role="listitem" class="cms-item fade-in-1st w-dyn-item">
                                <a data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedec" href={post.url} class="cms-link w-inline-block">
                                    <div class="w-layout-grid thumb-info-small-grid">
                                        <div class="image-4-to-3"><img data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedef" sizes="(max-width: 479px) 82vw, (max-width: 767px) 86vw, (max-width: 991px) 85vw, 83vw" src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} class="bg-image">
                                            <div data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedf0" style="display:block" class="image-cover-shape"></div>
                                        </div>
                                        <div class="category-wrapper">
                                            <div>{formatDate(post.publishedAt)}</div>
                                            <!-- <div class="caption-dot">·</div>
                                            <div></div>
                                            <div> min</div> -->
                                        </div>
                                        <div>
                                            <div class="title-xs">{post.title}</div>
                                            <div class="author-wrapper-italic">
                                            <div>by </div>
                                            <div>{post.authors[0].name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>

    {#if posts.length > 3}
       <div class="content-section bg-white">
            {#if posts.length > 6}
                <div class="cms-collection margin-grid w-dyn-list">
                    <div role="list" class="_2-columns featured w-dyn-items">
                        {#each featPosts as post,i}
                            {#if i < 2 }
                                <div role="listitem" class="cms-item fade-in-1st w-dyn-item">
                                    <a data-w-id="629458d8-6cb3-90f3-83ac-793e56df447b" href={post.url} class="cms-link-underline w-inline-block">
                                        <div class="w-layout-grid thumb-big-space">
                                        <div class="image-square-2x-featured"><img data-w-id="629458d8-6cb3-90f3-83ac-793e56df447e" style="opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} class="bg-image">
                                            <div data-w-id="629458d8-6cb3-90f3-83ac-793e56df447f" style="display:block" class="image-cover-shape"></div>
                                        </div>
                                        <div class="w-layout-grid thumb-info-small-grid align-center">
                                            <div class="category-wrapper align-center-desktop">
                                                <div>
                                                    <div>{formatDate(post.publishedAt)}</div>
                                                </div>
                                                <!-- <div class="caption-dot">·</div>
                                                <div></div>
                                                <div class="caption-dot">·</div>
                                                <div></div>
                                                <div> min</div> -->
                                            </div>
                                            <div class="title-s">{post.title}</div>
                                        </div>
                                        </div>
                                        <div class="w-layout-grid thumb-info-small-grid align-center"><img id="w-node-793e56df448a-8f6961c4" src={urlFor(post.authors[0].image).width(40).height(40).url()} alt={post.authors[0].image.alt} class="userpic">
                                        <div class="author-wrapper">
                                            <div><em>Written by </em></div>
                                            <div class="caption">{post.authors[0].name}</div>
                                        </div>
                                        </div>
                                        <div data-w-id="629458d8-6cb3-90f3-83ac-793e56df448f" class="hover-line"></div>
                                    </a>
                                    <div class="cms-vertical-line"></div>
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
            {/if} 
            <div class="cms-collection w-dyn-list">
                <div role="list" class="_3-columns w-dyn-items">
                    {#each posts as post}
                        <div role="listitem" class="cms-item fade-in-1st w-dyn-item">
                            <a data-w-id="629458d8-6cb3-90f3-83ac-793e56df4497" href={post.url} class="cms-link-underline w-inline-block">
                                <div class="w-layout-grid thumb-big-space">
                                    <div class="image-square-3x"><img data-w-id="629458d8-6cb3-90f3-83ac-793e56df449a" style="opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} class="bg-image">
                                        <div data-w-id="629458d8-6cb3-90f3-83ac-793e56df449b" style="display:block" class="image-cover-shape"></div>
                                    </div>
                                    <div class="w-layout-grid thumb-info-small-grid align-center">
                                        <div class="category-wrapper align-center-desktop">
                                            <div class="caption">{formatDate(post.publishedAt)}</div>
                                            <!-- <div class="caption-dot">·</div>
                                            <div></div>
                                            <div class="caption-dot">·</div>
                                            <div></div>
                                            <div> min</div> -->
                                        </div>
                                        <div class="title-xs">{post.title}</div>
                                    </div>
                                </div>
                                <div data-w-id="629458d8-6cb3-90f3-83ac-793e56df44a5" class="hover-line"></div>
                                <div class="w-layout-grid thumb-info-small-grid align-center"><img id="w-node-793e56df44a7-8f6961c4" src={urlFor(post.authors[0].image).width(40).height(40).url()} alt={post.authors[0].image.alt} class="userpic">
                                    <div class="author-wrapper">
                                        <div><em>Written by </em></div>
                                        <div class="caption">{post.authors[0].name}</div>
                                    </div>
                                </div>
                            </a>
                            <div class="cms-vertical-line"></div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}

<CategoryBox categories={category.categories}/>
