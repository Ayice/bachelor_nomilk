<?php

/**
 * NoMilk functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package NoMilk
 */

if (!function_exists('nomilk_setup')) :
  /**
   * Sets up theme defaults and registers support for various WordPress features.
   *
   * Note that this function is hooked into the after_setup_theme hook, which
   * runs before the init hook. The init hook is too late for some features, such
   * as indicating support for post thumbnails.
   */
  function nomilk_setup()
  {
    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     * If you're building a theme based on NoMilk, use a find and replace
     * to change 'nomilk' to the name of your theme in all the template files.
     */
    load_theme_textdomain('nomilk', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support('title-tag');

    /*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(array(
      'menu-1' => esc_html__('Primary', 'nomilk'),
    ));

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support('html5', array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    ));

    // Set up the WordPress core custom background feature.
    add_theme_support('custom-background', apply_filters('nomilk_custom_background_args', array(
      'default-color' => 'ffffff',
      'default-image' => '',
    )));

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Add support for core custom logo.
     *
     * @link https://codex.wordpress.org/Theme_Logo
     */
    add_theme_support('custom-logo', array(
      'height'      => 250,
      'width'       => 250,
      'flex-width'  => true,
      'flex-height' => true,
    ));
  }
endif;
add_action('after_setup_theme', 'nomilk_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function nomilk_content_width()
{
  // This variable is intended to be overruled from themes.
  // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
  // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
  $GLOBALS['content_width'] = apply_filters('nomilk_content_width', 640);
}
add_action('after_setup_theme', 'nomilk_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function nomilk_widgets_init()
{
  register_sidebar(array(
    'name'          => esc_html__('Sidebar', 'nomilk'),
    'id'            => 'sidebar-1',
    'description'   => esc_html__('Add widgets here.', 'nomilk'),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ));
}
add_action('widgets_init', 'nomilk_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function nomilk_scripts()
{
  wp_enqueue_style('nomilk-style', get_stylesheet_uri());

  wp_enqueue_script('nomilk-navigation', get_template_directory_uri() . '/inc/js/navigation.js', array(), '20151215', true);

  wp_enqueue_script('nomilk-skip-link-focus-fix', get_template_directory_uri() . '/inc/js/skip-link-focus-fix.js', array(), '20151215', true);

  if (is_singular() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }
}
add_action('wp_enqueue_scripts', 'nomilk_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/underscore/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/underscore/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/underscore/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/underscore/customizer.php';

/**
 * Enqueue
 */
require get_template_directory() . '/inc/enqueue.php';


/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
  require get_template_directory() . '/inc/underscore/woocommerce.php';
}

/**
 * Menus
 */
require get_template_directory() . '/inc/functions/menus.php';

/**
 * Image sizes
 */
require get_template_directory() . '/inc/functions/imagesizes.php';

/**
 * Sections
 */
require get_template_directory() . '/inc/sections/sections.php';

/**
 * Allow SVG
 */
require get_template_directory() . '/inc/functions/allowsvg.php';


/**
 * Option pages
 */
require get_template_directory() . '/inc/functions/optionpage.php';

/**
 * Remove comments
 */

require get_template_directory() . '/inc/functions/removecomments.php';

/**
 * Vue Dashboard
 */
require  get_template_directory() . '/inc/dashboard/enqueue.php';

/**
 *	Custom posttype
 */

function cptui_register_my_cpts_websites()
{

  /**
   * Post Type: Websites.
   */

  $labels = array(
    'name'                => _x('Websites', 'Post Type General Name', 'nomilk'),
    'singular_name'       => _x('Website', 'Post Type Singular Name', 'nomilk'),
    'menu_name'           => __('Websites', 'nomilk'),
    'all_items'           => __('All Websites', 'nomilk'),
    'view_item'           => __('View Website', 'nomilk'),
    'add_new_item'        => __('Add New Website', 'nomilk'),
    'add_new'             => __('Add New', 'nomilk'),
    'edit_item'           => __('Edit Website', 'nomilk'),
    'update_item'         => __('Update Website', 'nomilk'),
    'search_items'        => __('Search Website', 'nomilk'),
    'not_found'           => __('Not Found', 'nomilk'),
    'not_found_in_trash'  => __('Not found in Trash', 'nomilk'),
  );

  $args = [
    "label" => __("Websites", "nomilk"),
    "labels" => $labels,
    "description" => "",
    "publicly_queryable" => true,
    "show_ui" => true,
    "rest_base" => "",
    "rest_controller_class" => "WP_REST_Posts_Controller",
    "has_archive" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "delete_with_user" => false,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "rewrite" => ["slug" => "websites", "with_front" => true],
    "query_var" => true,
    "menu_icon" => "dashicons-carrot",
    "supports" => ["title", "editor", "thumbnail", "custom_fields"],
    'hierarchical' => false,
    'public' => true,
    'show_in_admin_bar' => true,
    'menu_position' => 5,
    'can_export' => true,
    'show_in_rest' => true,
  ];

  register_post_type("websites", $args);
}

add_action('init', 'cptui_register_my_cpts_websites');
