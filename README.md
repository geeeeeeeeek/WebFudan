WebFudan
========
使用WebGL和Node.js技术构建复旦三维社交网络。Webstorm项目，NodeJS Express开发。目前实现了WebGL显示复旦校园模型demo，多用户在线聊天。

代码说明
---------
项目结构：
* /bin - 启动脚本，未使用
* /node_modules - Node.js核心模块
* /public - 公共文件，包含字体、图片、js、css等
* /routes - 路由，未使用
* /template - 一个基于bootstrap的模版，包含一些页面demo
* /views - 视图，未使用
* app_deprecated.js - Express默认文件，已弃用
* main.js - 服务器代码，将此脚本作为Node默认启动项
* package.json - Node.js依赖文件
* WebFudan.html - 默认页面，将此网页作为启动页面
* webgl_deprecated.html - 原WebGL显示页面，已弃用

WebGL：
* WebFudan.html
```
<div id="canvas-frame"></div>
```
* webgl.js
WebGL的核心代码

在线聊天：
* WebFudan.html
```
<div class="box box-success" style="border: none;margin-bottom: 0;">
                <div class="box-header">
                    <i class="fa fa-comments-o"></i>

                    <h3 class="box-title font">校园聊天室</h3>
                </div>
                <div class="box-body chat" id="chat-box">

                </div>
                <!-- /.chat -->
                <div class="box-footer" style="margin-bottom: 0;">
                    <div class="input-group">
                        <input class="form-control" placeholder="在此输入" id="input"/>

                        <div class="input-group-btn">
                            <button class="btn btn-success" id="send">发送</button>
                        </div>
                    </div>
                </div>
            </div>
```
* chat.js
前端聊天更新的核心代码

修改WebFudan.html时，如需添加javascript或css，请加入public/javascripts/web_fudan.js及public/stylesheets/style.css
