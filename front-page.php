<?php

/**
 * Template Name: Search Page Template
 */

get_header();
?>
<div class="wrap">
  <div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
      <?php if (is_user_logged_in()) : ?>
      <div id="wp-vue-app">
        Loading Dashboard...
      </div><!-- #vue-app -->
      <?php else :
        auth_redirect();
      endif ?>
    </main><!-- #main -->
  </div><!-- #primary -->

</div><!-- .wrap -->
<?php
get_footer();
?>
