<?php

defined( 'ABSPATH' ) || exit;

// register blocks
function bpnb_register_sample_block() {
    register_block_type(
		__DIR__ . '/build/custom-block',
	);
}
add_action('init', 'bpnb_register_sample_block');

