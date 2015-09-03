(function() {

    var product = {

        init: function() {
            this.cacheDOM();
            this.bindEvents();
        },
        cacheDOM: function() {
            this.$el = $('#productViewModule');
            this.$main_img = this.$el.find('.main-image img');
            this.$thumb_nail = this.$el.find('.thumbnails-container .thumbnail-list li img');

        },
        bindEvents: function() {
            this.$thumb_nail.on('click', this.selectThumbnail.bind(this));
        },
        selectThumbnail: function(event) {

            var thumbnail_link = event.target.getAttribute('src');
            var img = $('.sm-image');
            img.removeClass('active-thumbnail');
            event.target.classList.add('active-thumbnail');
            this.$main_img.attr('src', thumbnail_link);
        },

    }
    product.init();
})();
