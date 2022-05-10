import util from '@/common/js/util.js'
let lifeData = {};

try {
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync('lifeData');
} catch (e) {

}
// 保存变量到本地存储中,此函数不要修改
const saveLifeData = function(key, value, isLifeData, keyNames = '') {
	// 获取本地存储的lifeData对象，将变量添加到对象中
	let tmp = uni.getStorageSync('lifeData');
	console.log('vallie====', value);
	// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
	tmp = tmp ? tmp : {};
	if (isLifeData) {
		tmp[key] = value;
	} else {
		util.deleteKeys(tmp, keyNames)
	}
	// 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
	uni.setStorageSync('lifeData', tmp);
}
const userLogin = {
	namespaced: true,
	state: {
		/*  以下为演示数据，真正项目中请重新定义  */
		// 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
		// 加上vuex_前缀，是防止变量名冲突，也让人一目了然
		vuex_user: lifeData.vuex_user ? lifeData.vuex_user : {
			name: ''
		},
		vuex_test: {
			a: 2
		},
		vuex_token: lifeData.vuex_token ? lifeData.vuex_token : '',
		// 如果vuex_version无需保存到本地永久存储，无需lifeData.vuex_version方式
		vuex_version: '1.0',
	},
	getters: {
		$uStoreGet(state, payload) {
			return (key) => {
				// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
				let nameArr = key.split('.');
				let saveKey = '';
				let len = nameArr.length;
				let obj = state[nameArr[0]];
				if (len >= 2) {
					for (let i = 1; i <= len - 1; i++) {
						obj = obj[nameArr[i]];
					}
				}
				// 返回值
				return obj;

			}


		}
	},
	mutations: { // 此函数不要修改
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			let obj = state[nameArr[0]];
			if (len >= 2) {
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey], payload.isLifeData, payload.name)

		}
	}
}

export default userLogin;
