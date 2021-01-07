<?php

function vue_dashboard_scripts()
{
  wp_register_script(
    'vue_dashboard',
    'http://localhost:8080/index.js',
    array(),
    false,
    true
  );

  $user = wp_get_current_user();
  $user_avatar = get_avatar_url($user->ID);

  wp_localize_script(
    'vue_dashboard',
    'wpData',
    array(
      'nonce' => wp_create_nonce('wp_rest'),
      'template_directory_uri' => get_stylesheet_directory_uri(),
      'rest_url' => untrailingslashit(esc_url_raw(rest_url())),
      'user' => $user,
      'user_avatar' =>  $user_avatar
    )
  );

  wp_register_style('vue_styles', 'http://localhost:8080/main.css');

  wp_enqueue_style('vue_styles');

  wp_enqueue_script('vue_dashboard');
}

add_action('wp_enqueue_scripts', 'vue_dashboard_scripts');
