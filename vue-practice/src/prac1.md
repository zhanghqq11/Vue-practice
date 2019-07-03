## 第一次练习

### 组件通信，组件的常用技术

#### 父组件=>子组件  

在孩子里面设置一个属性。


> 属性props

```javascript
//child
 Props：{msg:String}
 //parent
 <HelloWorld msg=”hello world”/>
```
>引用refs
```javascript
//parent
<HelloWorld ref=”hw”/>
this.$refs.hw.xx
```

#### 子组件=>父组件：自定义事件

 子：派发事件，然后传参。

```javascript
//child 
this.$emit('add',good)

//parent
<Cart @add="cartAdd($event)"></Cart>
```

###### 兄弟组件：通过共同的父辈

通过共同的祖辈组件搭桥，$parent或者$root