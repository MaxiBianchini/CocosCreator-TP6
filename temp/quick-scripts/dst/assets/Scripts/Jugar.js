
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Jugar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ab3e1SWX9JNar9X5XsdRn0', 'Jugar');
// Scripts/Jugar.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTXTNivel = null;
        _this.FileTXTPuntaje = null;
        _this.Puntaje = null;
        _this.Fondo1 = null;
        _this.Fondo2 = null;
        _this.Fondo3 = null;
        _this.SonidoMenu1 = null;
        _this.SonidoMenu2 = null;
        _this.SonidoJuego = null;
        _this.TipoDeMenu = 0; //1 = MENU GANO, 2 = MENU PERDIO
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.Jugar = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                if (this.FileTXTNivel.toString() == '1')
                    cc.director.loadScene('Level 1');
                else if (this.FileTXTNivel.toString() == '2')
                    cc.director.loadScene('Level 2');
                else if (this.FileTXTNivel.toString() == '3')
                    cc.director.loadScene('Level 3');
                else if (this.FileTXTNivel.toString() == '4') {
                    this.FileTXTNivel.text = '1';
                    cc.director.loadScene('Menu');
                }
                break;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.Jugar, this);
        this.FileTXTNivel.url = cc.url.raw("assets/Others/Nivel.txt");
        this.FileTXTPuntaje.url = cc.url.raw("assets/Puntaje.txt");
        this.Puntaje.string = 'Puntaje Final: ' + this.FileTXTPuntaje;
        if (this.FileTXTNivel.toString() == '1') {
            this.Fondo1.active = true;
            this.Fondo2.active = false;
            this.Fondo3.active = false;
        }
        else if (this.FileTXTNivel.toString() == '2') {
            this.Fondo1.active = false;
            this.Fondo2.active = true;
            this.Fondo3.active = false;
        }
        else {
            this.Fondo1.active = false;
            this.Fondo2.active = false;
            this.Fondo3.active = true;
        }
        cc.audioEngine.stopAllEffects();
        if (this.TipoDeMenu == 1)
            cc.audioEngine.playEffect(this.SonidoMenu1, false);
        else if (this.TipoDeMenu == 2)
            cc.audioEngine.playEffect(this.SonidoMenu2, false);
    };
    NewClass.prototype.start = function () { };
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTNivel", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTPuntaje", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "Puntaje", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Fondo1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Fondo2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Fondo3", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoMenu1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoMenu2", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoJuego", void 0);
    __decorate([
        property
    ], NewClass.prototype, "TipoDeMenu", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnVnYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxRkM7UUFsRkcsa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBR2pDLG9CQUFjLEdBQWdCLElBQUksQ0FBQztRQUduQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBR3RCLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUdoQyxpQkFBVyxHQUFnQixJQUFJLENBQUM7UUFHaEMsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQVUsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDOztRQXNEdkQsaUJBQWlCO0lBQ3JCLENBQUM7SUFyREcsd0JBQUssR0FBTCxVQUFNLEtBQUs7UUFDUCxRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUVuQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksR0FBRztvQkFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDckUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLEdBQUc7b0JBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FB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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7aURBQ1M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDUztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNTO0lBR2hDO1FBREMsUUFBUTtnREFDYTtJQTlCTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUY1QjtJQUFELGVBQUM7Q0FyRkQsQUFxRkMsQ0FyRnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUZqRDtrQkFyRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVGV4dEFzc2V0KVxyXG4gICAgRmlsZVRYVE5pdmVsOmNjLlRleHRBc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRleHRBc3NldClcclxuICAgIEZpbGVUWFRQdW50YWplOmNjLlRleHRBc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgUHVudGFqZTpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGb25kbzE6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGb25kbzI6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBGb25kbzM6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb01lbnUxOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb01lbnUyOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb0p1ZWdvOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBUaXBvRGVNZW51Om51bWJlciA9IDA7IC8vMSA9IE1FTlUgR0FOTywgMiA9IE1FTlUgUEVSRElPXHJcblxyXG4gICAgSnVnYXIoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLkZpbGVUWFROaXZlbC50b1N0cmluZygpID09ICcxJykgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMZXZlbCAxJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKCB0aGlzLkZpbGVUWFROaXZlbC50b1N0cmluZygpID09ICcyJykgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMZXZlbCAyJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKCB0aGlzLkZpbGVUWFROaXZlbC50b1N0cmluZygpID09ICczJykgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMZXZlbCAzJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKCB0aGlzLkZpbGVUWFROaXZlbC50b1N0cmluZygpID09ICc0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRmlsZVRYVE5pdmVsLnRleHQgPSAgJzEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWVudScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLkp1Z2FyLHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkZpbGVUWFROaXZlbC51cmwgPSBjYy51cmwucmF3KFwiYXNzZXRzL090aGVycy9OaXZlbC50eHRcIik7XHJcbiAgICAgICAgdGhpcy5GaWxlVFhUUHVudGFqZS51cmwgPSBjYy51cmwucmF3KFwiYXNzZXRzL1B1bnRhamUudHh0XCIpO1xyXG4gICAgICAgIHRoaXMuUHVudGFqZS5zdHJpbmcgPSdQdW50YWplIEZpbmFsOiAnKyB0aGlzLkZpbGVUWFRQdW50YWplO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5GaWxlVFhUTml2ZWwudG9TdHJpbmcoKSA9PSAnMScpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Gb25kbzEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Gb25kbzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuRm9uZG8zLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9ZWxzZSBpZiggdGhpcy5GaWxlVFhUTml2ZWwudG9TdHJpbmcoKSA9PSAnMicpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Gb25kbzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuRm9uZG8yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuRm9uZG8zLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkZvbmRvMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5Gb25kbzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuRm9uZG8zLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5UaXBvRGVNZW51ID09IDEpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5Tb25pZG9NZW51MSxmYWxzZSk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5UaXBvRGVNZW51ID09IDIpIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5Tb25pZG9NZW51MixmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==