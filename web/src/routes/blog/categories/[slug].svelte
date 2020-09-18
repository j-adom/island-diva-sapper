
<script context="module">
    import client from "../../../sanityClient";
    import urlFor from '../../../sanityImageUrlBuilder'
    
    export async function preload({params}) {

		const query = `*[_type == "category" && slug.current == $slug][0]{
            ...,
            mainImage{
                ...,
                asset->
            },
            'articles': *[_type == "post" and && references(^._id)]
        }`;
		const category = await client
			.fetch(query)
            .catch(err => this.error(500,err));
        // category.forEach(category => {
        //     category.url = 'blog/categories/' + category.slug.current //Create relative path link for category
        // });
        return {category};
	};

</script>

<script>

    export let category
</script>

<div class="border-white-on-page">
      <div class="body-linen"></div>
</div>

<div class="content-section">
    <div class="container">
    <div class="container">
        <h1 class="title-l margin-grid fade-in-1st">{category.title}</h1>
    </div>
    <div class="w-layout-grid _2-columns-2-to-1">
        <div id="w-node-dd00ab3eedd4-626961c2" class="sticky-top-5vh">
        <div class="cms-collection w-dyn-list">
            <div role="list" class="cms-list w-dyn-items">
            <div role="listitem" class="cms-item fade-in-1st w-dyn-item"><a href="#" data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedd8" class="image-filled-featured w-inline-block"><img data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedd9" style="opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" src="" alt="" class="bg-image"><div class="gradient-bottom"></div><div class="w-layout-grid thumb-info-small-grid"><div class="category-wrapper align-center"><div></div><div class="caption-dot">·</div><div></div><div> min</div></div><div></div><div id="w-node-dd00ab3eedde-626961c2" class="author-wrapper-italic"><div>by </div><div></div></div><div id="w-node-dd00ab3eede3-626961c2" data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eede3" class="post-summary"><div></div></div></div><div data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eede5" style="display:block" class="image-cover-shape"></div></a></div>
            </div>
            <div class="empty-state w-dyn-empty">
            <div>No items found.</div>
            </div>
        </div>
        </div>
        <div id="w-node-dd00ab3eede9-626961c2" class="cms-collection w-dyn-list">
        <div role="list" class="_1-column-2-on-mobile w-dyn-items">
            <div role="listitem" class="cms-item fade-in-1st w-dyn-item">
            <a data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedec" href="#" class="cms-link w-inline-block">
                <div class="w-layout-grid thumb-info-small-grid">
                <div class="image-4-to-3"><img data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedef" style="opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" src="" alt="" class="bg-image">
                    <div data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedf0" style="display:block" class="image-cover-shape"></div>
                </div>
                <div class="category-wrapper">
                    <div></div>
                    <div class="caption-dot">·</div>
                    <div></div>
                    <div> min</div>
                </div>
                <div>
                    <div class="title-xs"></div>
                    <div class="author-wrapper-italic">
                    <div>by </div>
                    <div></div>
                    </div>
                </div>
                </div>
            </a>
            </div>
        </div>
        <div class="empty-state w-dyn-empty">
            <div>No items found.</div>
        </div>
        </div>
    </div>
    </div>
</div>