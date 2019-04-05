//mutations
export const SET_TOKEN = "SET_TOKEN" //保存token到state以及localStorage中，同一浏览器第二次打开系统不需要登录（已登录过）

export const SET_TIME = "SET_TIME"


//actions
export const SIGNIN = "SIGNIN" // 注册
export const LOGIN = "LOGIN" // 登录
export const LOGOUT = "LOGOUT" // 注销
export const FETCT_NAVMENU = "FETCT_NAVMENU" //动态获取菜单
export const FETCT_TOKEN = "FETCT_TOKEN" //登录，获取token

export const FETCH_TIME = "FETCH_TIME" // 获取体验时间
export const MODIFY_TIME = "MODIFY_TIME" // 修改体验时间


export const GET_USER_LIST = "GET_USER_LIST" // 获取数据库所有用户列表
export const GET_USER = "GET_USER" // 获取对应用户详细信息
export const SEARCH_USER = "SEARCH_USER" // 搜索对应用户
export const MODIFY_USER = "MODIFY_USER" // 修改用户权限
export const DELETE_USER = "DELETE_USER" // 删除用户
export const MODIGY_USER_PWD = "MODIGY_USER_PWD" // 修改用户密码
export const GET_USER_INFOLIST = "GET_USER_INFOLIST" //获取用户信息列表
export const GET_USER_INFO = "GET_USER_INFO" // 获取用户资源
export const ADD_USER_INFO = "ADD_USER_INFO" // 添加用户资源
export const DELETE_USER_INFO = "DELETE_USER_INFO" // 删除用户资源

export const SUBMIT_TEST1 = "SUBMIT_TEST1" //提交测试结果
export const SUBMIT_TEST2 = "SUBMIT_TEST2" //提交测试结果
export const SUBMIT_TEST3 = "SUBMIT_TEST3" //提交测试结果

