/**
 * Select2 Farsi translation.
 *
 * Author: Mahdi Youseftabar <roboticsexpert@gmail.com>
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "چیزی پیدا نشد"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "لطفا " + n + " حرف دیگر وارد نمایید" + (n == 1 ? "" : "s"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "لطفا " + n + " حرف حذف کنید" + (n == 1 ? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "شما فقط می توانید " + limit + " آیتم انتخاب کنید" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "در حال آوردن پاسخ های دیگر ..."; },
        formatSearching: function () { return "در حال جستجو ..."; }
    });
})(jQuery);
