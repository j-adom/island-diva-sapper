import {format} from 'date-fns'

export default {
  name: 'about',
  type: 'document',
  title: 'About Me',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
      
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'intro',
      type: 'bodyPortableText',
      title: 'Introduction',
      description:
        'This is the lead text on the homepage of the website'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'About Me',
      description:
        'This is the About Me section text'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  "singleInstance": true
}
