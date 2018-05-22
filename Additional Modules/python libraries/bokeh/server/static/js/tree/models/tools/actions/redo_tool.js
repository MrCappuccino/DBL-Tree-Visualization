"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extend = function (child, parent) { for (var key in parent) {
    if (hasProp.call(parent, key))
        child[key] = parent[key];
} function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
var action_tool_1 = require("./action_tool");
exports.RedoToolView = (function (superClass) {
    extend(RedoToolView, superClass);
    function RedoToolView() {
        return RedoToolView.__super__.constructor.apply(this, arguments);
    }
    RedoToolView.prototype.initialize = function (options) {
        RedoToolView.__super__.initialize.call(this, options);
        return this.listenTo(this.plot_view, "state_changed", (function (_this) {
            return function () {
                return _this.model.disabled = !_this.plot_view.can_redo();
            };
        })(this));
    };
    RedoToolView.prototype["do"] = function () {
        return this.plot_view.redo();
    };
    return RedoToolView;
})(action_tool_1.ActionToolView);
exports.RedoTool = (function (superClass) {
    extend(RedoTool, superClass);
    function RedoTool() {
        return RedoTool.__super__.constructor.apply(this, arguments);
    }
    RedoTool.prototype.default_view = exports.RedoToolView;
    RedoTool.prototype.type = "RedoTool";
    RedoTool.prototype.tool_name = "Redo";
    RedoTool.prototype.icon = "bk-tool-icon-redo";
    RedoTool.override({
        disabled: true
    });
    return RedoTool;
})(action_tool_1.ActionTool);