<header class="banner navbar navbar-default navbar-static-top" role="banner">
    <div class="sub-header">
      <div class="social-icons">
        <a target="'_blank" href="https://www.facebook.com/pages/SW-Fitness/625766030886343" class="fb"> </a>
        <a target="'_blank" href="https://twitter.com/SWfitnesslondon" class="tw"> </a>
        <a target="'_blank" href="https://instagram.com/swfitnesslondon" class="in"> </a>
        <a href="mailto:info@swfitnesslondon.com?subject=The%20subject%20of%20the%20email&amp;body=Personal%20training%20enquiry" class="mail"> </a>
      </div>
      <div class="tag-line"><?php bloginfo('description');?></div>
    </div>  
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
      </div>

      <nav class="collapse navbar-collapse" role="navigation">
        <?php
          if (has_nav_menu('primary_navigation')) :
            wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav'));
          endif;
        ?>
      </nav>
  </div>
</header>
  <?php if (is_front_page() ) { ?>
  <div class="container slider-home">
    <?php if ( function_exists( 'putRevSlider' ) ) { putRevSlider( 'slider1' ); } ?>
  </div>
<?php } ?>