// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    Bloque:cc.Prefab = null;

    @property(cc.Node)
    Camara:cc.Node = null;

    @property(cc.Label)
    Score:cc.Label = null;

    @property(cc.Label)
    Objetivo:cc.Label = null;

    @property(cc.Label)
    Tiempo:cc.Label = null;
    
    @property(cc.Node)
    Base:cc.Node = null;

    @property
    NumEscena:number = 0;

    @property(cc.AudioClip)
    SonidoJuego:cc.AudioClip = null;

    @property(cc.TextAsset)
    FileTXTNivel:cc.TextAsset = null;

    @property(cc.TextAsset)
    FileTXTPuntaje:cc.TextAsset = null;

    Timer:number;
    NumBloques:number;

    Desactivar:boolean;
    TimerPantalla:number;
    playerScore:number;
    Segundos:number;

    TimerPantallaOn:boolean;

    Velocidad:number;

    PosBloqueViejo:number;
    PosBloqueNuevo:number;

    CrearNuevoBloque(x,y){
        y +=250;

        
        this.GanarPuntaje(x);
        
        if (this.Desactivar) return;

        let NuevoBLoque = cc.instantiate(this.Bloque);
        NuevoBLoque.setPosition(0, y);
        this.node.addChild(NuevoBLoque);
        
        this.NumBloques += 1;

        if (this.NumEscena == 3){ 
            if (this.Timer >= 3){
                this.Velocidad += 2.5;
                this.Timer = 0;
            }
        }
        NuevoBLoque.getComponent('Bloque').SetVelocidad(this.Velocidad);
        this.Camara.setPosition(this.Camara.getPosition().x, y)
    }

    Perdio(){
      
        this.FileTXTPuntaje.text =  this.playerScore.toString();
        this.FileTXTNivel.text =  this.NumEscena.toString(); 
        cc.director.loadScene('MenuPerdio');
    }

    Gano(){
        this.NumEscena++;
        this.FileTXTPuntaje.text =  this.playerScore.toString();
        this.FileTXTNivel.text =  this.NumEscena.toString();
        cc.director.loadScene('MenuGano');
    }


    GanarPuntaje(x){

        if (this.NumBloques == 1) {
            this.PosBloqueViejo = x;
            return;
        }

        this.PosBloqueNuevo = x;
        let Diferencia = this.PosBloqueNuevo - this.PosBloqueViejo;

        if (Diferencia < 0) Diferencia * -1;

        if (Diferencia <= 30) this.playerScore += 50;
        else if (Diferencia <= 70) this.playerScore += 25;
        else if (Diferencia <= 100) this.playerScore += 10;

        this.Score.string = 'Puntaje: '+ this.playerScore.toString();

        this.PosBloqueViejo = this.PosBloqueNuevo;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.gravity = cc.v2 (0,-2000);

        this.Timer = 0;
        this.Velocidad = 5;
        this.NumBloques = 1;
        this.playerScore = 0;
        this.TimerPantalla = 0;
        this.Segundos = 0;

        this.TimerPantallaOn = false;
        this.Base.active = false;
        this.Desactivar = false;

        if (this.NumEscena == 1 || this.NumEscena == 3 ){
            this.Tiempo.enabled = false;
        }

        cc.audioEngine.playEffect(this.SonidoJuego,true);
        
    }

    start () {}

    update (dt) {

        if ((this.NumEscena == 1 && this.NumBloques == 5) || (this.NumEscena == 2 && this.Segundos == 10) || (this.NumEscena == 3 && this.NumBloques == 10)) {
            
            this.TimerPantallaOn = false;

            if (!this.Desactivar){
                this.Timer = 0;
                this.Desactivar = true;
            }
            if (this.Timer >= 5) {
                this.Gano();
            }
        }

        if (this.Timer >= 4 && this.Base.active == false){
            this.Objetivo.enabled = false;
            this.Base.active = true;
            this.TimerPantallaOn = true;
            this.Timer = 0;
            this.TimerPantalla = 0;
        }

        if(this.TimerPantalla >= 1 && this.TimerPantallaOn){
            this.Segundos++
            this.Tiempo.string = 'Tiempo: '+ this.Segundos.toString();
            this.TimerPantalla = 0;
        }

        this.TimerPantalla += dt;
        this.Timer += dt;
    }
}
