/**
 * jQuery Time Helpers
 *
 * @author       Joshua Priddle <itspriddle@nevercraft.net>
 * @copyright    Copyright (c) 2010, ViaTalk, LLC
 * @url          http://github.com/itspriddle/jquery-time_helpers
 * @version      0.0.1
 */

;(function($) {
  $.toTimestamp = function(seconds) {
    var min = Math.floor(seconds / 60), sec = Math.floor(seconds % 60);
    return [
      min > 9 ? min : "0" + min,
      sec > 9 ? sec : "0" + sec
    ].join(':');
  };
})(jQuery);
