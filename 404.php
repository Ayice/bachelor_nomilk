<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package NoMilk
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<section class="container error-404 not-found">
				<header class="page-header row">
					<div class="col-12">
						<h1 class="page-title"><?php esc_html_e( 'Wops - Siden kan desværre ikke findes', 'nomilk' ); ?></h1>
					</div>
				</header><!-- .page-header -->

				<div class="page-content">
					<p><?php esc_html_e( 'Wops', 'nomilk' ); ?></p>

				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
