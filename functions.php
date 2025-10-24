<?php
/**
 * My custom functions and definitions.
 */

// Include the Custom Gutenberg block registration file
require get_template_directory() . '/wp-gutenberg-sample/gutenberg.php';

// Register the dynamic "current-date" block
function bpnb_show_current_date() {
	register_block_type( __DIR__ . '/blocks/current-date', [
        'render_callback' => function( $attributes ) {
            $format = isset( $attributes['format'] ) ? $attributes['format'] : 'F j, Y';
            $prefix = isset( $attributes['prefix'] ) ? $attributes['prefix'] : '';
            $suffix = isset( $attributes['suffix'] ) ? $attributes['suffix'] : '';

            // Respect WP timezone
            $date = current_time( $format );

            return sprintf(
                '<span class="wp-block-sample-current-date">%s%s%s</span>',
                esc_html( $prefix ),
                esc_html( $date ),
                esc_html( $suffix )
            );
        }
    ]);
}
add_action( 'init', 'bpnb_show_current_date' );

// PHP function that modifies WordPress behavior
/**
 * Disable WordPress emoji scripts and styles for performance optimization.
 */
function bpnb_disable_wp_emojicons() {
    // Frontend
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');

    // Admin area
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
}
add_action('init', 'bpnb_disable_wp_emojicons');

// Example: remove WordPress version from frontend for security.
add_filter('the_generator', '__return_empty_string');

/* Modify the excerpt length */
function bpnb_custom_excerpt_length($length) {
    return 20; // Set excerpt length to 20 words
}
add_filter('excerpt_length', 'bpnb_custom_excerpt_length', 999);