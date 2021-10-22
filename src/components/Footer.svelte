<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { faTwitter } from '@fortawesome/free-brands-svg-icons/';
    import { faInstagram } from '@fortawesome/free-brands-svg-icons/';
    import { faFacebook } from '@fortawesome/free-brands-svg-icons/';
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons/';
    import { faShare } from '@fortawesome/free-solid-svg-icons'

    export let links;
    export let description;
    function varIcon (icon){
      return Function('"use strict";return ('+ icon +')')();
    }

    const socialLinks = []
    links.forEach(link => {
      let fa
      switch (link.icon) {
        case 'faTwitter':
          fa = faTwitter
          break;
        case 'faFacebook':
            fa = faFacebook
            break;
        case 'faLinkedin':
          fa = faLinkedin
          break;    
        case 'faInstagram':
          fa = faInstagram
          break;
        default:
          fa = faShare
          break;
      }
      socialLinks.push(
        {title: link.title, icon: fa, url: link.url}
      )
    });

</script>

<footer class="">
    <div class="grid grid-col footer-black-newsletter">
       <div id="w-node-53b7af924361-38fffad6" class="w-layout-grid grid-subscribe-footer">
        <div id="w-node-53b7af924362-38fffad6" class="title-s">Sign up for my latest news and content<br></div>
        <div id="mc_embed_signup" class="form-block mb-3 self-center">
          <form action="https://welcometodaniellejames.us17.list-manage.com/subscribe/post?u=8bd3a7e9dc5fdd767ac50727a&amp;id=f7fb26768a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="form-horizontal validate" target="_blank" novalidate>
            <input type="email" class="text-field-filled w-input required email" maxlength="256" name="EMAIL" value="" data-name="Email 3" placeholder="Enter your email address" id="mce-EMAIL">
          
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8bd3a7e9dc5fdd767ac50727a_f7fb26768a" tabindex="-1" value=""></div>
            <input type="submit" value="Sign up" name='subscribe' data-wait="Please wait..." id="mc-embedded-subscribe" class="submit-button-outline w-button" required>
          </form>
        </div>
      </div>
      <div id="w-node-06ea38fffad7-38fffad6" class="container-small left">
        <div class="w-layout-grid thumb-info-large-grid">
        <a href="/">
          <img src="assets/images/logo.png" alt="" class="logo-128px">
        </a>
          <div class="lead">{description}</div>
        </div>
      </div>
      <div id="w-node-06ea38fffadd-38fffad6" class="content">
        <div class="w-layout-grid thumb-info-small-grid">
          <a id="w-node-06ea38fffade-38fffad6" href="/" class="link-white w-inline-block">
            <div>Home</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-06ea38fffae2-38fffad6" href="/#about" class="link-white w-inline-block">
            <div>About</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-ab12b8fb9434-38fffad6" href="portfolio/journalism" class="link-white w-inline-block">
            <div>Journalism</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-25b34c6b2575-38fffad6" href="/blog" class="link-white w-inline-block">
            <div>Blog</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-25b34c6b2575-38fffad6" href="/contactme" class="link-white w-inline-block">
            <div>Contact</div>
            <div class="hover-line"></div>
          </a>


        </div>
      </div>
      <div id="w-node-06ea38fffae6-38fffad6" class="content">
        <div class="w-layout-grid social-icons-grid">
          {#each socialLinks as link}
            <a href={link.url} target="_blank" class="w-inline-block">
              <Icon data={link.icon} scale="2"/>
            </a>
          {/each}
        </div>
      </div>
      <div id="w-node-9b8b498930b5-38fffad6">
        <div>2020, Danielle James</div>
      </div>
    </div>

</footer>


<style>

</style>

