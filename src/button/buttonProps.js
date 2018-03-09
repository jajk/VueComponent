var iconPropConfig = {
    type: [Object, String]
};

var propThemeConfig = {
    type: [String],
    default: 'gray',
    validator: function (value) {
        return ['blue', 'gray', 'white'].indexOf(value) > -1;
    }
};

export default {
    /**
     * define the button type the type can be plain, icon, split, menu and toggle buttons
     */
    type: {
        type: [String],
        default: 'plain',
        validator: function (value) {
            return ['plain', 'icon', 'split', 'menu', 'toggle'].indexOf(value) > -1;
        }
    },
    /**
     * define button size, the type can be empty, small, small-small
     */
    size: {
        type: [String],
        default: ''
    },
    /**
     * define the theme of the button, the theme can be gray, blue and white
     */
    theme: propThemeConfig,
    isAnimate: {
        type: [Boolean],
        default: true
    },
    isDisabled: {
        type: [Boolean],
        default: false
    },
    /**
     * Specify the icon of the button
     * example:
     * icon="icon-settings"
     * icon="{size: 26, theme: 'gray', id: 'icon-lookup-26'}"
     */
    icon: {
        type: [Object, String]
    },
    /**
     * iconPosition means the position of the icon relative to the button text
     * example:
     * icon-position="left"
     * icon-position="right"
     */
    iconPosition: {
        type: [String]
    },
    /**
     * Define the button text
     */
    text: {
        type: [String]
    },
    /**
     * Specify the split icon for the split buttons, the config style is the same with the icon
     */
    splitIcon: {
        type: [Object, String]
    },
    /**
     * Specify the button text of the split button
     */
    splitBtnText: {
        type: [String]
    },
    /**
     * Specify the theme of the split button
     */
    splitBtnTheme: {
        type: [String],
        validator: function (value) {
            return ['blue', 'gray', 'white'].indexOf(value) > -1;
        }
    },
    /**
     * Specify the icon of the toggle button in active status
     */
    activeIcon: {
        type: [Object, String]
    },
    /**
     * Specify the text of the toggle button in active status
     */
    activeText: {
        type: [String]
    },
    isActiveAtInit: {
        type: [Boolean],
        default: false
    },
    buttonStyle: {
        type: [String],
        default: ''
    }
};