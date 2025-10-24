import {
	useBlockProps,
	RichText,
	MediaUpload,
	InspectorControls,
	ColorPalette,
	BlockControls,
} from '@wordpress/block-editor';
import { PanelBody, Button, RangeControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

/**
 * Edit function for the Hero Banner block.
 */
export default function Edit({ attributes, setAttributes }) {
	/** Destructure attributes */
	const {
		title,
		subtitle,
		backgroundImage,
		textColor,
		heroHeight,
		textAlignment,
	} = attributes;

	/** Block properties */
	const blockProps = useBlockProps({
		className: `hero-banner align-${textAlignment}`,
		style: {
			color: textColor || '#fff',
			backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			minHeight: heroHeight || 350,
			display: 'flex',
			alignItems: 'center',
			justifyContent: textAlignment === 'left' ? 'flex-start' : 'center',
			textAlign: textAlignment || 'center',
			position: 'relative',
		},
	});

	/** Return the block markup */
	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={textAlignment === 'left'}
						onClick={() => setAttributes({ textAlignment: 'left' })}
						icon="align-left"
						label="Align Left"
					/>
					<ToolbarButton
						isPressed={textAlignment === 'center'}
						onClick={() => setAttributes({ textAlignment: 'center' })}
						icon="align-center"
						label="Align Center"
					/>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title="Background Settings" initialOpen={true}>
					<p><strong>Select Background Image:</strong></p>
					<MediaUpload
						onSelect={(media) => setAttributes({ backgroundImage: media.url })}
						type="image"
						render={({ open }) => (
							<Button onClick={open} variant="secondary">
								{backgroundImage ? 'Change Image' : 'Select Image'}
							</Button>
						)}
					/>
				</PanelBody>

				<PanelBody title="Hero Height" initialOpen={false}>
					<RangeControl
						label="Hero Height (px)"
						value={heroHeight ?? 350}
						onChange={(value) => setAttributes({ heroHeight: value })}
						min={200}
						max={800}
						step={10}
					/>
				</PanelBody>

				<PanelBody title="Text Color" initialOpen={false}>
					<p><strong>Text Color:</strong></p>
					<ColorPalette
						value={textColor || '#ffffff'}
						onChange={(color) => setAttributes({ textColor: color })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div
					className="hero-content"
				>
					<RichText
						tagName="h1"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder="Add your hero title..."
					/>
					<RichText
						tagName="p"
						value={subtitle}
						onChange={(value) => setAttributes({ subtitle: value })}
						placeholder="Add your subtitle..."
					/>
				</div>
			</div>
		</Fragment>
	);
}
