<?php
/**
 * @file
 * Returns the HTML for a Panels pane.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/2052505
 */
?>

<?php print $pane_prefix; ?>
<div class="<?php print $classes; ?>" <?php print $id; ?> <?php print $attributes; ?>>
<div class="plus-wrapper">
  <?php print $admin_links; ?>

  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <<?php print $title_heading; ?><?php print $title_attributes; ?>>
      <?php print $title; ?>
    </<?php print $title_heading; ?>>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <?php if ($feeds): ?>
    <div class="feed">
      <?php print $feeds; ?>
    </div>
  <?php endif; ?>

  
  <?php 

  if (!is_array($content) && strpos($content, 'pb') > 0) {
    

    $content = 'https://www.google.com/' .strip_tags($content);

    print '<iframe src="' . $content . '" width="650" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>';
  }
  else {
    print render($content); 
  }

  ?>
  

  <?php if ($links): ?>
    <div class="links">
      <?php print $links; ?>
    </div>
  <?php endif; ?>

  <?php if ($more): ?>
    <div class="more-link">
      <?php print $more; ?>
    </div>
  <?php endif; ?>
</div>
</div>
<?php print $pane_suffix; ?>

