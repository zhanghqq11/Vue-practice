# Vue源码（一）

## 代码目录及结构

```html
<details>
<summary>展开查看Vue目录结构</summary>
<pre><code>
├──benchmarks // 未知
├──dist // 打包文件
├──examples // 示例代码
├──flow //vue是用flow编写的，所以flow文件夹里面放的是类型文件
├──packages // vue的子项目，但是这些项目是单独打包输出的
├──script // 脚本，最终输出创建的脚本，主要是build和config
├──src // 核心的源码部分
| ├──compiler // 编译器
| ├──core // vue的核心代码
| | ├──global-api // 全局的api，如vue.use vue.extend等
| ├──platform //vue应用的平台
| | ├──web
| | | ├──runtime //web应用的入口文件
| | ├──weex
├──test // 测试
├──types // 为ts专门维护的类型
</code></pre>
</details>
```

## 调试环境的搭建

此处是看源码非常重要的部分，搭建调试环境了以后可以看到vue框架的堆栈调用信息，可以通过vue的api写一些简单的指令，通过断点一步一步看调用的方法，可以加深对vue的设计模式的理解。

