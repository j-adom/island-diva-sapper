<script context="module">
    import client from "../../sanityClient";
	
    export async function preload({params}) {
        const filter = `*[_type == "category"]` 
        
        const projection = `{
                                ...,
                                mainImage{
                                    ...,
                                    asset->
                                }
                            } `
        
        const query = filter + projection;
        const categories = await client
            .fetch(query)
            .catch(err => this.error(500,err));
        return {categories};
    };
    
</script> 
<script>
    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'

    export let categories

    const categories$ = writable(categories)

    // this updates the store's value when `categories` changes
    // syntactic sugar for: categories$.set(categories)
    $: $categories$ = categories

    setContext('categories', categories$)
    
</script>

<slot >
</slot>