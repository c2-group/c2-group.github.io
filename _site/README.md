# 更新说明

## 更新 Research
* Research的md文件放入`_post`文件夹
* md文件以`2019-03-01-xxxxx.md`的格式命名
* md文件内容引用的图片等资源可放在`assets/graphs`下，md文件内的引用路径为`../../../assets/graphs/xxxx`
* md文件内容的开头需插入配置分类、标签、标题等信息，具体见下：
  ```
  ---
  title: "xxx"               // 尽量不要太长
  date: 2019-06-29 20:21:30
  layout: post               // 必须有，固定
  categories: TP SA          // 分类，可多个, 必须有
  tags: 决策评估 推演        // 标签，可多个
  ---
  ```
## 更新 Projects
* md文件放入`_project`文件夹（对应Projects页面上方的块列表）
* 需要显示的图片放入`assets/proimg`文件夹（对应Projects页面下方的图片列表）
* md文件名随意
* md文件内容开头的配置信息如下：
  ```
  ---
  layout: single          // 必须有，固定
  title: "xxxx"           // 查看md内容时，浏览器的标题
  filename: "xxxx"        // project页面的项目标题
  des: "xxx"              // project页面的项目描述
  ---
  ```
## 其他
  * 其他的页面修改，只需要找到根目录对应的md文件，修改即可
  * 页面会根据md文件的标题层级关系自动在右边生成导读链接


academic pages for c2 group