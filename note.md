1做中间的container给其他页面用 
1搜索的翻页组件
citypicker
backbutton
领养 做1具体页面，0.5表格（差表单验证），0.5通知（通知notice用于显示请求结果，收藏成功，网络错误等；对话框dialog用于显示实名认证等提醒）
验证权限（是否实名认证） =》 
否弹通知 
是弹表格=》发送请求，弹通知成功/失败

社区 做多选tabfilter（2级）， 1 text自动收缩，1 postname（头像昵称时间），readInfo（icon和数字），textfield（文字框1个，和按钮）
社区/科普帖子页面：
内容 Title，postname，readInfo
评论 Title，postname，评论内容

公告 tabfilter变体， title， content，time，统一不要readInfo
具体页面：Title，time，readInfo， content

送养 权限验证 =》 表格

我-发布内容/收藏夹-社区发布/公告 社区通用组件

我-送养/领养-审核 图片，名称，petinfo，时间，描述

科普 nav, 标题发布人内容readInfo

loading skeleton
回到顶部：appbar
消息notice：snackbar

breakpoint: 1020