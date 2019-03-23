//mutations
export const SET_TOKEN = "SET_TOKEN" //保存token到state以及localStorage中，同一浏览器第二次打开系统不需要登录（已登录过）

export const SET_TIME = "SET_TIME"


export const SET_USERS = "SET_USERS" //系统管理，保存用户列表(用户分配角色)
export const SET_ROLE = "SET_ROLE" //系统管理，保存角色列表
export const SET_ROLESLIST = "SET_ROLESLIST" //系统管理，保存角色列表
export const SET_PREMISSION = "SET_PREMISSION" //系统管理，保存权限列表




//actions
export const FETCT_NAVMENU = "FETCT_NAVMENU" //动态获取菜单
export const FETCT_TOKEN = "FETCT_TOKEN" //登录，获取token

export const FETCH_TIME = "FETCH_TIME" // 获取体验时间



export const FETCT_USERS = "FETCT_USERS" //系统管理，获取用户列表
export const FETCT_ROLE = "FETCT_ROLE" //系统管理，获取角色列表(用户分配角色)
export const FETCT_SAVEUSERS = "FETCT_SAVEUSERS" //系统管理，保存角色分配
export const FETCT_ROLESLIST = "FETCT_ROLESLIST" //系统管理，获取角色列表
export const FETCT_PREMISSION = "FETCT_PREMISSION" //系统管理，获取资源列表
export const FETCT_SAVEPREMISSION = "FETCT_SAVEPREMISSION" //系统管理，保存权限
export const FETCT_LOGS = "FETCT_LOGS" //系统管理，获取日志表格
