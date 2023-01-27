// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    Tipo:number = 0;

    @property(cc.AudioClip)
    SonidoBloque:cc.AudioClip = null;

    PrimerContacto:boolean;
    Movimineto:boolean;

    Direccion:number;
    Velocidad:number;
    Inicio:number;
    Fin:number;

    MoverPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:

                this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                this.Movimineto = false;

            break;
        }
    }

    SetVelocidad(x){
        this.Velocidad = x;
    }

    DescativarBloque(){
        this.node.active = false;
    }

    onBeginContact(contact, selfCollider, otherCollider){

        cc.audioEngine.playEffect(this.SonidoBloque,false);

        if(selfCollider.tag == 0 && !this.PrimerContacto){
           this.node.parent.getComponent('Game').CrearNuevoBloque(this.node.getPosition().x, this.node.getPosition().y);
           this.PrimerContacto = true;
        }

        if (this.Tipo == 0){
            if(otherCollider.tag == 1 )this.node.parent.getComponent('Game').Perdio();
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.MoverPlayer,this);
      
        this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;

        this.PrimerContacto = false;
        this.Movimineto = true;

        this.Direccion = 1;
        this.Velocidad = 5;

        this.Inicio = -230;
        this.Fin = 230;
    }

    start () {}

    update (dt) {

        if(this.Movimineto){
            this.node.setPosition(this.node.getPosition().x + (this.Direccion* this.Velocidad), this.node.getPosition().y);

            if(this.node.getPosition().x >= this.Fin || this.node.getPosition().x <= this.Inicio) this.Direccion *= -1;
        }
    }
}
