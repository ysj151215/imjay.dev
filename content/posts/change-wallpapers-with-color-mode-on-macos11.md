---
title: 用 AppleScript 同时切换壁纸与主题模式
description: 这是一个简单、不折腾的方案，顺便向您安利一个免费 App。
updatedAt: 2021-04-14
---

> 「深色模式」带来了全然一新的外观，它能使您的眼睛放松，并有助于您专心工作。深色模式使用一种较深的配色方案，这种配色作用于整个系统，包括 Mac 随附的应用。另外，第三方应用也可以采用这一模式。—— [如何在 Mac 上使用深色模式](https://support.apple.com/zh-cn/HT208976)。

## 编写脚本

[AppleScript](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html) 是苹果公司开发的一门脚本语言，可以用来控制 macOS 系统上的各种应用程序，由于其灵活的编码机制，很多注重效率的用户会选择通过它实现各种 Workflow，本文的重点也在于此。

结合「深色模式」这一功能，您是否希望在切换系统主题模式的同时，将壁纸也对应地进行更换？打开 macOS 内置的「Script Editor」应用、点击「New Document」、将下方的代码完整地拷贝至编辑区、替换其中的壁纸图片路径、点击菜单栏里的「运行」，即可实现这个 Flow。

```applescript
tell application "System Events"
	tell appearance preferences
		if (dark mode) then
			set dark mode to not dark mode
			tell application "System Events"
				tell every desktop
					set picture to "/path/to/the/light mode wallpaper"
				end tell
			end tell
		else
			set dark mode to not dark mode
			tell application "System Events"
				tell every desktop
					set picture to "/path/to/the/dark mode wallpaper"
				end tell
			end tell
		end if
	end tell
end tell
```

## 快速执行脚本

至此您已经完成了脚本的编写，只需「运行」即可，但很明显这样是不够的，您需要将它封装为一个 Application 才能更快速地执行。

方法很简单：点击菜单栏里的「File」、点击「Export」、选择「File Format 」为「Application」、保存。然后您就可以在 Spotlight 或其它各种 Autoflow 类应用程序里快速切换主题模式了。

## 自动执行脚本

在没有第三方应用的支持下，可以通过「日历」让脚本自动化运行。

<markdown-image alt="在「日历」中设置自动化脚本" figcaption="在「日历」中设置自动化脚本" src="/change-wallpapers-with-color-mode-on-macos11/set-calendar-action.png"></markdown-image>

例如，我们需要实现这样一个场景：**每天早上 07:00 和下午 17:30 各切换一次主题**。

除了要设置「starts」、「ends」、「repeat」等参数外，还需要选择自定义「alert」方式为「Open file」方法，并选择我们刚才保存的 AppleScript 文件，这样才算实现了真正的自动化操作。

---

### 笔者补充

以上方法的优点在于无需安装任何第三方应用，但整体来说还是不够「傻瓜」。所以这里我推荐一款免费的第三方应用：[Umbra](https://umbra.replay.software/)。它相当于把以上操作图形化了，使用起来十分简单，还集成了 Unsplash 图库。

另外，本网站也是支持「深色模式」的，您可以点击右上角的「太阳/月亮」图标，或使用键盘快捷键「D」快速切换网页的主题，希望您喜欢 ❤️！
