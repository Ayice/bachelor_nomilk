<?php

function vue_dashboard_scripts() {
    wp_register_script(
      'vue_dashboard',
      'http://localhost:8080/index.js',
      array(),
      false,
      true
    );

    $args = array(
      'post_type' => 'websites',
      'posts_per_page' => -1
    );

    $websites = get_posts( $args );

    foreach ($websites as $site) {
      $site->custom_fields = get_fields( $site->ID );
    }

    global $post;

    wp_localize_script(
      'vue_dashboard',
      'wpData',
      array(
        'template_directory_uri' => get_stylesheet_directory_uri(),
        'rest_url' => untrailingslashit( esc_url_raw( rest_url() ) ),
        'app_path' => $post->post_name,
        'posts' => $websites
      )
    );

    wp_register_style('vue_styles', 'http://localhost:8080/main.css');

    wp_enqueue_style('vue_styles');

    wp_enqueue_script( 'vue_dashboard' );
}

add_action ('wp_enqueue_scripts', 'vue_dashboard_scripts' );