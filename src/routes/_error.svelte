<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
	console.log(error)
</script>

<style>
	body {
  		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
	}  
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

 <body class="utility-page-wrap">
    <div class="utility-page-content w-form">
      <h2 class="title-s">Page Not Found</h2>
      <p>The page you are looking for doesn&#x27;t exist or has been moved.</p><a href="/" class="button-black w-button">Go back home</a></div>
    <div class="border-white-on-page">
      <div class="body-linen"></div>
    </div>
</body>