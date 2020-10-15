<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../components/serializers";
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';
  
  const { page } = stores();
  $: console.log($page.params);

  let searchType;
  let searchQuery ;
  let searchTerm = null;
  let totalPages = null;
  let searchResults = [];
  let nextPage = 1;
  let isLoading = false;
  let start = 0;
  let resultsPer = 24;
  let end = start + resultsPer
  

  function handleSubmit() {
    searchTerm = searchQuery.trim();
    searchResults = [];
    totalPages = null;
    nextPage = 1;

    if (!searchTerm) return;

    searchSanity(searchQuery);
  }

  function searchSanity(query) {
    isLoading = true;
    const sanityQuery = `*[_type == "post" && [title, excerpt, body, body2] match ['${query}']][${start}..${resultsPer}]`
    const endpoint = 'https://synklyv9.api.sanity.io/v1/data/query/production?query=' + encodeURIComponent(sanityQuery);
    console.log(endpoint)
    fetch(endpoint)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.result.length < 1) {
          alert("No matches were found for your search query. Please try to adjust your search type")
          return;
        }

        searchResults = [...data.result];
        searchResults.map(result => {
            result.url = 'blog/posts/' + result.slug.current //Create relative path link for category
        });
        totalPages = data.result.length % resultsPer + 1;
        console.log(searchResults)

        if (nextPage < totalPages) {
          nextPage += 1;
          end =
          start = nextPage * resultsPer
        }
        
      })

  }

  onMount(async () => {
      searchSanity($page.query.query)
  })
</script>

<div class="content-section">
  <div class="container">
    <h1 class="title-l fade-in-1st" > Search results </h1>
    <form action="/search" on:submit|preventDefault={handleSubmit} class="search fade-in-2nd w-form">
      <input type="search" class="text-field w-input" maxlength="256" name="query" placeholder="Search…" id="search" required="" bind:value={searchQuery} />
      <input type="submit" value="Search" class="submit-button w-button" />
    </form>
  </div>
  <div class="border-white-in-section">
    <div class="body-linen" />
  </div>
</div>

<div class="content-section fade-in-3rd">
  <div class="container">
    <div>
      <div class="search-result-items">
        {#each searchResults as res}
            <div>
          <a data-w-id="de91b989-af6d-d4fb-fcaf-d770aa87e3ec" href={res.url} class="search-result-item w-inline-block">
            <p class="title-s" style="color: rgb(31, 31, 31);">
              {res.title}
            </p>
            <div class="caption text-grey">
              welcomtodaniellejames.com/{res.url}
            </div>
            <BlockContent blocks = {res.excerpt} {serializers} />
            <div data-w-id="06f344c0-9e5e-4e67-6a27-348626753842" class="hover-line"/>
          </a>
        </div>
        {/each}
      </div>
    </div>
  </div>
</div>
