[http://wwsun.github.io/posts/react-with-es6-part-1.html](http://wwsun.github.io/posts/react-with-es6-part-1.html)<br>
[https://blog.coding.net/blog/React-server-rendering](https://blog.coding.net/blog/React-server-rendering)
## 使用es6开发nodejs服务端 ##
<p>由于node现在的版本并不是所有的方法都支持es6，因此需使用babel进行动态编译，故依赖包如下：</p>

1. **babel-cli**
2. **babel-preset-es2015-node5**

同时package.json 增加配置如下

	// package.json
 	"babel": {
	     "presets": ["es2015-node5"]
 	}

node执行命令由node更换为babel-node

	babel-node ./app/server/server.js


