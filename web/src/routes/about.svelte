<script context="module">
  import client from '../sanityClient.js';
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../components/serializers";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params;
    const filter = '*[_type == "about"][0]';
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
      }
    }`;

    const query = filter + projection;
    const about = await client
      .fetch(query,)
      .catch(err => this.error(500, err));
    return { about };
  }
</script>

<script>
  export let about;
</script>


<style>

</style>

<svelte:head>
	<title>About Me</title>
</svelte:head>


<h1>{about.title}</h1>

<div class="">
  <BlockContent blocks={about.body} {serializers} />
</div>
