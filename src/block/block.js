/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.blockEditor
const { withColors } = wp.blockEditor
const {	PanelColorSettings} = wp.blockEditor;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-my-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'my-block - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'my-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		align: {
			type: 'string',
			default: 'full',
		},
		link_text: {
			selector: 'a', // tag a
			source: 'children',  // children of a, to bind the link text
		},
		link_url: {
				selector: 'a',  // tag a
				source: 'attribute', // attribute of the tag
				attribute: 'href', // attribute href, to bind the href of the link
		},
		txtColor: {
			type: 'string'
		},
		bgColor: {
			type: 'string'
		},
	},
	supports: {
		align:true,
		//align: ['wide','full'], // limit only to these
	},

	getEditWrapperProps() {
		return {
			'data-align': 'full',
		};
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	// Use array destructuring of props
	edit: ({ attributes, className, setAttributes } = props) => {

		// Use array destructuring of the attributes
		const { link_text, link_url, txtColor, bgColor } = attributes;

		function onChangeContentURL ( content ) {
			setAttributes({link_url: content})
		}

		function onChangeContentName ( content ) {
			setAttributes({link_text: content})
		}    
		
		function onChangeBGColor ( content ) {
			setAttributes({bgColor: content})
		}  

		function onChangeColor ( content ) {
			setAttributes({txtColor: content})
		}    



		// Creates a <p class='wp-block-cgb-block-my-block test'></p>.
		return (
			
			
			<div className={ className } style={{ backgroundColor:bgColor, color: txtColor }}>


            <InspectorControls key= { 'inspector' } >
                    <PanelBody>

                    <PanelColorSettings 
                        title={ __('Title Color', 'tar') }
                        colorSettings= { [ 
                            {
                            value: txtColor,
                            onChange: (colorValue) => onChangeColor ( colorValue ),
                            label: __('Color', 'tar'),
                            },
                         ] }
                    />

                    <PanelColorSettings 
                        title={ __('Background Color', 'tar') }
                        colorSettings= { [ 
                            {
                            value: bgColor,
                            onChange: (colorValue) => onChangeBGColor ( colorValue ),
                            label: __('Color', 'tar'),
                            },
                         ] }
                    />

                </PanelBody>
            </InspectorControls>




				<p>Sample Link Block</p>
				<label>Name:</label>
				<RichText
						className={className} // Automatic class: gutenberg-blocks-sample-block-editable
						onChange={onChangeContentName} // onChange event callback
						value={link_text} // Binding
						placeholder="Name of the link"
				/>
				<label>URL:</label>
				<RichText
						format="string"             // Default is 'element'. Wouldn't work for a tag attribute
						className={className} // Automatic class: gutenberg-blocks-sample-block-editable
						onChange={onChangeContentURL} // onChange event callback
						value={link_url} // Binding
						placeholder="URL of the link"
				/>   
				<p>— Hello from the backend.!!</p>

			</div>
		);
	},

/**
 * The save function defines the way in which the different attributes should be combined
 * into the final markup, which is then serialized by Gutenberg into post_content.
 *
 * The "save" property must be specified and must be a valid function.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
 *
 * @param {Object} props Props.
 * @returns {Mixed} JSX Frontend HTML.
 */
// Use array destructuring of props
save: ({ attributes, className } = props) => {

	// Use array destructuring of the attributes
	const { txtColor, bgColor, link_url, link_text } = attributes;

	return (
			<div className={className} style={{ backgroundColor: bgColor, color: txtColor }}>
					<p>— Hello from the frontend.</p>
					<a href={link_url}>{link_text}</a>
			</div >
	);
},
});