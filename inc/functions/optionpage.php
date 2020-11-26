<?php

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Hotel Eyde',
		'menu_title'	=> 'Hotel Eyde',
		'menu_slug' 	=> 'eyde-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> true
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Tripadvisor',
		'menu_title'	=> 'Tripadvisor',
		'parent_slug'	=> 'eyde-settings',
	));
}