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

#### 兄弟组件：通过共同的父辈

通过共同的祖辈组件搭桥，$parent或者$root

```javascript
//brother1
this.$parent.$on('foo',handle)
//brother2
this.$parent.$emit('foo')
```



### 祖先和后代之间

平时开发中用的比较少，主要用于ui库的编写

由于嵌套层数过多，传递props不切实际，vue提供了provide/inject API完成该任务

###### provide/inject：能够实现祖先给后代传值

```javascript
//ancestor祖先
provide(){
    return {foo: 'foo'}
}

//descendant
inject:['foo']
```

> 在vue官方文档中不建议大家在业务之中使用provide/inject，原文如下：
>
> 注意：provide和inject主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。我们更多会在开源组件库中见到。
>
> 另外，返过来想要后代给祖先船只这种方案就不行了，这难不住程序员们

- dispatch:后代给祖先传值

```javascript

```

