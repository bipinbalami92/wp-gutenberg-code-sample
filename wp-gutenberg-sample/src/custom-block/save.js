import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Save function for the Hero Banner block.
 */
export default function save({ attributes }) {
	/** Destructure attributes */
	const {
		title,
		subtitle,
		backgroundImage,
		heroHeight = 350,
		textColor = '#fff',
		textAlignment = 'center',
	} = attributes;

	/** Block properties for save */
	const blockProps = useBlockProps.save({
		className: `hero-banner align-${textAlignment}`,
		style: {
			color: textColor,
			backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			minHeight: `${heroHeight}px`,
			display: 'flex',
			alignItems: 'center',
			justifyContent: textAlignment === 'left' ? 'flex-start' : 'center',
			textAlign: textAlignment,
			position: 'relative',
		},
	});

	/** Return the saved block markup */
	return (
		<div {...blockProps}>
			<div
				className="hero-content"
			>
				<RichText.Content tagName="h1" value={title} />
				<RichText.Content tagName="p" value={subtitle} />
			</div>
		</div>
	);
}
