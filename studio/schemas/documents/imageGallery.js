export default {
    "type": "document",
    "name": "imageGallery",
    "title": "Image Gallery",
    "fields": [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'What was the event?'
        
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontends will require a slug to be set to be able to show the person',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            "type": "array",
            "name": "photos",
            "title": "Gallery Photos",
            "description": "A list of photos for the gallery.",
            "validation": null,
            of: [
                {
                  type: 'mainImage',
                  options: {
                    hotspot: true
                  }
                }
            ],
            "preview": {
                "select": {
                    "title": "title"
                }
            }
        }
    ],
}