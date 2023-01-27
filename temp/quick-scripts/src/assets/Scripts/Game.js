"use strict";
cc._RF.push(module, 'db44br8kpRP7rRLO+10erUN', 'Game');
// Scripts/Game.ts

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
        _this.Bloque = null;
        _this.Camara = null;
        _this.Score = null;
        _this.Objetivo = null;
        _this.Tiempo = null;
        _this.Base = null;
        _this.NumEscena = 0;
        _this.SonidoJuego = null;
        _this.FileTXTNivel = null;
        _this.FileTXTPuntaje = null;
        return _this;
    }
    NewClass.prototype.CrearNuevoBloque = function (x, y) {
        y += 250;
        this.GanarPuntaje(x);
        if (this.Desactivar)
            return;
        var NuevoBLoque = cc.instantiate(this.Bloque);
        NuevoBLoque.setPosition(0, y);
        this.node.addChild(NuevoBLoque);
        this.NumBloques += 1;
        if (this.NumEscena == 3) {
            if (this.Timer >= 3) {
                this.Velocidad += 2.5;
                this.Timer = 0;
            }
        }
        NuevoBLoque.getComponent('Bloque').SetVelocidad(this.Velocidad);
        this.Camara.setPosition(this.Camara.getPosition().x, y);
    };
    NewClass.prototype.Perdio = function () {
        this.FileTXTPuntaje.text = this.playerScore.toString();
        this.FileTXTNivel.text = this.NumEscena.toString();
        cc.director.loadScene('MenuPerdio');
    };
    NewClass.prototype.Gano = function () {
        this.NumEscena++;
        this.FileTXTPuntaje.text = this.playerScore.toString();
        this.FileTXTNivel.text = this.NumEscena.toString();
        cc.director.loadScene('MenuGano');
    };
    NewClass.prototype.GanarPuntaje = function (x) {
        if (this.NumBloques == 1) {
            this.PosBloqueViejo = x;
            return;
        }
        this.PosBloqueNuevo = x;
        var Diferencia = this.PosBloqueNuevo - this.PosBloqueViejo;
        if (Diferencia < 0)
            Diferencia * -1;
        if (Diferencia <= 30)
            this.playerScore += 50;
        else if (Diferencia <= 70)
            this.playerScore += 25;
        else if (Diferencia <= 100)
            this.playerScore += 10;
        this.Score.string = 'Puntaje: ' + this.playerScore.toString();
        this.PosBloqueViejo = this.PosBloqueNuevo;
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.gravity = cc.v2(0, -2000);
        this.Timer = 0;
        this.Velocidad = 5;
        this.NumBloques = 1;
        this.playerScore = 0;
        this.TimerPantalla = 0;
        this.Segundos = 0;
        this.TimerPantallaOn = false;
        this.Base.active = false;
        this.Desactivar = false;
        if (this.NumEscena == 1 || this.NumEscena == 3) {
            this.Tiempo.enabled = false;
        }
        cc.audioEngine.playEffect(this.SonidoJuego, true);
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        if ((this.NumEscena == 1 && this.NumBloques == 5) || (this.NumEscena == 2 && this.Segundos == 10) || (this.NumEscena == 3 && this.NumBloques == 10)) {
            this.TimerPantallaOn = false;
            if (!this.Desactivar) {
                this.Timer = 0;
                this.Desactivar = true;
            }
            if (this.Timer >= 5) {
                this.Gano();
            }
        }
        if (this.Timer >= 4 && this.Base.active == false) {
            this.Objetivo.enabled = false;
            this.Base.active = true;
            this.TimerPantallaOn = true;
            this.Timer = 0;
            this.TimerPantalla = 0;
        }
        if (this.TimerPantalla >= 1 && this.TimerPantallaOn) {
            this.Segundos++;
            this.Tiempo.string = 'Tiempo: ' + this.Segundos.toString();
            this.TimerPantalla = 0;
        }
        this.TimerPantalla += dt;
        this.Timer += dt;
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Bloque", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Camara", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "Score", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "Objetivo", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "Tiempo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Base", void 0);
    __decorate([
        property
    ], NewClass.prototype, "NumEscena", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "SonidoJuego", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTNivel", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXTPuntaje", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();