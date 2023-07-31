jQuery(document).ready(function ($) {
    var $mainNav = $(".c-main-nav"),
        $navOpen = $(".c-page-header .nav-act a"),
        $navClose = $mainNav.find(".c-nav-close"),
        $search = $(".c-global-search"),
        $searchIcon = $search.find(".c-search-icon"),
        $searchClose = $search.find(".c-search-close"),
        $searchInput = $search.find(".c-search-input"),
        disclosureButton = getDisclosureButton(),
        isRTL = ($("html").attr("dir") == "rtl" || $("html").hasClass("dir-rtl")),
        scrollBarPos = "right";
        $divSearchId = $("#searchHeaderCombobox");
        $divSearchId.attr('aria-hidden', 'true');
    if (isRTL) scrollBarPos = "left";


    // Page Overlay
    $overlay = $("<div class='c-page-overlay'/>").appendTo("body");
    $overlay.on("click", function (e) {
        e.preventDefault();
        $("body").css("overflow", "visible");
        $mainNav.removeClass("active");
        $(".c-page-overlay").removeClass("active");
    });

    // Logo / Icon / Text
    function getLogo() {
        var windowSize = $(window).width(),
            $mainLogo = $(".c-page-header .logo.main"),
            $logoIcon = $(".c-page-header .logo.icon"),
            $logoText = $(".c-page-header .logo.text");

        if ($mainLogo.children().length > 0 && windowSize > 768) {
            $mainLogo.css("display", "table-cell");
            $logoIcon.css("display", "none");
            $logoText.css("display", "none");
        } else if ($logoIcon.children().length > 0) {
            $mainLogo.css("display", "none");
            $logoIcon.css("display", "table-cell");
            $logoText.css("display", "none");
        } else {
            $mainLogo.css("display", "none");
            $logoIcon.css("display", "none");
            $logoText.css("display", "table-cell");
        }
    }
    getLogo();
    setTitleAttribute();

    // Nav Inner Scroll
    $mainNav.niceScroll({
        cursorborder: "1px solid #5e5e5e",
        railpadding: { top: 2, right: 1, left: 0, bottom: 2 },
        autohidemode: false,
        horizrailenabled: false,
        railalign: scrollBarPos,
        disableoutline: false
    });

    // Open Active Parent Nodes
    var $activeLi = $mainNav.find("li.active").eq(0);
    $activeLi.find("a.parent:first").attr("aria-expanded", true).addClass("open");
    $activeLi.find("ul").show();

    // Nav Parent Node Open/Close
    $mainNav.find("li a.parent").on("click", function (e) {
        e.preventDefault();
        $(this).parents("ul").find("a.open").not($(this)).removeClass("open").attr("aria-expanded", false).parent("li").find("ul").slideToggle(300);
        $(this).toggleClass("open").parent("li").find("ul").slideToggle(300);
        if ($(this).hasClass("open")) $(this).attr("aria-expanded", true);
        else $(this).attr("aria-expanded", false);

        setTimeout(function () {
            $mainNav.getNiceScroll().resize();
        }, 300);
        //$mainNav.scrollTop($(this).offset().top);
    });

    // Open Nav
    $navOpen.on("click", function (e) {
        e.preventDefault();
        openNav();
    });

    function openNav() {
        $overlay.addClass("active");
        $("body").css("overflow", "hidden");
        $mainNav
            .css("visibility", "visible")
            .removeAttr("tabindex")
            .addClass("active")
            .prop("aria-hidden", false)
            .find('a').eq(0).focus();
        $overlay.addClass("active");
        if (disclosureButton) disclosureButton.setAttribute('aria-expanded', 'true');
        setTimeout(function () {
            $mainNav.getNiceScroll().resize();
        }, 400);
    }

    // Close nav
    $navClose.on("click", function (e) {
        e.preventDefault();
        closeNav();
    });

    function closeNav() {
        $("body").css("overflow", "visible");
        $mainNav.removeClass("active");
        $overlay.removeClass("active");
        $navOpen.focus();
        if (disclosureButton) disclosureButton.setAttribute('aria-expanded', 'false');
        setTimeout(function () {
            $mainNav.getNiceScroll().resize();
            $mainNav.css("visibility", "hidden");
        }, 300);
    }

    // Window Resizing
    var resizeTimer;
    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $mainNav.getNiceScroll().resize();
        }, 100);
        getLogo();
    });

    // Search stuff
    $searchIcon.on("click", function (e) {
        e.preventDefault();
        openSearch();
    });
    $(document).on("keydown", function (e) {
        if (e.which == 13 && $(e.target).is($search.find(".c-search-icon")))
            openSearch();
    });

    $searchClose.on("click", function (e) {
        e.preventDefault();
        if ($search.hasClass("active")) {
            closeSearch();
        }
    });

    $("body").on("click", function (e) {
        if (!$(e.target).is($search) && $(e.target).parents(".c-global-search").length < 1) {
            closeSearch();
        }
    });
    $("*").on("focus", function () {
        if ($(this).is($search) || $search.find($(this)).length > 0) return;
        closeSearch();
    });

    function openSearch() {
        if (!$search.hasClass("active")) {
            $(this).removeAttr('tabindex', '');
            $divSearchId.attr('aria-hidden', 'false');
            $search.find("label:hidden").show();
            $search.find("input:disabled").prop('disabled', false);
            $search.addClass("active");
            setTimeout(function () {
                $searchInput.focus();
            }, 0)
        }
    }
    function closeSearch() {
        $search.removeClass("active");
        $searchIcon.attr('tabindex', '0');
        $search.find("label:visible").hide();
        $search.find("input").prop('disabled', true);
        $divSearchId.attr('aria-hidden', 'true');
    }

    function getDisclosureButton() {
        var linkOuter = document.getElementsByClassName('c-hdr-item nav-act');
        if (!linkOuter.length) return false;
        var disclosureButton = linkOuter[0].querySelector('[id$="lnkNavBar"]'),
            attrExpand = disclosureButton.getAttribute('aria-expanded');
        if (!attrExpand || attrExpand.toLowerCase() != 'false')
            disclosureButton.setAttribute('aria-expanded', 'false');
        return disclosureButton;
    }

    function setTitleAttribute() {
        // when text is too long to fit in the space, css truncates it and tooltip is needed
        var textNodes = [];
        textNodes[0] = $mainNav.get(0).querySelector("[id$=lblPosition]");
        textNodes[1] = $mainNav.get(0).querySelector("[id$=lblName]");
        for (i = 0; i < textNodes.length; i++) {
            var elText = textNodes[i];
            if (!elText) continue;
            var elParent = elText.parentNode,
                elCloned = elText.cloneNode(),
                text = elText.textContent;
            elCloned.appendChild(document.createTextNode(text));
            elCloned.style.cssText = "color:transparent;position:absolute;width:auto;";
            elParent.appendChild(elCloned);
            if (elCloned.offsetWidth > 261) {
                elText.setAttribute('title', text);
            }
            elParent.removeChild(elCloned);
        }

    }


    // Keyboard operation
    var keyboardOptions = { closeNav: closeNav };
    $mainNav.responsiveNavKeyboard(keyboardOptions);


    // Header Unfixing
    $(".c-page-header").addClass("headroom").headroom({
        classes: {
            pinned: "headroom-top-pinned",
            unpinned: "headroom-top-unpinned"
        },
        offset: $(".c-page-header").outerHeight(),
        tolerance: 5//,
        //onPin: function () {
        //    if ($(".c-sb.c-sb-fixed").length > 0) {
        //        $(".c-sb.c-sb-fixed .c-sb-content").animate({
        //            top: $(".c-page-header").outerHeight()
        //        }, 100);
        //    }
        //},
        //onUnpin: function () {
        //    if ($(".c-sb.c-sb-fixed").length > 0) {
        //        $('.c-sb.c-sb-fixed .c-sb-content').animate({
        //            top: 0
        //        }, 100);
        //    }
        //}
    });

    // Flash of Unstyled Content fix for IE - due to large file (logo images) download time
    $(".c-page-header .logo.main a").css("display", "");
    $(".c-page-header .logo.icon a").css("display", "");

});