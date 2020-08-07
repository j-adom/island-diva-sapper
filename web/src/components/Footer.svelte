<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { faTwitter } from '@fortawesome/free-brands-svg-icons/';
    import { faInstagram } from '@fortawesome/free-brands-svg-icons/';
    import { faFacebook } from '@fortawesome/free-brands-svg-icons/';
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons/';
    export let links;
    
    const socialLinkds = []
    links.forEach(link => {
      socialLinks.push(
        {title: link.title, comp}
      )
    });
    
    
    
    console.log(links[0].icon)
</script>

<footer class="">
    <div class="grid grid-col footer-black-newsletter">
       <div id="w-node-53b7af924361-38fffad6" class="w-layout-grid grid-subscribe-footer">
        <div id="w-node-53b7af924362-38fffad6" class="title-s">Sign up for my latest news and content<br></div>
        <div id="w-node-53b7af924365-38fffad6" class="form-block w-form">
          <form id="email-form" name="email-form" data-name="Email Form" class="form-horizontal"><input type="email" class="text-field-filled w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="Enter your email address" id="email-3" required=""><input type="submit" value="Sign up" data-wait="Please wait..." class="submit-button-outline w-button"></form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
      <div id="w-node-06ea38fffad7-38fffad6" class="container-small left">
        <div class="w-layout-grid thumb-info-large-grid"><img src="assets/images/logo.png" alt="" class="logo-128px">
          <div class="lead">Blogos celebrates, inspires and supports the creative community. Launched in 2009, we love to explore the very best creativity and offer interviews, tips and ideas to help you succeed.</div>
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
          <a id="w-node-ab12b8fb9434-38fffad6" href="contact/contact-1.html" class="link-white w-inline-block">
            <div>Contact</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-25b34c6b2575-38fffad6" href="privacy-policy.html" class="link-white w-inline-block">
            <div>Legal</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-61f7b98f3db8-38fffad6" href="template/styleguide.html" class="link-white w-inline-block">
            <div>Style guide</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-6c5b174e22bd-38fffad6" href="template/instructions.html" class="link-white w-inline-block">
            <div>Instructions</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-f3d4b3d92777-38fffad6" href="template/licensing.html" class="link-white w-inline-block">
            <div>Image license</div>
            <div class="hover-line"></div>
          </a>
          <a id="w-node-38a96b75698c-38fffad6" href="template/changelog.html" class="link-white w-inline-block">
            <div>Changelog</div>
            <div class="hover-line"></div>
          </a>
        </div>
      </div>
      <div id="w-node-06ea38fffae6-38fffad6" class="content">
        <div class="w-layout-grid social-icons-grid">
          <!-- {#each links as link} -->
            <a href={links[0].url} target="_blank" class="w-inline-block">
              <Icon data={links.icon} scale="3"/>
            </a>
          <!-- {/each} -->
          <a href={links[0].url} target="_blank" class="w-inline-block">
            <img src="https://uploads-ssl.webflow.com/5e0b2bcfeae07e08477d57f5/5e493847baff8f1526ab8cbd_instagram-white.svg" alt="" class="icon-20px">
          </a>
          <a href="https://www.instagram.com" target="_blank" class="w-inline-block">
            <img src="https://uploads-ssl.webflow.com/5e0b2bcfeae07e08477d57f5/5e493898a90a2c31d73d2447_facebook-white.svg" alt="" class="icon-20px"></a>
          <a href="https://www.instagram.com" target="_blank" class="w-inline-block">
            <img src="https://uploads-ssl.webflow.com/5e0b2bcfeae07e08477d57f5/5e4938ab353d45b1ebb30202_twitter-white.svg" alt="" class="icon-20px"></a><a data-w-id="78059a4b-4334-4a3a-2423-1de031a59390" href="https://www.instagram.com" target="_blank" class="w-inline-block"><img src="https://uploads-ssl.webflow.com/5e0b2bcfeae07e08477d57f5/5e493850353d453eb1b2fef3_pinterest-white.svg" alt="" class="icon-20px"></a></div>
      </div>
      <div id="w-node-9b8b498930b5-38fffad6">
        <div>2020, Danielle James</div>
      </div>
    </div>

</footer>


<style>

</style>