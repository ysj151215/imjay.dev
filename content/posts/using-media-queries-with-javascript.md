---
title: 在 JavaScript 中使用 media queries
description: Media queries 不只是一个 CSS 特性，也可以与 JavaScript 进行交互，本文将向您介绍具体的实现方法。
updatedAt: 2021-05-28
---

**本文翻译自：《[Using media queries with JavaScript]》**。

Media queries 不只是一个 CSS 特性，也可以与 JavaScript 进行交互，本文将向您介绍具体的实现方法。

> 如果您正在寻找现成的解决方案，不妨看下本文原作者开发的 lib：[mediaq].

## window.matchMedia API

`window.matchMedia` 是浏览器暴露出来的一个方法，它以「media query」作为参数，返回一个 `MediaQueryList` 对象。

```javascript
const mediaQueryList = window.matchMedia('only screen and (max-width: 600px)')
```

## 检测 media query 是否匹配

`MediaQueryList` 对象中有一个 boolean 参数 `matches`，任何时候都可以通过这个参数来检测指定的 media query 是否匹配。

```javascript
if (mediaQueryList.matches) {
  console.log('It matches!')
} else {
  console.log("It doesn't match.")
}
```

## 监听变化

除了判断 `MediaQueryList` 对象的 `matches` 值，您也可以直接绑定一个 listener 事件来监听 media query 的变化及终止（例如：浏览器窗口缩放、设备横竖屏切换等等）。

由于 `MediaQueryList` 继承了 `EventTarget`，因此 listener 事件非常好写。

```javascript
const listener = event => {
  console.log(event.matches ? 'It matches!' : "It doesn't match.")
}

mediaQueryList.addEventListener('change', listener)
```

移除 listener 也很简单。

```javascript
mediaQueryList.removeEventListener('change', listener)
```

请注意，Internet explorer 浏览器和 Safari 浏览器（< 14）handle 这些事件的方法比较不一样，它们用的是 `addListener`/`removeListener`。

为了与这些浏览器实现兼容，您可以有条件地 call 正确的方法。

```javascript
const listener = event => {
  console.log(event.matches ? 'It matches!' : "It doesn't match.")
}

if (mediaQueryList.addEventListener) {
  mediaQueryList.addEventListener('change', listener)
} else {
  mediaQueryList.addListener(listener)
}

// 移除 listener
if (mediaQueryList.removeEventListener) {
  mediaQueryList.removeEventListener('change', listener)
} else {
  mediaQueryList.removeListener(listener)
}
```

阅读更多 [浏览器兼容性] 相关内容。

## 为什么要这么做

在 CSS 代码里，media queries 可被用于创建响应式布局，也可以用来隐藏某些元素，或加载更高/低分辨率的背景图片，而在某些情况下，这显然还不足够，所以需要借助 JavaScript 来进一步优化网页。

想象一下，网页中有一个需要复杂运算的组件，您不需要它在小屏幕设备上显示，通过 CSS 您可以很轻松地做到，但它仍是 DOM 的一部分，就意味着它仍可能进一步降低 Web 应用的性能。

```css
@media only screen and (max-width: 480px) {
  .component {
    display: none; /* 这个组件已经不再显示了，但它仍是网页的一部分 */
  }
}
```

而通过 JavaScript 您可以决定这个组件是否需要被嵌入到网页中去。

```javascript
const mediaQueryList = window.matchMedia('only screen and (max-width: 480px)')

if (!mediaQueryList.matches) {
  // 在此处创建/嵌入元素
}
```

另一个使用场景是，在规定的屏幕尺寸下加载指定的脚本。如果您的应用运行了大型图形库，则可以选择仅在桌面端设备上显示这些图形。

```javascript
const mediaQueryList = window.matchMedia('only screen and (min-width: 768px)')

if (mediaQueryList.matches) {
  const script = document.createElement('script')
  script.src = 'path to JavaScript script'
  document.body.appendChild(script)
}
```

JavaScript 也可以在不需要 media query 的帮助下检测 [屏幕分辨率]，不过这个行为是一次性的，可以通过监听浏览器窗口的 resize 事件进行跟踪，但是开销较大，使用 media queries 会更加高效。

---

### 笔者提示

> [react-use] 中的 \`[useMedia()]\` 方法和 [vueuse] 中的 \`[useMediaQuery()]\` 方法，它们的源代码均可作为实际产品参考。

[浏览器兼容性]: https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList
[屏幕分辨率]: https://developer.mozilla.org/zh-CN/docs/Web/API/Screen
[mediaq]: https://dev.maroun-baydoun.com/mediaq/
[react-use]: https://github.com/streamich/react-use
[usemedia()]: https://github.com/streamich/react-use/blob/master/src/useMedia.ts
[usemediaquery()]: https://github.com/vueuse/vueuse/blob/main/packages/core/useMediaQuery/index.ts
[using media queries with javascript]: https://dev.to/maroun_baydoun/using-media-queries-with-javascript-4aeo
[vueuse]: https://github.com/vueuse/vueuse
