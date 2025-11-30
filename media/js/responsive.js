/**
 * Responsive JavaScript for Balans Groepspraktijk
 * Handles mobile menu toggle and responsive behaviors
 */

(function($) {
    'use strict';

    // Initialize when document is ready
    $(document).ready(function() {

        // Create and insert mobile menu toggle button
        if ($('.menu #nav').length && !$('.mobile-menu-toggle').length) {
            var toggleButton = '<button class="mobile-menu-toggle" aria-label="Toggle Navigation Menu">Menu</button>';
            $('.menu').prepend(toggleButton);
        }

        // Mobile menu toggle functionality
        $('.mobile-menu-toggle').on('click', function() {
            var $nav = $('#nav');
            var $button = $(this);

            // Toggle the menu
            $nav.toggleClass('mobile-active');
            $button.toggleClass('active');

            // Update ARIA attributes for accessibility
            var isExpanded = $nav.hasClass('mobile-active');
            $button.attr('aria-expanded', isExpanded);
        });

        // Handle submenu clicks on mobile
        if ($(window).width() <= 768) {
            $('#nav > li').each(function() {
                var $li = $(this);
                if ($li.find('ul').length) {
                    // Add indicator for items with submenus
                    $li.find('> a').append(' <span class="submenu-indicator">+</span>');

                    // Prevent default link behavior and toggle submenu instead
                    $li.find('> a').on('click', function(e) {
                        if ($(window).width() <= 768) {
                            e.preventDefault();
                            $li.toggleClass('mobile-submenu-open');

                            // Update indicator
                            var indicator = $(this).find('.submenu-indicator');
                            indicator.text($li.hasClass('mobile-submenu-open') ? '-' : '+');
                        }
                    });
                }
            });
        }

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.menu').length) {
                $('#nav').removeClass('mobile-active');
                $('.mobile-menu-toggle').removeClass('active').attr('aria-expanded', 'false');
            }
        });

        // Handle window resize
        var resizeTimer;
        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                // Close mobile menu on resize to desktop
                if ($(window).width() > 768) {
                    $('#nav').removeClass('mobile-active');
                    $('.mobile-menu-toggle').removeClass('active').attr('aria-expanded', 'false');
                    $('#nav > li').removeClass('mobile-submenu-open');
                }
            }, 250);
        });

        // Make images responsive
        $('img').each(function() {
            var $img = $(this);
            if (!$img.attr('width') || !$img.attr('height')) {
                $img.css('max-width', '100%');
                $img.css('height', 'auto');
            }
        });

        // Adjust camera slider for responsive
        if (typeof $.fn.camera !== 'undefined') {
            $(window).on('resize', function() {
                var $slider = $('#camera_wrap_1');
                if ($slider.length) {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function() {
                        // Force slider to recalculate dimensions
                        $slider.trigger('resize');
                    }, 250);
                }
            });
        }

        // Make tables responsive
        $('table').each(function() {
            if (!$(this).parent().hasClass('table-responsive')) {
                $(this).wrap('<div class="table-responsive"></div>');
            }
        });

        // Smooth scroll to top
        if ($('#topcontrol').length) {
            $('#topcontrol').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, 600);
                return false;
            });
        }
    });

    // Additional functionality for orientationchange on mobile devices
    $(window).on('orientationchange', function() {
        // Close menu on orientation change
        $('#nav').removeClass('mobile-active');
        $('.mobile-menu-toggle').removeClass('active').attr('aria-expanded', 'false');

        // Force layout recalculation
        setTimeout(function() {
            $(window).trigger('resize');
        }, 200);
    });

})(jQuery);
