import Button from './button/Button';

if (window.LMUI) {
    LMUI.Button = Button;
} else if (typeof exports != 'undefined') {
    exports.Button = Button;
}