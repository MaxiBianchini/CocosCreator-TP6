"use strict";
cc._RF.push(module, '458961v35dLY5Djwr7eNc28', 'Bloque');
// Scripts/Bloque.ts

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
        _this.Tipo = 0;
        _this.SonidoBloque = null;
        return _this;
    }
    NewClass.prototype.MoverPlayer = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                this.Movimineto = false;
                break;
        }
    };
    NewClass.prototype.SetVelocidad = function (x) {
        this.Velocidad = x;
    };
    NewClass.prototype.DescativarBloque = function () {
        this.node.active = false;
    };
    NewClass.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        cc.audioEngine.playEffect(this.SonidoBloque, false);
        if (selfCollider.tag == 0 && !this.PrimerContacto) {
            this.node.parent.getComponent('Game').CrearNuevoBloque(this.node.getPosition().x, this.node.getPosition().y);
            this.PrimerContacto = true;
        }
        if (this.Tipo == 0) {
            if (otherCollider.tag == 1)
                this.node.parent.getComponent('Game').Perdio();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
        this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
        this.PrimerContacto = false;
        this.Movimineto = true;
        this.Direccion = 1;
        this.Velocidad = 5;
        this.Inicio = -230;
        this.Fin = 230;
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        if (this.Movimineto) {
            this.node.setPosition(this.node.getPosition().x + (this.Direccion * this.Velocidad), this.node.getPosition().y);
            if (this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio)
                this.Direccion *= -1;
        }
    };
    __decorate([
        property
    ], NewClass.prototype, "Tipo", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoBloque", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();