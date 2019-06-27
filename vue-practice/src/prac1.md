##第一次练习

##组件通信

####父组件=>子组件  

在孩子里面设置一个属性。


> 属性props

```
//child
 Props：{msg:String}
 //parent
 <HelloWorld msg=”hello world”/>
```
>引用refs
```$xslt
//parent
<HelloWorld ref=”hw”/>
this.$refs.hw.xx
```

####子组件=>父组件：自定义事件
 
 子：派发事件，然后传参。
