<template>
    <div>
        <input v-model="message">
        <button @click="watchthis">输出</button>
    </div>
</template>

<script>
    export default {
        name: "inputChild",
        data(){
            return{
                message:'111'
            }
        },
        methods:{
            // watchthis(){
            //     let y=1;
            //     console.log(y)
            //    console.log(this.$parent)
            // }
        },
        watch:{
            'message':function () {
                this.$emit('getMessage',this.message);//主要是通过$emit方法来实现传参的方式，第一个参数是自定义事件名称，第二个则是要传的数据
            }
        }
    }
</script>

<style scoped>

</style>
