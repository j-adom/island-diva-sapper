

<script>
    import client from "../sanityClient";
    import urlFor from '../sanityImageUrlBuilder'
    
    export let categories
    categories.map(category => {
            category.url = 'blog/categories/' + category.slug.current //Create relative path link for category
    });
</script>

 <div class="content-section">
    <div class="section-title">
        <div class="caption">Explore topics</div>
    </div>
    <div class="cms-collection w-dyn-list">
        <div role="list" class="cms-tag-list w-dyn-items">
            {#each categories as cat}
                <div id="w-node-1a1ca1f50dea-626961c2" data-w-id="11d81cf7-06d4-8189-0da3-1a1ca1f50dea" role="listitem" class="tags-block w-dyn-item">
                    <div class="tags-dot">•</div>
                    <img  src={urlFor(cat.mainImage).width(200).url()} alt="" class="tooltip-image">
                    <a  href={cat.url} class="cms-link w-inline-block">
                        <div>{cat.title}</div>
                        <div data-w-id="11d81cf7-06d4-8189-0da3-1a1ca1f50df0" class="hover-line"></div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</div>