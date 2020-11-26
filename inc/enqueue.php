<?php

/**
 * Adding Google fonts
 */
function enqueue_styles() {
 wp_enqueue_style( 'GoogleFonts', 'https://fonts.googleapis.com/css?family=Overpass:200,400,700|Prata', false ); 
 }
  
 add_action( 'wp_enqueue_scripts', 'enqueue_styles' );

 /**
  * Enqueue scripts
  */
function enqueue_scripts() {
    wp_enqueue_script('jQuery', 'https://code.jquery.com/jquery-3.4.1.slim.min.js', false );
    
    wp_enqueue_script('OwlCarousel', get_template_directory_uri() . '/inc/vendor/owl/owl.carousel.min.js', true );
    wp_enqueue_script('CustomOwl', get_template_directory_uri() . '/inc/js/custom-owl.js', '', '', true );
    
}

add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
