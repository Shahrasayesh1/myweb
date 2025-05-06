/*
 * Create Menu From Json File
 * By Mojtaba KianiFar
 * version : 1.1
 * 2014
*/ 

(function ($, window, document, undefined) {

    function Menu(element, options) {

        this.$element = $(element);
        this.options = options;
        this.items = this.options.items;

        this.init();
    }

    Menu.prototype = {
        init: function () {
            var $ul = $('<ul class="dp-navigation-menu clearfix">').appendTo(this.$element);
            this.create(this.items, $ul);
        },
        create: function (list, $parent) {
            for(var i=0; i<list.length; i++){

                var item = list[i];
                var $li = $("<li>").appendTo($parent);
                var $link = $("<a href="+ item.tabLink +"><span>"+ item.TabName +"</span></a>").appendTo($li);

                if(item.Tabs.length){
                   $li.addClass('has-sub');
                    var $ul = $('<ul class="sub">').appendTo($li);
                    this.create(item.Tabs, $ul);
                }
            }

        }
    };

    $.fn.menu = function (options) {
        if (typeof options == 'string') {
            var plugin = this.data('menu');
            if (plugin) {
                var r = plugin[options].apply(plugin, Array.prototype.slice.call(arguments, 1));
                if (r) return r
            }
            return this
        }

        options = $.extend({}, $.fn.menu.defaults, options);

        return this.each(function () {
            var plugin = $.data(this, 'menu');
            if (!plugin) {
                plugin = new Menu(this, options);
                $.data(this, 'menu', plugin);
            }
        });
    };

    $.fn.menu.defaults = {
        items: []
    };

})(jQuery, window, document);

