
<script context="module">
    import client from "../../../sanityClient";
    import urlFor from '../../../sanityImageUrlBuilder'
    import BlockContent from "@movingbrands/svelte-portable-text";
    import serializers from "../../../components/serializers";
    
    export async function preload({params}) {
        const slug = params.slug;
		const query = `*[_type == "post" && slug.current == $slug][0]{
        ...,
        authors[]->{name, image, slug},
        categories[0]->{title, slug},
				mainImage{
					...,
          asset->
        },
        "articles": *[_type == "post" && featured == true][0..1]{
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
        } | order(publishedAt desc),
        'cats': *[_type == "category" && _createdAt > "2020"]{
            ...,
            mainImage{
                ...,
                asset->
            }
        }
			} `;
		const post = await client
			.fetch(query, {slug})
            .catch(err => this.error(500,err));
        // post.forEach(post => {
        //     post.url = 'blog/categories/' + post.slug.current //Create relative path link for post
        // });
      return {post};
	};

</script>

<script>
    import Image from '../../../components/Image.svelte';
    import CategoryBox from '../../../components/CategoryBox.svelte';

    import { fly } from 'svelte/transition';

    export let post

      console.log(post);

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
    const postDate = formatDate(post.publishedAt)
    const art1Date = formatDate(post.articles[0].publishedAt)
    const art2Date = formatDate(post.articles[1].publishedAt)
    const catLink = "blog/categories/" + post.categories.slug.current
    const art1Link = "blog/posts/" + post.articles[0].slug.current
    const art2Link = "blog/posts/" + post.articles[1].slug.current
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>


<div class="border-white-on-page">
  <div class="body-linen"></div>
</div>


<div class="content-section-space-desktop">
  <div class="w-layout-grid hero-grid">
    <div id="w-node-7e1409ad8b74-2a6961c5" class="bg-hero fade-in-6th"></div>
    <div id="w-node-7e1409ad8b75-2a6961c5" class="image-size-hero fade-in-1st">
      <img src={urlFor(post.mainImage).url()} alt="" class="bg-image post-detail">
      <div data-w-id="73ff716b-42ec-1be0-ec5c-7e1409ad8b77" style="display:block" class="image-cover-shape"></div>
    </div>
    <div id="w-node-7e1409ad8b78-2a6961c5" class="hero-block-spacing">
      <div class="w-layout-grid thumb-info-large-grid">
        <div class="category-wrapper fade-in-2nd">
          <div><em>Published in  </em></div>
          <a data-w-id="73ff716b-42ec-1be0-ec5c-7e1409ad8b7c" href={catLink} class="link-block w-inline-block">
            <div>{post.categories.title}</div>
            <div class="hover-line primary-2"></div>
          </a>
          <div><em> on  </em></div>
          <div>{postDate}</div>
        </div>
        <h1 class="title-m fade-in-3rd">{post.title}</h1>
      </div>
      <div class="w-layout-grid grid-shift">
        <div id="w-node-1ca258b583ab-2a6961c5" class="lead fade-in-4th"></div>
        <div id="w-node-b646d5d58cf7-2a6961c5" class="w-layout-grid author-detail fade-in-1st"><img src={urlFor(post.authors[0].image).width(100).height(100).url()} alt="" class="userpic">
          <a id="w-node-6d646b581d53-2a6961c5" data-w-id="73767d73-32c6-55e5-5c10-6d646b581d53" href="#aboutme" class="link-black w-inline-block">
            <div>{post.authors[0].name}</div>
            <div class="hover-line primary-2"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="post-body-section">
  <div class="w-layout-grid post-body-grid">
    <div id="w-node-765e2d44465f-2a6961c5" class="fade-in-1st w-richtext">
					<BlockContent blocks = {post.body} {serializers} />
    </div>
  </div>
  <div class="cms-collection w-dyn-list">
    <div role="list" class="multi-image-grid w-dyn-items">
      <div role="listitem" class="w-dyn-item"><img src="" alt="" class="fade-in-1st"></div>
    </div>
  </div>
  {#if post.body2}
    <div class="w-layout-grid post-body-grid">
      <div id="w-node-765e2d444668-2a6961c5" class="fade-in-1st w-richtext">
        <BlockContent blocks = {post.body2} {serializers} />
      </div>
    </div>
  {/if}
</div>
<div class="content-section fade-in-1st">
  <div class="w-layout-grid more-articles-grid">
    <div id="w-node-52a9bd0b7cfd-2a6961c5" class="more-articles-header-wrapper">
      <div class="title-m fade-in-1st">More Articles<br></div>
    </div>
    <div id="w-node-52a9bd0b7d01-2a6961c5" class="more-articles-wrapper">
      <div class="cms-collection w-dyn-list">
        <div role="list" class="_2-columns w-dyn-items">
          <div role="listitem" class="cms-item w-dyn-item">
            <a data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d05" href={art1Link} class="cms-link w-inline-block">
              <div class="w-layout-grid thumb-info-small-grid">
                <div class="image-4-to-3 fade-in-1st"><img data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d08" style="opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" src={urlFor(post.articles[0].mainImage).width(200).height(200).url()} alt="" class="bg-image">
                  <div data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d09" style="display:block" class="image-cover-shape"></div>
                </div>
                <div class="category-wrapper fade-in-1st">
                  <div class="caption">{post.articles[0].categories.title}</div>
                  <div class="caption-dot">·</div>
                  <div>{art1Date}</div>
                </div>
                <div>
                  <div class="title-xs fade-in-1st">{post.articles[0].title}</div>
                  <div class="author-wrapper-italic fade-in-1st">
                    <div>by </div>
                    <div>{post.articles[0].authors.name}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div role="listitem" class="cms-item w-dyn-item">
            <a data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d05" href={art2Link} class="cms-link w-inline-block">
              <div class="w-layout-grid thumb-info-small-grid">
                <div class="image-4-to-3 fade-in-1st"><img data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d08" style="opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" src={urlFor(post.articles[1].mainImage).width(200).height(200).url()} alt="" class="bg-image">
                  <div data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d09" style="display:block" class="image-cover-shape"></div>
                </div>
                <div class="category-wrapper fade-in-1st">
                  <div class="caption">{post.articles[1].categories.title}</div>
                  <div class="caption-dot">·</div>
                  <div>{art1Date}</div>
                </div>
                <div>
                  <div class="title-xs fade-in-1st">{post.articles[1].title}</div>
                  <div class="author-wrapper-italic fade-in-1st">
                    <div>by </div>
                    <div>{post.articles[1].authors.name}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<CategoryBox categories={post.cats} />