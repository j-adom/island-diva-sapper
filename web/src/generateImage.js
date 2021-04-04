import urlFor from './sanityImageUrlBuilder'

function generateImage(image) {
	// aspectRatio (to prevent jank)
	let aspectRatio
	if (image.crop) {
		// priority: set aspectRatio equal to content editor’s crop settings
		aspectRatio =
			getCropFactor(image.crop) * image.asset.metadata.dimensions.aspectRatio
	} else {
		// else, just set aspectRatio equal to the original image’s
		aspectRatio = image.asset.metadata.dimensions.aspectRatio
	}
	const caption = image.caption
	const hotspot = image.hotspot
	// LQIP
	const placeholder = image.asset.metadata.lqip

	// src
	const src = image.hotspot ? urlFor(image).auto('format').focalPoint(hotspot.x,hotspot.y).fit('min').url() : urlFor(image).auto('format').fit('min').url()

	// srcset
	// Change these widths as you need
	const widthsPreset = [640, 768, 1024, 1366]

	const srcset = widthsPreset
		// Make srcset url for each of the above widths
		.map((w) => image.hotspot ? urlFor(image).width(w).focalPoint(hotspot.x,hotspot.y).auto('format').fit('min').url() + ' ' + w + 'w' : urlFor(image).width(w).auto('format').fit('min').url() + ' ' + w + 'w')
		.join(',')

    const alt = image.alt;
	// Return the object shape required by Image.svelte (minus a couple)
	return {
		aspectRatio,
		placeholder,
		src,
        srcset,
		alt,
		caption
	}
}

function getCropFactor({ top, bottom, left, right }) {
	const xFactor = 1 - (left + right)
	const yFactor = 1 - (top + bottom)

	return xFactor / yFactor
}

export default generateImage
