/*
*       ref:
*       Tree View example
*       https://www.w3.org/TR/wai-aria-practices/examples/treeview/treeview-2/treeview-2b.html
*
*/
; (function ($, window, document, undefined) {
    var defaults = {};

    function responsiveNavKeyboard(element, options) {
        this.closeNav = function () { options.closeNav(); }
        this.element = element;
        this.$element = $(element);
        this.options = $.extend({}, defaults, this.options);
        this.$navTree = $(".c-nav-content").children("ul:first");
        this.$treeHomeA = this.$navTree.children("li:first").find("a:first");
        this.key = {
            backspace: "Backspace",
            tab: "Tab",
            enter: "Enter",
            escape: "Escape",
            space: " ",
            end: "End",
            home: "Home",
            leftArrow: "ArrowLeft",
            upArrow: "ArrowUp",
            rightArrow: "ArrowRight",
            downArrow: "ArrowDown",
        };
        this.init();
    }

    responsiveNavKeyboard.prototype.init = function () {
        this.setAttributes();
        this.handleKeyDown();
        this.handleClick();
    };

    responsiveNavKeyboard.prototype.setAttributes = function () {
        $(".c-main-nav:not(.active)").prop("tabindex", "-1");
        this.$treeHomeA.prop("tabindex", "0");
    };

    responsiveNavKeyboard.prototype.handleClick = function () {
        var _this = this;
        this.$navTree.find("a").on("click", function() {
            _this.setFocus($(this));
        })
    };

    responsiveNavKeyboard.prototype.handleKeyDown = function () {
        var _this = this,
            k = this.key,
            $navTree = this.$navTree;

        this.trapFocus();

        this.$element.on("keydown", function (e) {
            if ([k.escape, k.space, k.downArrow, k.upArrow, k.rightArrow, k.leftArrow, k.home, k.end].indexOf(e.key) > -1) {
                e.preventDefault();
            }

            if ($navTree.find($(e.target)).length === 0) {
                if (e.key === k.escape) _this.closeNav();
                return;
            }

            var getParentItems = function () {
                return $navTree.find("> li > a");
            }
            var isParentItem = function () {
                return isParent = $.inArray(e.target, getParentItems()) > -1;
            }


            switch (e.key) {
                case k.escape:
                    if (isParentItem()) {
                        if ($(e.target).hasClass("open")) $(e.target).trigger("click");
                        else _this.closeNav();
                    } else {
                        var $parentItem = $(e.target).closest("ul").closest("li").find("a:first");
                        $parentItem .trigger("click");
                    }
                    break;
                case k.space:
                    $(e.target).trigger("click");
                    _this.setFocus($(e.target));
                    break;
                case k.downArrow:
                    var $nextA = nextAnchor($(e.target));
                    if (!$nextA.length) break;
                    _this.setFocus($nextA);
                    break;
                case k.upArrow:
                    var $prevA = prevAnchor($(e.target));
                    if (!$prevA.length) break;
                    _this.setFocus($prevA);
                    break;
                case k.rightArrow:
                    if (_this.getItemLevel($(e.target)) !== 1) break;
                    var $li = $(e.target).parent("li"),
                        $L2 = $li.children("ul:visible");
                    if ($L2.length)
                        _this.setFocus($L2.children("li:first").find("a:first"));
                    else 
                        $(e.target).trigger("click");
                    break;
                case k.leftArrow:
                    var itemLevel = _this.getItemLevel($(e.target));
                    switch (itemLevel) {
                        case 1:
                            var $li = $(e.target).parent("li"),
                                $L2 = $li.children("ul:visible");
                            if ($L2.length)
                                $(e.target).trigger("click");
                            break;
                        case 2:
                            var $L1 = $(e.target).closest("ul").parent("li").find("a:first");
                            if ($L1.length) _this.setFocus($L1);
                            break;
                    }
                    break;
                case k.home:
                    if (isParentItem()) _this.setFocus(_this.$treeHomeA);
                    else _this.setFocus($(e.target).closest("li").siblings(":first").find("> a"));
                       
                    break;
                case k.end:
                    if (isParentItem()) {
                        var parentItems = getParentItems();
                        _this.setFocus($(parentItems[parentItems.length - 1]));
                    } else {
                        _this.setFocus($(e.target).closest("li").siblings(":last").find("> a"));
                    }
                    break;
                default:
                    alphabetSearch(e);
                    break;
            }
        });
        
        function alphabetSearch(e) {
            // 64 = 'a', 91 = 'z'
            if (e.which < 64 || e.which > 91) return;
            var keyValue = String.fromCharCode(e.keyCode),
                $currentLi = $(e.target).closest("li"),
                $workLi = $(),
                isDone = false,
                $L2 = $(),
                get$L2 = function ($L1Li) {
                    if ($L1Li.children("ul:visible").length) return $L1Li.children("ul:visible");
                    else return false;
                },
                getNext$L1Li = function($currentEl) {
                    var $nextLi = $();
                    if (_this.getItemLevel($currentEl) == 1) $nextLi = $currentEl.next("li");
                    else $nextLi = $currentEl.closest("li").parent("ul").parent("li").next("li");
                    if (!$nextLi.length) $nextLi = _this.$treeHomeA.parent("li");
                    return $nextLi;
                };

            $L2 = get$L2($currentLi);
            if (_this.getItemLevel($currentLi) == 2 || $L2) {
                var $L2Lis = ($L2) ? $L2.children("li") : $currentLi.nextAll("li");
                $L2Lis.each(function (i) {
                    isDone = findMatchingLetter(keyValue, $(this));
                    if (isDone) return false;
                });
                if (!isDone) $workLi = getNext$L1Li($currentLi);
            }
            else $workLi = getNext$L1Li($currentLi);

            if (isDone) return;
            var max = _this.$navTree.find("a").length;

            while (!isDone || max > 0) {
                max -= 1;
                if ($workLi.is($currentLi)) {
                    isDone = true;
                    break;
                }
                isDone = findMatchingLetter(keyValue, $workLi);
                if (isDone) break;

                $L2 = get$L2($workLi);
                if ($L2.length) {
                    $L2.children("li").each(function () {
                        if ($(this).is($currentLi)) {
                            isDone = true;
                            return false;
                        }
                        isDone = findMatchingLetter(keyValue, $(this));
                        if (isDone) return false;
                    });
                }
                if (!isDone) $workLi = getNext$L1Li($workLi);
                else break;
            }
        }

        function findMatchingLetter(keyValue, $el) {
            var hasFound = false,
                firstLetter = $.trim($el.find("a:first").text()).charAt(0).toLowerCase();
            if (keyValue.toLowerCase() === firstLetter) {
                _this.setFocus($el);
                hasFound = true;
            }
            return hasFound;
        }

        function nextAnchor($currentA) {
            var $next = $(),
                $li = $currentA.parent("li");
            if (!$li.length) return $next;
            var itemLevel = _this.getItemLevel($li);
            switch (itemLevel) {
                case 1:
                    var $L2 = $li.find("ul:visible");
                    if ($L2.length)
                        $next = $L2.find("li:first a:first");
                    else
                        if ($li.next("li").length) $next = $li.next("li").find("a:first");
                    break;
                case 2:
                    var $nextL2Li = $li.next("li");
                    if ($nextL2Li.length)
                        $next = $nextL2Li.find("a:first");
                    else {
                        var $nextL1Li = $li.parent("ul").parent("li").next("li");
                        if ($nextL1Li.length) $next = $nextL1Li.find("a:first");
                    }
                    break;
            }
            return $next
        }

        function prevAnchor($currentA) {
            var $prev = $(),
                $li = $currentA.parent();
            if (!$li.length) return $prev;
            var itemLevel = _this.getItemLevel($li);
            switch (itemLevel) {
                case 1:
                    var $prevL1Li = $li.prev("li");
                    if ($prevL1Li.length) {
                        var $prevL2 = $prevL1Li.children("ul:visible");
                        if ($prevL2.length) $prev = $prevL2.find("li:last a:last");
                        else $prev = $prevL1Li.find("a:first");
                    }
                    break;
                case 2:
                    var $prevL2Li = $li.prev("li");
                    if ($prevL2Li.length)
                        $prev = $prevL2Li.find("a:last");
                    else 
                        $prev = $li.parent("ul").parent("li").children("a:last");
                    break;
            }
            return $prev;
        }
    };

    responsiveNavKeyboard.prototype.trapFocus = function () {
        // keep tab key focus within the component 
        var _this = this,
            k = this.key;
        $(document).on('keydown', function (e) {
            var getFirstOrLastAnchor = function (isFirst) {
                    var anchors = _this.element.getElementsByTagName('a')
                    if (isFirst) return anchors[0];
                    return anchors[anchors.length - 1];
                },
                focusFirst = getFirstOrLastAnchor(true),
                focusLast = getFirstOrLastAnchor();
            if (e.shiftKey && e.key === k.tab && e.target == focusFirst) {
                e.preventDefault()
                focusLast.focus();
            }
            else if (!e.shiftKey && e.key === k.tab && e.target == focusLast) {
                e.preventDefault();
                focusFirst.focus();
            }
        })
    }

    responsiveNavKeyboard.prototype.getItemLevel = function ($el) {
        var $li = $el.closest("li"),
            level = 2;
        if ($li.parent().is(this.$navTree)) level = 1;
        return level;
    };

    responsiveNavKeyboard.prototype.setFocus = function ($focusEl) {
        var $focused = this.$navTree.find("a[tabindex=0]");
        if ($focused.length) $focused.prop("tabindex", "-1");
        var $a = $()
        if ($focusEl.is("a")) $a = $focusEl;
        else $a = $focusEl.find("a:first");
        if ($a.length) $a.prop("tabindex", 0).focus();
    };


    $.fn.responsiveNavKeyboard = function (options) {
        var returns;
        return this.each(function () {
            var pluginName = "plugin_responsiveNavKeyboard";
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName,
                    new responsiveNavKeyboard(this, options));
            }
        });
        return returns !== undefined ? returns : this;
    };

})(jQuery, window, document);

