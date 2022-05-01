<?php
add_action( 'wp_enqueue_scripts', function() {
	// Enqueue your files on the canvas & frontend, not the builder panel. Otherwise custom CSS might affect builder)
	
  if ( ! bricks_is_builder_main() ) {
		wp_enqueue_style( 'bricks-child', get_stylesheet_uri(), ['bricks-frontend'], filemtime( get_stylesheet_directory() . '/style.css' ) );

    }   
});




// ENQUEUE SCRIPTS BY USING wp_enqueue_style | wp_enqueue_script and the corresponding name!


// RM RL
wp_register_script('wcd_rmrl', get_stylesheet_directory_uri() . '/snippets/rmrl/wcd_rmrl.js' );

// Tabs
wp_register_script('wcd_tabs', get_stylesheet_directory_uri() . '/snippets/tabs/wcd_tabs.js' );

// Mega Menu
wp_register_script('wcd_megaMenu', get_stylesheet_directory_uri() . '/snippets/mega-menu/wcd_megaMenu.js' );

// modal
wp_register_script('wcd_modal', get_stylesheet_directory_uri() . '/snippets/modal/wcd_modal.js' );

// TOC
wp_register_style('wcd_toc_css', get_stylesheet_directory_uri() . '/snippets/toc/wcd_toc.css' );
wp_register_script('wcd_toc_js', get_stylesheet_directory_uri() . '/snippets/toc/wcd_toc.js' );

// ACCORDION
wp_register_script( 'wcd_accordion', get_stylesheet_directory_uri() . '/snippets/accordion/wcd_accordion.js', '', '', false  );

?>