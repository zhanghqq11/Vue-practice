<template>
    <div>
        <test  @getMessage="getVal"></test>
        <div>
            子组件输入的值:{{chindVal}}
        </div>
    </div>
</template>

<script>
    import test from './inputChild'
    export default {
        name: "inputParent",
        data(){
            return {
                chindVal:'',
            }
        },
        components:{
            test
        },
        methods:{
            getVal(msg){//msg就是传过来的数据了  这只是个形参  名字可以随意
                this.chindVal=msg;//然后将数据赋值给chindVal
            }
        }
    }
</script>

<style scoped>

</style>
