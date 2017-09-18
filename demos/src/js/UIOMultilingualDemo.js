(function ($, fluid) {

    "use strict";

    fluid.defaults("fluid.uiOptions.prefsEditor.multilingualDemo", {
        gradeNames: ["fluid.uiOptions.prefsEditor"],
        terms: {
            "messagePrefix": "./src/messages",
            // We need to add some additional CSS to the
            // 'SeparatedPanelPrefsEditorFrame' template,
            // but since we can't specify multiple template
            // directories, we need to copy them all to our
            // own directory
            "templatePrefix": "./src/html"
        },
        "tocTemplate": "src/js/lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
        "ignoreForToC": {
            "overviewPanel": ".flc-overviewPanel"
        },
        // For the distributeOptions block
        multilingualOptions: {
            locale: "en",
            // This is necessary because the Table of Contents
            // component doesn't use the localization messages
            // from the panel
            tocHeader: "Table of Contents",
            direction: "ltr"
        },
        listeners: {
            "onPrefsEditorReady.addLanguageAttributesToBody": {
                func: "fluid.uiOptions.prefsEditor.multilingualDemo.addLanguageAttributesToBody",
                args: ["{that}.prefsEditorLoader.prefsEditor.container", "{that}.options.multilingualOptions.locale", "{that}.options.multilingualOptions.direction"]
            }
        },
        distributeOptions: {
            tocHeader: {
                target: "{that fluid.tableOfContents}.options.strings.tocHeader",
                source: "{that}.options.multilingualOptions.tocHeader"
            },
            locale: {
                target: "{that prefsEditorLoader}.options.components.messageLoader.options.locale",
                source: "{that}.options.multilingualOptions.locale"
            }
        }
    });

    // Adds the locale and direction to the BODY in the IFRAME to enable CSS
    // based on the locale and direction
    fluid.uiOptions.prefsEditor.multilingualDemo.addLanguageAttributesToBody = function (prefsEditorContainer, locale, direction) {
        prefsEditorContainer.attr("lang", locale);
        prefsEditorContainer.attr("dir", direction);
    };

})(jQuery, fluid);
