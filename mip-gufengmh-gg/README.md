# mip-gufengmh-gg 古风漫画广告轮播组件

`<mip-gufengmh-gg>` 用于管理古风漫画（gufengmh.com）广告固定位素材轮播的组件。 通过引入古风漫画的素材管理组件，实现自动更换广告素材的功能

标题|内容
----|----
类型|通用
支持布局|responsive, fixed-height, fill, container, nodisplay, fixed, flex-item
所需脚本|https://c.mipcdn.com/static/v1/mip-gufengmh-gg/mip-gufengmh-gg.js

## 示例

### 基本使用

```html
<mip-gufengmh-gg></mip-gufengmh-gg>
```

1、在页面底部增加下面代码：
<script src="https://c.mipcdn.com/static/v1/mip-gufengmh-gg/mip-gufengmh-gg.js"></script>
<mip-gufengmh-gg></mip-gufengmh-gg>
2、在需要增加定位广告的地方增加
<div class="a-gufengmh" data-name="name1"></div>


## 属性
### mip-gufengmh-gg
说明：管理古风漫画（gufengmh.com）广告固定位素材轮播的组件 , 广告类型是固定广告 , 在组件中通过获取页面中加载的div标签以图片的形式展示