<?php

function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu-left' => __( 'Primary - Left' ),
      'header-menu-right' => __( 'Primary - Right' ),
      'header-top-right' => __( 'Secondary - Top right' ),
      'mobile-menu' => __( 'Mobile' ),
      'nearby-menu' => __( 'Nearby' ),
      'footer-01' => __( 'Footer 01' ),
      'footer-02' => __( 'Footer 02' ),
      'footer-03' => __( 'Footer 03' ),
      'footer-04' => __( 'Footer 04' )
    )
  );

}
add_action( 'init', 'register_my_menus' );