<template>
    <div :style="'display:inline-block;' + buttonStyle">
        <button :disabled="isDisabled" @click="onClickButton" :class="'lm-button ' + (isActive ? 'active ' : ' ') + type + '-button ' + theme +
        ' ' + size + ' ' + (isAnimate ? 'animate ' : ' ') + (type=='split' ? 'split-left ' : '')">
            <svg :class="'icons' + realIcon.size + ' icon-' + realIcon.theme" v-if="realIcon && realIcon.id && normalizedIconPosition =='left'"><use :xlink:href="'#' + realIcon.id"></use></svg>
            <slot v-if="!isIconPassed || !isTextPassed"></slot>
            <template v-if="isTextPassed">
                {{realText}}
            </template>
            <svg :class="'icons' + realIcon.size +  ' icon-' + realIcon.theme" v-if="realIcon && realIcon.id && normalizedIconPosition =='right'"><use :xlink:href="'#' + realIcon.id"></use></svg>
        </button>
        <button v-if="type == 'split'" :class="'lm-button split-right ' + normalizedSplitBtnTheme + ' ' + (isAnimate ? 'animate' : '')">
            <svg :class="'icons' + normalizedSplitIcon.size + ' icon-' + normalizedSplitIcon.theme" v-if="normalizedSplitIcon && normalizedSplitIcon.id"><use :xlink:href="'#' + normalizedSplitIcon.id"></use></svg>
            {{splitBtnText}}
        </button>
    </div>
</template>

<script>
    import '../common/scss/common.scss';
    import './button.scss';

    // vue loader can't export anything except default

    import props from './buttonProps';

    export default {
        props: props,
        data() {
            return {
                isActive: this.isActiveAtInit
            };
        },
        computed: {
            isIconPassed() {
                return !!(this.realIcon && this.realIcon.id);
            },
            isTextPassed() {
                return this.realText != undefined;
            },
            realIcon() {
                if (this.type == 'toggle' && this.isActive) {
                    return this.normalizedActiveIcon;
                } else {
                    return this.normalizedIcon;
                }
            },
            realText() {
                if (this.type == 'toggle' && this.isActive) {
                    return this.activeText;
                } else {
                    return this.text;
                }
            },

            normalizedIcon() {
                var icon = this._getNormalizedIcon(this.icon);
                var retIcon;

                if (icon) {
                    retIcon = {};
                    Object.assign(retIcon, icon);

                    if (!icon.theme && this.theme == 'blue') {
                        retIcon.theme = 'white';
                    }

                    retIcon.theme = this.transformIconColor(retIcon.theme);
                }

                return retIcon;
            },

            normalizedSplitIcon() {
                var icon = this._getNormalizedIcon(this.splitIcon);
                var retIcon;

                if (icon) {
                    retIcon = {};
                    Object.assign(retIcon, icon);

                    if (!icon.theme && this.normalizedIcon && this.normalizedIcon.theme) {
                        retIcon.theme = this.normalizedIcon.theme;
                    }

                    retIcon.theme = this.transformIconColor(retIcon.theme);
                }

                return retIcon;
            },

            normalizedActiveIcon() {
                var icon = this._getNormalizedIcon(this.activeIcon);
                var retIcon;

                if (icon) {
                    retIcon = {};
                    Object.assign(retIcon, icon);

                    retIcon.theme = this.transformIconColor(retIcon.theme, 'white');
                }

                return retIcon;
            },

            normalizedIconPosition() {
                var defaultIconPosition = this.type == 'menu' ? 'right' : 'left';
                return this.iconPosition || defaultIconPosition;
            },

            normalizedSplitBtnTheme() {
                return this.splitBtnTheme || this.theme;
            }
        },

        methods: {
            transformIconColor(color, defaultColor = 'gray') {
                let colorMap = {
                    blue: 'primary1',
                    lightGray: 'light-gray'
                };

                return colorMap[color] || color || defaultColor;

            },
            onClickButton(e) {
                var me = this;
                this.isActive = !this.isActive;

                this.$nextTick(function () {
                    me.$emit('toggle', me.isActive, this);
                });
            },
            _getNormalizedIcon(icon) {
                if (icon) {
                    if (typeof icon == 'string') {
                        icon = {
                            id: icon
                        };
                    }

                    icon.size = icon.size || 18;
                }

                return icon;
            }
        }
    };
</script>