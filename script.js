/**
 *  Color Plugin Extend Script
 *
 *  @author Yuichi Asa <yuichi.asa@gmail.com>
 *  
 */

/* Table Background Color Add */
jQuery(function(){
  var $bgColor, $tdElem;
  jQuery('div.dokuwiki table.inline td span.color-plugin').each(function() {
    $bgColor = jQuery(this).css('backgroundColor');
    $tdElem = jQuery(this).parents()[0];
    jQuery($tdElem).css('backgroundColor', $bgColor);
  });
});
