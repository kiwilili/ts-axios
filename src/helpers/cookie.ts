const cookie = {
  read(name: string): string | null {
    // () 代表组 [] 字符组 -> 匹配包含括号内元素的字符
    // https://zhidao.baidu.com/question/2052988936166883387.html -> 解释 (^|;\\s*)
    // https://blog.csdn.net/baidu_36681154/article/details/79270164 -> [^;]
    // https://www.cnblogs.com/zery/p/3438845.html -> 读懂正则
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'))
    // decodeURIComponent 与 decodeURI 区别 在于第一个可以对特殊字符解析
    return match ? decodeURIComponent(match[3]) : null
  }
}

export default cookie
