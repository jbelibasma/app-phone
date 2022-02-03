const ReviewZoneComponent={
    template:`
    <formulaire-component @saveInfo="save"></formulaire-component>
    <affichage-component :message="obj1.message" :pseudo="obj1.pseudo" :note="obj1.note"  ></affichage-component>`,
    data(){
        return{
            obj1:{}
           
        } 
    },
    methods:{
        save(obj){
            this.obj1=obj;

           
            
        }
    }
}
export default ReviewZoneComponent


