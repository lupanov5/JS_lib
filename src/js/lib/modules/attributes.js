import $ from "../core";

$.prototype.attr = function(name) {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute) {
            continue;
        }
        return this[i].getAttribute(name);
    }
};

$.prototype.setAttr = function(name, value) {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(name, value);
    }

    return this;
};

$.prototype.removeAttr = function(name) {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].remove) {
            continue;
        }
        this[i].removeAttribute(name);
    }

    return this;
};