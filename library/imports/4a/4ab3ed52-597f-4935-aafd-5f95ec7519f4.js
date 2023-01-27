"use strict";
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