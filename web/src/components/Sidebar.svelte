<script>
    import NavLinks from './NavLinks.svelte'
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import {facebook, twitter, instagram, linkedin} from 'svelte-awesome/icons';

    export let links;
    export let segment;

    export let open = false

</script>

<aside class="md:hidden absolute text-center mt-24 pt-24 w-full h-full text-gray-200 bg-gray-900  shadow-lg" class:open>
	<ul class="menu font-serif border-gray-200  text-2xl" class:open on:click={() => open = !open}>
                <li class="menu-item hover:text-gray-500"><a class='{segment === undefined ? "text-gray-500" : ""}' href='.'>Home</a></li>
                <li class="menu-item hover:text-gray-500"><a class='{segment === "about" ? "text-gray-500" : ""}' href='about'>About</a></li>
                <li class="menu-item hover:text-gray-500"><a rel=prefetch class='{segment === "journalism" ? "text-gray-500" : ""}' href='journalism'>Journalism</a></li>
                <li class="menu-item hover:text-gray-500"><a rel=prefetch class='{segment === "blog" ? "text-gray-500" : ""}' href='blog'>Blog</a></li>
                <li class="menu-item hover:text-gray-500"><a class='{segment === "contact" ? "text-gray-500" : ""}' href='contact'>Contact</a></li>
    </ul>
    <div class="flex flex-wrap justify-between mt-10 social-links">
            <a class="items-center border-2 border-solid hover:bg-blue-400" 
                target="_blank" rel="noreferrer nopener" href={links[0].url}>
                <Icon data={twitter} />
            </a>
            <a class="items-center border-2 border-solid hover:bg-pink-800" target="_blank" rel="noreferrer nopener" href={links[1].url}>
                <Icon data={instagram} />
            </a>                    <a class="items-center border-2 border-solid hover:bg-blue-800" target="_blank" rel="noreferrer nopener" href={links[2].url}>
                <Icon data={linkedin} />
            </a>                    <a class="items-center border-2 border-solid hover:bg-blue-700" target="_blank" rel="noreferrer nopener" href={links[3].url}>
                <Icon data={facebook} />
            </a>
    </div>
</aside>

<style>
	aside {
		right: -100%;
		transition: right 0.3s ease-in-out
	}
	
	.open {
		right: 0;
    }

 
    .social-links a {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        border: 2px solid ;
        border-radius: 50%;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        height: 36px;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        margin: 0 5% 0.5em 0;
        -webkit-transition: 0.3s ease;
        transition: 0.3s ease;
        width: 36px;
    }

    .menu {
    border-bottom: 1px dashed ;
    font-weight: bold;
    line-height: 1.5;
    list-style: none;
    margin: 0;
    padding: 0;
    }

    .menu-item {
    border-top: 1px dashed ;
    padding: 0.5em 0;
    }
    .menu-item a {
        border: 0;
        display: inline-block;
    }


  /* @media only screen and (max-width: 768px) {

    .menu-item {
    padding: 0;
    }
    .menu-item a {
      display: block;
      padding: 0.5em 0;
    }
  
  } */
</style>