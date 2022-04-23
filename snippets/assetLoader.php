<?php
add_action( 'wp_enqueue_scripts', function() {
	// Enqueue your files on the canvas & frontend, not the builder panel. Otherwise custom CSS might affect builder)
	
  if ( ! bricks_is_builder_main() ) {
		wp_enqueue_style( 'bricks-child', get_stylesheet_uri(), ['bricks-frontend'], filemtime( get_stylesheet_directory() . '/style.css' ) );

    }   
});




// ENQUEUE SCRIPTS BY USING wp_enqueue_style | wp_enqueue_script and the corresponding name!

// TOC
wp_register_style('wcd_tocCSS', get_stylesheet_directory_uri() . '/snippets/toc/toc.css' );
wp_register_script('wcd_tocJS', get_stylesheet_directory_uri() . '/snippets/toc/toc.js' );

// ACCORDION
wp_register_style( 'wcd_accordion', get_stylesheet_directory_uri() . '/snippets/accordion/accordion.css' );
wp_register_script( 'wcd_accordion', get_stylesheet_directory_uri() . '/snippets/accordion/accordion.js' );

/*
// codeBlock (GitHub Sync and Code Block --> Elements)
wp_register_style( 'wcd_codeBlock', get_stylesheet_directory_uri() . '/snippets/codeBlock/codeBlock.css' );
wp_register_script( 'wcd_codeBlock', get_stylesheet_directory_uri() . '/snippets/codeBlock/codeBlock.js' );
*/

?>