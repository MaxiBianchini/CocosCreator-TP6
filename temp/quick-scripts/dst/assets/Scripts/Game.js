
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVLQztRQXBLRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLElBQUksQ0FBQztRQUdwQixlQUFTLEdBQVUsQ0FBQyxDQUFDO1FBR3JCLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsb0JBQWMsR0FBZ0IsSUFBSSxDQUFDOztJQXlJdkMsQ0FBQztJQXhIRyxtQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFDLENBQUM7UUFDaEIsQ0FBQyxJQUFHLEdBQUcsQ0FBQztRQUdSLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckIsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFFNUIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLFVB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R2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ1U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDWTtJQTlCbEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVLNUI7SUFBRCxlQUFDO0NBdktELEFBdUtDLENBdktxQyxFQUFFLENBQUMsU0FBUyxHQXVLakQ7a0JBdktvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEJsb3F1ZTpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ2FtYXJhOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIFNjb3JlOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBPYmpldGl2bzpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgVGllbXBvOmNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCYXNlOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgTnVtRXNjZW5hOm51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIFNvbmlkb0p1ZWdvOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRleHRBc3NldClcclxuICAgIEZpbGVUWFROaXZlbDpjYy5UZXh0QXNzZXQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5UZXh0QXNzZXQpXHJcbiAgICBGaWxlVFhUUHVudGFqZTpjYy5UZXh0QXNzZXQgPSBudWxsO1xyXG5cclxuICAgIFRpbWVyOm51bWJlcjtcclxuICAgIE51bUJsb3F1ZXM6bnVtYmVyO1xyXG5cclxuICAgIERlc2FjdGl2YXI6Ym9vbGVhbjtcclxuICAgIFRpbWVyUGFudGFsbGE6bnVtYmVyO1xyXG4gICAgcGxheWVyU2NvcmU6bnVtYmVyO1xyXG4gICAgU2VndW5kb3M6bnVtYmVyO1xyXG5cclxuICAgIFRpbWVyUGFudGFsbGFPbjpib29sZWFuO1xyXG5cclxuICAgIFZlbG9jaWRhZDpudW1iZXI7XHJcblxyXG4gICAgUG9zQmxvcXVlVmllam86bnVtYmVyO1xyXG4gICAgUG9zQmxvcXVlTnVldm86bnVtYmVyO1xyXG5cclxuICAgIENyZWFyTnVldm9CbG9xdWUoeCx5KXtcclxuICAgICAgICB5ICs9MjUwO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkdhbmFyUHVudGFqZSh4KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5EZXNhY3RpdmFyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBOdWV2b0JMb3F1ZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQmxvcXVlKTtcclxuICAgICAgICBOdWV2b0JMb3F1ZS5zZXRQb3NpdGlvbigwLCB5KTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoTnVldm9CTG9xdWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTnVtQmxvcXVlcyArPSAxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5OdW1Fc2NlbmEgPT0gMyl7IFxyXG4gICAgICAgICAgICBpZiAodGhpcy5UaW1lciA+PSAzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuVmVsb2NpZGFkICs9IDIuNTtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE51ZXZvQkxvcXVlLmdldENvbXBvbmVudCgnQmxvcXVlJykuU2V0VmVsb2NpZGFkKHRoaXMuVmVsb2NpZGFkKTtcclxuICAgICAgICB0aGlzLkNhbWFyYS5zZXRQb3NpdGlvbih0aGlzLkNhbWFyYS5nZXRQb3NpdGlvbigpLngsIHkpXHJcbiAgICB9XHJcblxyXG4gICAgUGVyZGlvKCl7XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuRmlsZVRYVFB1bnRhamUudGV4dCA9ICB0aGlzLnBsYXllclNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5GaWxlVFhUTml2ZWwudGV4dCA9ICB0aGlzLk51bUVzY2VuYS50b1N0cmluZygpOyBcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01lbnVQZXJkaW8nKTtcclxuICAgIH1cclxuXHJcbiAgICBHYW5vKCl7XHJcbiAgICAgICAgdGhpcy5OdW1Fc2NlbmErKztcclxuICAgICAgICB0aGlzLkZpbGVUWFRQdW50YWplLnRleHQgPSAgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuRmlsZVRYVE5pdmVsLnRleHQgPSAgdGhpcy5OdW1Fc2NlbmEudG9TdHJpbmcoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01lbnVHYW5vJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEdhbmFyUHVudGFqZSh4KXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuTnVtQmxvcXVlcyA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuUG9zQmxvcXVlVmllam8gPSB4O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlBvc0Jsb3F1ZU51ZXZvID0geDtcclxuICAgICAgICBsZXQgRGlmZXJlbmNpYSA9IHRoaXMuUG9zQmxvcXVlTnVldm8gLSB0aGlzLlBvc0Jsb3F1ZVZpZWpvO1xyXG5cclxuICAgICAgICBpZiAoRGlmZXJlbmNpYSA8IDApIERpZmVyZW5jaWEgKiAtMTtcclxuXHJcbiAgICAgICAgaWYgKERpZmVyZW5jaWEgPD0gMzApIHRoaXMucGxheWVyU2NvcmUgKz0gNTA7XHJcbiAgICAgICAgZWxzZSBpZiAoRGlmZXJlbmNpYSA8PSA3MCkgdGhpcy5wbGF5ZXJTY29yZSArPSAyNTtcclxuICAgICAgICBlbHNlIGlmIChEaWZlcmVuY2lhIDw9IDEwMCkgdGhpcy5wbGF5ZXJTY29yZSArPSAxMDtcclxuXHJcbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSAnUHVudGFqZTogJysgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLlBvc0Jsb3F1ZVZpZWpvID0gdGhpcy5Qb3NCbG9xdWVOdWV2bztcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBwaHlzaWNzX21hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeXNpY3NfbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwaHlzaWNzX21hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyICgwLC0yMDAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5UaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5WZWxvY2lkYWQgPSA1O1xyXG4gICAgICAgIHRoaXMuTnVtQmxvcXVlcyA9IDE7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5UaW1lclBhbnRhbGxhID0gMDtcclxuICAgICAgICB0aGlzLlNlZ3VuZG9zID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5UaW1lclBhbnRhbGxhT24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJhc2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5EZXNhY3RpdmFyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLk51bUVzY2VuYSA9PSAxIHx8IHRoaXMuTnVtRXNjZW5hID09IDMgKXtcclxuICAgICAgICAgICAgdGhpcy5UaWVtcG8uZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLlNvbmlkb0p1ZWdvLHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMuTnVtRXNjZW5hID09IDEgJiYgdGhpcy5OdW1CbG9xdWVzID09IDUpIHx8ICh0aGlzLk51bUVzY2VuYSA9PSAyICYmIHRoaXMuU2VndW5kb3MgPT0gMTApIHx8ICh0aGlzLk51bUVzY2VuYSA9PSAzICYmIHRoaXMuTnVtQmxvcXVlcyA9PSAxMCkpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuVGltZXJQYW50YWxsYU9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuRGVzYWN0aXZhcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGVzYWN0aXZhciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuVGltZXIgPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW5vKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlRpbWVyID49IDQgJiYgdGhpcy5CYXNlLmFjdGl2ZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuT2JqZXRpdm8uZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLkJhc2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5UaW1lclBhbnRhbGxhT24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlRpbWVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5UaW1lclBhbnRhbGxhID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuVGltZXJQYW50YWxsYSA+PSAxICYmIHRoaXMuVGltZXJQYW50YWxsYU9uKXtcclxuICAgICAgICAgICAgdGhpcy5TZWd1bmRvcysrXHJcbiAgICAgICAgICAgIHRoaXMuVGllbXBvLnN0cmluZyA9ICdUaWVtcG86ICcrIHRoaXMuU2VndW5kb3MudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5UaW1lclBhbnRhbGxhID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuVGltZXJQYW50YWxsYSArPSBkdDtcclxuICAgICAgICB0aGlzLlRpbWVyICs9IGR0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==