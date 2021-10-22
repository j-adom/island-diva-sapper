
<script context="module">
  import client from "../../sanityClient";
	import BlockContent from "@movingbrands/svelte-portable-text";
	import serializers from "../../components/serializers";
  import generateImage from '../../generateImage'

	export async function preload({params}) {
        const filter = `*[_id == "contact"][0]`
        const projection = `{
				...,
        mainImage{
            ...,
            asset->
        }
			}`;
		const query = filter + projection			
		const contact = await client
			.fetch(query)
			.catch(err => this.error(500,err));
		contact.mainImage = generateImage(contact.mainImage)
    return { contact }
	};

</script>

<script>
	import { slide } from 'svelte/transition';
	import Image from '../../components/Image.svelte'

  export let contact
  contact.accordions.map((acc, i) => {
    acc.active = false;
    acc.id = i
  })

  const expand = (acc) => {
		contact.accordions = contact.accordions.map(s => {
			s.active = false
			if (s.id === acc.id) {
				s.active = true
			}
			return s
		})
	}
</script>

    <div class="hero-section">
      <div class="container align-center">
        <div class="grid grid-cols-3 gap-2">
          <div>
            <h1 class="caption text-black fade-in-1st">Contact</h1>
            <div class="title-l fade-in-2nd">Get in touch</div>
            <div class="title-l margin-grid fade-in-3rd"><em>with me!</em></div>
          </div>
          <div class="col-span-2">
            <div class=" fade-in-4th" data-w-id="7a0255d2-0be4-a968-2d7a-dd00ab3eedf0" style="display:block" >
              <Image {...contact.mainImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-layout-grid grid-team">
      <div class="team-section fade-in-5th">
        <div class="w-layout-grid accordion-grid">
          {#each contact.accordions as acc}
            <div data-w-id="081240ea-17b5-0e86-97b4-ab6810aeea7c" class="accordion-wrapper fade-in-1st">
              <div class="accordion-line"></div>
              <div class="accordion-trigger" on:click={() => expand(acc) } >
                <div class="accordion-title-small">{acc.title}</div>
                <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0DEG) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0DEG) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0DEG) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0DEG) skew(0, 0)" class="expand-icon">
                <img src="assets/images/arrow-down.svg" alt=""></div>
              </div>
              {#if acc.active}
                <div class="accordion-content" transition:slide>
                  <div class="accordion-text">{acc.text}</div>
                </div>
              {/if}
              <div data-w-id="081240ea-17b5-0e86-97b4-ab6810aeea86" class="hover-line"></div>
            </div>
          {/each}
        </div>
      </div>
      <div class="team-section fade-in-6th">
        <div class="title-xs margin-grid">Start the conversation</div>
        <div class="form-block w-form">
          <form id="contact-form" data-netlify="true" netlifyHoneypot="bot-field" class="contact-form" name="contactForm" method="POST" data-name="Email Form 2">
            <p class="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div class="horizontal">
              <div class="item-bordered"><label for="name" class="caption">Name</label><input type="text" class="text-field-transparent w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Enter your name" id="name-2"></div>
              <div class="item-bordered last"><label for="email-4" class="caption">Email Address</label><input type="email" class="text-field-transparent w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="Enter your email address" id="email-3"></div>
            </div>
            <div class="item-bordered one"><label for="description" class="caption">Description</label><input type="text" class="text-field-transparent w-input" maxlength="256" name="description-2" data-name="Description 2" placeholder="Enter your description" id="description-2"></div>
            <div class="item-bordered one last"><label for="name" class="caption">Message</label><textarea id="field-2" name="field-2" placeholder="Enter your message" maxlength="5000" data-name="Field 2" class="text-field-transparent w-input"></textarea></div><input type="submit" value="Submit" data-wait="Please wait..." class="submit-button-filled w-button"></form>
          <div class="success-message w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="empty-state w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>

    <style>

    </style>