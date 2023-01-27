// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.TextAsset)
    FileTXTNivel:cc.TextAsset = null;

    @property(cc.TextAsset)
    FileTXTPuntaje:cc.TextAsset = null;

    @property(cc.Label)
    Puntaje:cc.Label = null;

    @property(cc.Node)
    Fondo1:cc.Node = null;

    @property(cc.Node)
    Fondo2:cc.Node = null;

    @property(cc.Node)
    Fondo3:cc.Node = null;

    @property(cc.AudioClip)
    SonidoMenu1:cc.AudioClip = null;

    @property(cc.AudioClip)
    SonidoMenu2:cc.AudioClip = null;

    @property(cc.AudioClip)
    SonidoJuego:cc.AudioClip = null;

    @property
    TipoDeMenu:number = 0; //1 = MENU GANO, 2 = MENU PERDIO

    Jugar(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                
                if( this.FileTXTNivel.toString() == '1') cc.director.loadScene('Level 1');
                else if( this.FileTXTNivel.toString() == '2') cc.director.loadScene('Level 2');
                else if( this.FileTXTNivel.toString() == '3') cc.director.loadScene('Level 3');
                else if( this.FileTXTNivel.toString() == '4') {
                    this.FileTXTNivel.text =  '1';
                    cc.director.loadScene('Menu');
                }
                
            break;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.Jugar,this);

        this.FileTXTNivel.url = cc.url.raw("assets/Others/Nivel.txt");
        this.FileTXTPuntaje.url = cc.url.raw("assets/Puntaje.txt");
        this.Puntaje.string ='Puntaje Final: '+ this.FileTXTPuntaje;

        if( this.FileTXTNivel.toString() == '1'){

            this.Fondo1.active = true;
            this.Fondo2.active = false;
            this.Fondo3.active = false;

        }else if( this.FileTXTNivel.toString() == '2'){

            this.Fondo1.active = false;
            this.Fondo2.active = true;
            this.Fondo3.active = false;

        }else {

            this.Fondo1.active = false;
            this.Fondo2.active = false;
            this.Fondo3.active = true;
        }

        cc.audioEngine.stopAllEffects();

        if (this.TipoDeMenu == 1) cc.audioEngine.playEffect(this.SonidoMenu1,false);
        else if (this.TipoDeMenu == 2) cc.audioEngine.playEffect(this.SonidoMenu2,false);
    }

    start () {}

    // update (dt) {}
}
