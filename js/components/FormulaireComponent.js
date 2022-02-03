const FormulaireComponent = {
    template: `<div class="review-zone"><form class="review-form">
    <input type="text" v-model="obj.pseudo">
    <input type="text" v-model="obj.message">
    <select  v-model="obj.note">
    <option value="1">1</option>
    <option value="1">2</option>
    <option value="1">3</option>
    </select>
    <button class="button" @click.prevent="save()">add</button>
    </form></div>`,
    data(){
        return {
            obj:{pseudo : "",
            message : "",note: ""}
        }
    },
    methods:{
        save(){

            this.$emit("saveInfo",this.obj)
        }
    }
}
export default FormulaireComponent