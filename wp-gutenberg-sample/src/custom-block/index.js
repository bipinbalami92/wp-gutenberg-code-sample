import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

import "./style.scss";

/**
 * Internal dependencies
 */
import Save from "./save";
import Edit from "./edit";

/**
 * Block Registration
 */
registerBlockType(metadata, {
    /**
     * @see ./edit.js
     */
    edit: Edit,

    /**
     * @see ./save.js
     */
    save: Save,
});
