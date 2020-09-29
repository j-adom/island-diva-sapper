<script context="module">
  import client from "../sanityClient";
	import urlFor from "../sanityImageUrlBuilder"
	import BlockContent from "@movingbrands/svelte-portable-text";
	import serializers from "../components/serializers";
	import generateImage from "../generateImage";		

	export async function preload({ params }) {
        const slug = params.slug;
        const filter = `*[_type == "post" && slug.current == 'a-post-with-some-code'][0]`
        const projection = `{
        ...,
        authors[]->{name, image, slug},
        categories[0]->{title, slug},
				mainImage{
					...,
          asset->
        },
        "articles": *[_type == "post" && featured == true][0..1]
			}`;
		const query = filter + projection			
		const post = await client
			.fetch(query)
			.catch(err => this.error(500,err));
    post.mainImage = generateImage(post.mainImage)
    post.articles[0].mainImage = generateImageImage(post.articles[0].mainImage)
    post.articles[1].mainImage = generateImageImage(post.articles[1].mainImage)
    
		return { post }
	};

</script>

<script>

    import Header from '../components/Header.svelte';
    import Image from '../components/Image.svelte';
    
    export let post = {
        
  "_createdAt": "2019-03-29T11:02:17Z",
  "_id": "fb5f90f7-7980-4b2a-b9da-35cd0a23829a",
  "_rev": "JQ9KrMZ7lHrfhiDxpeqOrO",
  "_type": "post",
  "_updatedAt": "2020-09-09T05:32:39Z",
  "articles": [
    {
      "_createdAt": "2019-04-03T09:22:29Z",
      "_id": "627ac499-68f8-4459-bb3f-c4f24886a888",
      "_rev": "hMDid07oisWgqn69UVb2Y0",
      "_type": "post",
      "_updatedAt": "2020-09-09T20:28:26Z",
      "authors": [
        {
          "_key": "b4675d975461",
          "_ref": "1b1c7451-c976-48fd-b416-73bf5a356f10",
          "_type": "reference"
        }
      ],
      "body": [
        {
          "_key": "d65c200c333d",
          "_type": "block",
          "children": [
            {
              "_key": "d65c200c333d0",
              "_type": "span",
              "marks": [],
              "text": "It's always when I'm out and about I get the message where somebody has found a spelling error in one of my blog posts. I'm so glad that somebody thought of this when they designed Sanity Studio and made it truly responsive. "
            }
          ],
          "markDefs": [],
          "style": "normal"
        },
        {
          "_key": "542052459bc2",
          "_type": "mainImage",
          "alt": "Balloons over landscape",
          "asset": {
            "_ref": "image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png",
            "_type": "reference"
          }
        }
      ],
      "categories": [
        {
          "_key": "34b3e8f6a767",
          "_ref": "da38ee48-4ccb-4632-aed4-fae6aeb77b8c",
          "_type": "reference"
        }
      ],
      "excerpt": [
        {
          "_key": "c7590624e000",
          "_type": "block",
          "children": [
            {
              "_key": "c7590624e0000",
              "_type": "span",
              "marks": [],
              "text": "Less of a hassle when you're out and about and want to fix something quickly."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "featured": true,
      "mainImage": {
        "_type": "mainImage",
        "alt": "Person holding a smart phone",
        "asset": {
          "_ref": "image-6b890fc3902645a75a82c95e18ae6c309c77bab3-1350x900-png",
          "_type": "reference"
        },
        "caption": "Photo by Priscilla Du Preez"
      },
      "publishedAt": "2018-11-14T23:00:00.000Z",
      "slug": {
        "_type": "slug",
        "current": "finally-i-found-a-content-management-system-i-can-use-on-my-phone"
      },
      "title": "A CMS I Can use on My Phone. Finally!"
    },
    {
      "_createdAt": "2019-05-15T18:23:17Z",
      "_id": "6988b935-a657-4243-ac7d-907cbaa7cf86",
      "_rev": "g6LYjVaFo9P2PHAYTkDCgw",
      "_type": "post",
      "_updatedAt": "2020-09-09T20:30:28Z",
      "authors": [
        {
          "_key": "f32df077d477",
          "_ref": "1b1c7451-c976-48fd-b416-73bf5a356f10",
          "_type": "reference"
        }
      ],
      "body": [
        {
          "_key": "81faf10f5e2f",
          "_type": "block",
          "children": [
            {
              "_key": "81faf10f5e2f0",
              "_type": "span",
              "marks": [],
              "text": "Here is a custom block type with some code in it:"
            }
          ],
          "markDefs": [],
          "style": "normal"
        },
        {
          "_key": "7414115ebc76",
          "_type": "code",
          "code": "function factorial(n) {\n  if (n === 0) {\n    return 1;  // 0! = 1\n    }\n    return n * factorial(n - 1);\n}\n\nfactorial(3); // returns 6",
          "language": "javascript"
        },
        {
          "_key": "edfd9eb03b31",
          "_type": "block",
          "children": [
            {
              "_key": "edfd9eb03b310",
              "_type": "span",
              "marks": [],
              "text": "We can even do Python!"
            }
          ],
          "markDefs": [],
          "style": "normal"
        },
        {
          "_key": "67d0338d43ec",
          "_type": "code",
          "code": "def printThisString(string):\n  print(string)\n  \nprintThisString('Is this the room for an argument?')",
          "language": "python"
        }
      ],
      "categories": [
        {
          "_key": "a928d5c733d8",
          "_ref": "da38ee48-4ccb-4632-aed4-fae6aeb77b8c",
          "_type": "reference"
        }
      ],
      "excerpt": [
        {
          "_key": "aa4896e488f5",
          "_type": "block",
          "children": [
            {
              "_key": "aa4896e488f50",
              "_type": "span",
              "marks": [],
              "text": "This is a post with some code in it."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "featured": true,
      "mainImage": {
        "_type": "mainImage",
        "alt": "Two persons working on a website together",
        "asset": {
          "_ref": "image-d9f332007ee64327d5a5f1a8c08a0356886aa561-1920x1080-png",
          "_type": "reference"
        }
      },
      "publishedAt": "2019-05-14T22:00:00.000Z",
      "slug": {
        "_type": "slug",
        "current": "a-post-with-some-code"
      },
      "title": "A post with some code"
    }
  ],
  "authors": [
    {
      "image": {
        "_type": "mainImage",
        "alt": "A person watching the sunset on a mountain. This could be me.",
        "asset": {
          "_ref": "image-601ec1ad78c0c86575a82ef3a6f6442aa10a169a-1504x1000-png",
          "_type": "reference"
        },
        "caption": "Photo by Alexandru Zdrobău",
        "crop": {
          "_type": "sanity.imageCrop",
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0
        },
        "hotspot": {
          "_type": "sanity.imageHotspot",
          "height": 0.6417120093276327,
          "width": 0.449596774193548,
          "x": 0.2399193548387093,
          "y": 0.5667994558880687
        }
      },
      "name": "My name",
      "slug": {
        "_type": "slug",
        "current": "my-name"
      }
    }
  ],
  "body": [
    {
      "_key": "40b13084f220",
      "_type": "block",
      "children": [
        {
          "_key": "40b13084f2200",
          "_type": "span",
          "marks": [],
          "text": "Welcome to my new blog!"
        }
      ],
      "markDefs": [],
      "style": "h2"
    },
    {
      "_key": "9a4ad8631455",
      "_type": "block",
      "children": [
        {
          "_key": "9a4ad86314550",
          "_type": "span",
          "marks": [],
          "text": "What just happened?"
        }
      ],
      "markDefs": [],
      "style": "normal"
    },
    {
      "_key": "5f70a8d9a3a5",
      "_type": "block",
      "children": [
        {
          "_key": "5f70a8d9a3a50",
          "_type": "span",
          "marks": [],
          "text": "I have just added a new repository to my GitHub account. There I have all the code for this blog’s frontend made with "
        },
        {
          "_key": "5f70a8d9a3a51",
          "_type": "span",
          "marks": [
            "127b25b227a1"
          ],
          "text": "Sapper"
        },
        {
          "_key": "5f70a8d9a3a52",
          "_type": "span",
          "marks": [],
          "text": " and Sanity Studio, the environment where I will be editing my content. They are deployed on Netlify. So everything is ready for me to get started with blogging! I can even edit content and use the Netlify widget on the Studio’s dashboard to deploy new changes to the web."
        }
      ],
      "markDefs": [
        {
          "_key": "127b25b227a1",
          "_type": "link",
          "href": "https://sapper.svelte.dev"
        }
      ],
      "style": "normal"
    },
    {
      "_key": "c029142d174c",
      "_type": "block",
      "children": [
        {
          "_key": "c029142d174c0",
          "_type": "span",
          "marks": [],
          "text": "Sanity.io lets me work with structured content. That means I can add more content types. Who knows, I might add my portfolio"
        },
        {
          "_key": "c029142d174c1",
          "_type": "span",
          "marks": [
            "a392c3373bb9"
          ],
          "text": "maybe a podcast"
        },
        {
          "_key": "c029142d174c2",
          "_type": "span",
          "marks": [],
          "text": ", "
        },
        {
          "_key": "c029142d174c3",
          "_type": "span",
          "marks": [
            "d3e6dcd626c7"
          ],
          "text": "some products that I need to market"
        },
        {
          "_key": "c029142d174c4",
          "_type": "span",
          "marks": [],
          "text": ", or my poetry collection (that I totally have)! I can even connect other frontends to my Sanity project when I find that new framework I just need to try out. "
        }
      ],
      "markDefs": [
        {
          "_key": "a392c3373bb9",
          "_type": "link",
          "href": "https://github.com/kmelve/sanity-plugin-podcast"
        },
        {
          "_key": "d3e6dcd626c7",
          "_type": "link",
          "href": "https://www.sanity.io/blog/e-commerce-sample-schema"
        }
      ],
      "style": "normal"
    },
    {
      "_key": "fa93b094722a",
      "_type": "block",
      "children": [
        {
          "_key": "fa93b094722a0",
          "_type": "span",
          "marks": [],
          "text": "But firstly, how could I make this blog my own special place on the internet? "
        }
      ],
      "markDefs": [],
      "style": "normal"
    },
    {
      "_key": "13d2461af5e3",
      "_type": "block",
      "children": [
        {
          "_key": "13d2461af5e30",
          "_type": "span",
          "marks": [],
          "text": "I should probably check out the tutorial videos on how to get started with customizing both the content schema and the frontend accordingly. I'm sure I'll find them on the dashboard in the Studio."
        }
      ],
      "markDefs": [],
      "style": "normal"
    },
    {
      "_key": "39b4427b7261",
      "_type": "block",
      "children": [
        {
          "_key": "39b4427b72610",
          "_type": "span",
          "marks": [],
          "text": "There's plenty of cool things I could explore:"
        }
      ],
      "markDefs": [],
      "style": "normal"
    },
    {
      "_key": "8ac5774471c8",
      "_type": "block",
      "children": [
        {
          "_key": "8ac5774471c80",
          "_type": "span",
          "marks": [],
          "text": ""
        },
        {
          "_key": "8ac5774471c81",
          "_type": "span",
          "marks": [
            "42ab54eb92d5"
          ],
          "text": "How to customize content schemas"
        },
        {
          "_key": "8ac5774471c82",
          "_type": "span",
          "marks": [],
          "text": ""
        }
      ],
      "level": 1,
      "listItem": "bullet",
      "markDefs": [
        {
          "_key": "42ab54eb92d5",
          "_type": "link",
          "href": "https://www.sanity.io/docs/the-blog-template"
        }
      ],
      "style": "normal"
    },
    {
      "_key": "92920ddc15cc",
      "_type": "block",
      "children": [
        {
          "_key": "92920ddc15cc0",
          "_type": "span",
          "marks": [],
          "text": ""
        },
        {
          "_key": "92920ddc15cc1",
          "_type": "span",
          "marks": [
            "a545cb11559d"
          ],
          "text": "How to use structure builder to make my own workflows"
        },
        {
          "_key": "92920ddc15cc2",
          "_type": "span",
          "marks": [],
          "text": ""
        }
      ],
      "level": 1,
      "listItem": "bullet",
      "markDefs": [
        {
          "_key": "a545cb11559d",
          "_type": "link",
          "href": "https://www.sanity.io/docs/content-studio/structure-builder"
        }
      ],
      "style": "normal"
    },
    {
      "_key": "eaef5b5ac038",
      "_type": "block",
      "children": [
        {
          "_key": "eaef5b5ac0380",
          "_type": "span",
          "marks": [],
          "text": ""
        },
        {
          "_key": "eaef5b5ac0381",
          "_type": "span",
          "marks": [
            "5a6ad4c40176"
          ],
          "text": "How to manage widgets on my dashboard"
        },
        {
          "_key": "eaef5b5ac0382",
          "_type": "span",
          "marks": [],
          "text": ""
        }
      ],
      "level": 1,
      "listItem": "bullet",
      "markDefs": [
        {
          "_key": "5a6ad4c40176",
          "_type": "link",
          "href": "https://github.com/sanity-io/sanity/blob/next/packages/%40sanity/dashboard/README.md"
        }
      ],
      "style": "normal"
    },
    {
      "_key": "5bcf2a0ca3d3",
      "_type": "block",
      "children": [
        {
          "_key": "5bcf2a0ca3d30",
          "_type": "span",
          "marks": [],
          "text": ""
        }
      ],
      "markDefs": [],
      "style": "normal"
    },
    {
      "_key": "4c3f4a4de0fd",
      "_type": "block",
      "children": [
        {
          "_key": "4c3f4a4de0fd0",
          "_type": "span",
          "marks": [],
          "text": "And if I get stuck, I could always seek help in "
        },
        {
          "_key": "4c3f4a4de0fd1",
          "_type": "span",
          "marks": [
            "db577efc1b4d"
          ],
          "text": "the friendly developer community"
        },
        {
          "_key": "4c3f4a4de0fd2",
          "_type": "span",
          "marks": [],
          "text": "."
        }
      ],
      "markDefs": [
        {
          "_key": "db577efc1b4d",
          "_type": "link",
          "href": "https://slack.sanity.io"
        }
      ],
      "style": "normal"
    }
  ],
  "categories": {
    "title": "Structured content",
    "slug":{
        "_type":"slug",
        "current":"structured-content"
        }
  },
  "excerpt": [
    {
      "_key": "37ffaff549b9",
      "_type": "block",
      "children": [
        {
          "_key": "37ffaff549b90",
          "_type": "span",
          "marks": [],
          "text": "Congratulations to me! I now have a blog powered by Sapper and Sanity.io."
        }
      ],
      "markDefs": [],
      "style": "normal"
    }
  ],
  "mainImage": {
    "_type": "mainImage",
    "alt": "Mountains in cloudly weather with a beach.",
    "asset": {
      "_createdAt": "2020-06-08T20:17:01Z",
      "_id": "image-7d75d6340e6ecdb88e7b6019e23a443dcb939aec-1500x1000-png",
      "_rev": "DMLSC0OE6VqXYshcjGWF3m",
      "_type": "sanity.imageAsset",
      "_updatedAt": "2020-06-08T20:17:01Z",
      "assetId": "7d75d6340e6ecdb88e7b6019e23a443dcb939aec",
      "extension": "png",
      "metadata": {
        "_type": "sanity.imageMetadata",
        "dimensions": {
          "_type": "sanity.imageDimensions",
          "aspectRatio": 1.5,
          "height": 1000,
          "width": 1500
        },
        "hasAlpha": true,
        "isOpaque": true,
        "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADaklEQVQ4yx3S3U9TZwDH8f4ZyzZxhb6/nJ625/S9pZXyUuibRem0KasDESiUUpSXYi0QQCZ0cyrOoNMtLJrJxRxbsiVmmOyCC7wwy7Is3uxf+e4JF9/knIvzeX4552h83QPEUjmSQ5fID1/h87EJylPT3Jibpbm8yPqtOss3alyvTLIwU2apWqYuWqxMsFQZZ7txnZd7Lf789Tknf7xCo3YliCazZPIFCqURAY4zUS5Tq1ZYXV6gtdHki5U6q4s1Vuar3JqrcHO2TKM6SXN2klZjjhe7Wxz99D1v3xyicUV7CPelBHj5FCyNjHFtfJzazDQbjUUebq/z5O4We60NHt1Z495Gg6/W6nwterBe52lrlV/2v+Hk6JC/T96gkSNxvF199GRy5D4tkC8UKQwPMzF2lebCHA+2Vtl/uMPLb+/xo+j53l1eiA6e3ufwh0f8fvAdx69f8e+7Y/57/5cAQ+eQgzG8sW56kmlSmTS9vb0kB/oZLRWp18TSm/Pcbi6y1phnvblE6/YKu19u8ni3xbO9+/x8sM/b4yPe//MOjdntxeT0YHEqqF4fkaAfn+rG7/WQ6ImTSSVJJQdI9PcTi8eJivrEYalsmvT5LINDF5itTvHs8S6vfxMfRWeV0Fls6AxGzAYDdrMJq0h22Al6FYGLgzwe/KEInmAIh+pBUjzY3SomhxOz7CIUizIyeoWdOxto9Ho9ep0OnVaLuUOL3ajDZNBjFLnsVgIuCb8iHgoFCEUiqP4ATo9XoAKUZAySQ+AKXd1xxkZLaAJOO4pVLNNpkY3tBB1mgk4bstWE0yauXXbCbomw4sAnYKfLic0hY7JL6G12DHYBKgrhzgjpVD+aTFeQsNOKS2CquYOEauVCVCUdVkgE3fSJEn6ZbEgmExH3UT+RzhCSeMd6WT7NKkDF7yMYDqEJKxKqWKha9PhsBrpdJs4H7FyMuCj1+E67FFO42uelOhilUszwWSlPNJ3AGgygd7vRi8UGsdZosaKx6trxSmZ6Qyq9QZVUxEOuUyXjl8iHJIpRmeI5F9VsmM2RJJvTl5mZHKY704/Fo6C1WDirN9Cm7eDDj9vEf2gxkolHmCjkGM2nmSoOUitdpDQQJReQyKgmhoJ2KpkQ29fS7EzlmSxm8Qc8Amk/Rc6cbaftkw4++OgM/wM05QQ1HOlNZAAAAABJRU5ErkJggg==",
        "palette": {
          "_type": "sanity.imagePalette",
          "darkMuted": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#412f27",
            "foreground": "#fff",
            "population": 6.38,
            "title": "#fff"
          },
          "darkVibrant": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#743424",
            "foreground": "#fff",
            "population": 0,
            "title": "#fff"
          },
          "dominant": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#b7a99c",
            "foreground": "#000",
            "population": 7.58,
            "title": "#fff"
          },
          "lightMuted": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#b7a99c",
            "foreground": "#000",
            "population": 7.58,
            "title": "#fff"
          },
          "lightVibrant": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#e8c5b4",
            "foreground": "#000",
            "population": 0.05,
            "title": "#000"
          },
          "muted": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#8f7e75",
            "foreground": "#fff",
            "population": 2.87,
            "title": "#fff"
          },
          "vibrant": {
            "_type": "sanity.imagePaletteSwatch",
            "background": "#ae6c36",
            "foreground": "#fff",
            "population": 0.01,
            "title": "#fff"
          }
        }
      },
      "mimeType": "image/png",
      "originalFilename": "image.png",
      "path": "images/synklyv9/production/7d75d6340e6ecdb88e7b6019e23a443dcb939aec-1500x1000.png",
      "sha1hash": "7d75d6340e6ecdb88e7b6019e23a443dcb939aec",
      "size": 2202029,
      "uploadId": "xkXYANHubaiOIH6ov6qU6QdPLCRZD4aa",
      "url": "https://cdn.sanity.io/images/synklyv9/production/7d75d6340e6ecdb88e7b6019e23a443dcb939aec-1500x1000.png"
    },
    "caption": "Inspiring photo of a Norwegian mountain view. Photo by Torbjorn Sandbakk.",
    "crop": {
      "_type": "sanity.imageCrop",
      "bottom": 0,
      "left": 0,
      "right": 0,
      "top": 0
    },
    "hotspot": {
      "_type": "sanity.imageHotspot",
      "height": 0.4845591860517232,
      "width": 1,
      "x": 0.5,
      "y": 0.7577204069741383
    }
  },
  "publishedAt": "2019-04-17T22:00:00.000Z",
  "slug": {
    "_type": "slug",
    "current": "my-brand-new-blog-powered-by-sanity-io-sapper"
  },
  "title": "My brand new blog powered by Sanity.io"
}
    
    console.log(post);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    function formatDate (utc) {
      const d = new Date(utc)
      const monthName = months[d.getMonth()]
      const year = d.getFullYear()
      const date = d.getDate()
      const fullDate = `${monthName} ${date}, ${year}`
      return fullDate
    }
    const postDate = formatDate(post.publishedAt)
    const art1Date = formatDate(post.articles[0].publishedAt)
    const art2Date = formatDate(post.articles[1].publishedAt)
    const catLink = "blog/categories/" + post.categories.slug.current
    const art1Link = "blog/posts/" + post.articles[0].slug.current
    const art2Link = "blog/posts/" + post.articles[1].slug.current
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>


<div class="border-white-on-page">
  <div class="body-linen"></div>
</div>

<Header />

<div class="content-section-space-desktop">
  <div class="w-layout-grid hero-grid">
    <div id="w-node-7e1409ad8b74-2a6961c5" class="bg-hero fade-in-6th"></div>
    <div id="w-node-7e1409ad8b75-2a6961c5" class="image-size-hero fade-in-1st"><img src={urlFor(post.mainImage).url()} alt="" class="bg-image post-detail">
      <div data-w-id="73ff716b-42ec-1be0-ec5c-7e1409ad8b77" style="display:block" class="image-cover-shape"></div>
    </div>
    <div id="w-node-7e1409ad8b78-2a6961c5" class="hero-block-spacing">
      <div class="w-layout-grid thumb-info-large-grid">
        <div class="category-wrapper fade-in-2nd">
          <div><em>Published in  </em></div>
          <a data-w-id="73ff716b-42ec-1be0-ec5c-7e1409ad8b7c" href={catLink} class="link-block w-inline-block">
            <div>{post.categories.title}</div>
            <div class="hover-line primary-2"></div>
          </a>
          <div><em> on  </em></div>
          <div>{postDate}</div>
        </div>
        <h1 class="title-m fade-in-3rd">{post.title}</h1>
      </div>
      <div class="w-layout-grid grid-shift">
        <div id="w-node-1ca258b583ab-2a6961c5" class="lead fade-in-4th"></div>
        <div id="w-node-b646d5d58cf7-2a6961c5" class="w-layout-grid author-detail fade-in-1st"><img src={urlFor(post.authors[0].image).width(100).height(100).url()} alt="" class="userpic">
          <a id="w-node-6d646b581d53-2a6961c5" data-w-id="73767d73-32c6-55e5-5c10-6d646b581d53" href="#aboutme" class="link-black w-inline-block">
            <div>{post.authors[0].name}</div>
            <div class="hover-line primary-2"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="post-body-section">
  <div class="w-layout-grid post-body-grid">
    <div id="w-node-765e2d44465f-2a6961c5" class="fade-in-1st w-richtext">
					<BlockContent blocks = {post.body} {serializers} />
    </div>
  </div>
  <div class="cms-collection w-dyn-list">
    <div role="list" class="multi-image-grid w-dyn-items">
      <div role="listitem" class="w-dyn-item"><img src="" alt="" class="fade-in-1st"></div>
    </div>
    <div class="empty-state w-dyn-empty">
      <div>No items found.</div>
    </div>
  </div>
  {#if post.body2}
    <div class="w-layout-grid post-body-grid">
      <div id="w-node-765e2d444668-2a6961c5" class="fade-in-1st w-richtext">
        <BlockContent blocks = {post.body2} {serializers} />
      </div>
    </div>
  {/if}
</div>
<div class="content-section fade-in-1st">
  <div class="w-layout-grid more-articles-grid">
    <div id="w-node-52a9bd0b7cfd-2a6961c5" class="more-articles-header-wrapper">
      <div class="title-m fade-in-1st">More Articles<br></div>
    </div>
    <div id="w-node-52a9bd0b7d01-2a6961c5" class="more-articles-wrapper">
      <div class="cms-collection w-dyn-list">
        <div role="list" class="_2-columns w-dyn-items">
          <div role="listitem" class="cms-item w-dyn-item">
            <a data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d05" href={art1Link} class="cms-link w-inline-block">
              <div class="w-layout-grid thumb-info-small-grid">
                <div class="image-4-to-3 fade-in-1st"><img data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d08" style="opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" src={urlFor(post.articles[0].mainImage).width(200).height(200).url()} alt="" class="bg-image">
                  <div data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d09" style="display:block" class="image-cover-shape"></div>
                </div>
                <div class="category-wrapper fade-in-1st">
                  <div class="caption">{post.articles[0].categories.title}</div>
                  <div class="caption-dot">·</div>
                  <div>{art1Date}</div>
                </div>
                <div>
                  <div class="title-xs fade-in-1st">{post.articles[0].title}</div>
                  <div class="author-wrapper-italic fade-in-1st">
                    <div>by </div>
                    <div>{post.articles[0].authors.name}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div role="listitem" class="cms-item w-dyn-item">
            <a data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d05" href={art2Link} class="cms-link w-inline-block">
              <div class="w-layout-grid thumb-info-small-grid">
                <div class="image-4-to-3 fade-in-1st"><img data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d08" style="opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" src={urlFor(post.articles[1].mainImage).width(200).height(200).url()} alt="" class="bg-image">
                  <div data-w-id="de9fb320-1c07-71a1-9ee1-52a9bd0b7d09" style="display:block" class="image-cover-shape"></div>
                </div>
                <div class="category-wrapper fade-in-1st">
                  <div class="caption">{post.articles[1].categories.title}</div>
                  <div class="caption-dot">·</div>
                  <div>{art1Date}</div>
                </div>
                <div>
                  <div class="title-xs fade-in-1st">{post.articles[1].title}</div>
                  <div class="author-wrapper-italic fade-in-1st">
                    <div>by </div>
                    <div>{post.articles[1].authors.name}</div>
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