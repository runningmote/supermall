
//给路径起别名，方便使用
module.exports = {
	configureWebpack:{
		resolve:{
			// 去掉后缀名配置
			
			// extensions:[],
			
			//别名配置
			alias:{
				"assets":"@/assets",
				"common":"@/common",
				"components":"@/components",
				"network":"@/network",
				"pages":"@/pages"
			}
		}
	}
}