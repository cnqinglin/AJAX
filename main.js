myButton.addEventListener('click', (e) => {
    //声明一个XMLHttpRequest对象
    let request = new XMLHttpRequest()

    //配置(初始化)XMLHttpRequest请求对象
    request.open('GET', 'http://localhost:8002/xxx')

    //发送请求
    request.send()

    //XMLHttpRequest的实例属性，监听XMLHttpRequest属性的变化
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求响应完毕')
            //AJAX判断状态
            if (request.status >= 200 && request.status < 300) {
                console.log('请求成功')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                
                //以下注释是XML格式的字符串解析
                //let parser = new DOMParser(); //parser是解析器
                //let xmlDoc = parser.parseFromString(request.responseText, "text/xml") //用parser 解析request.responseText
                //let c = xmlDoc.getElementsByTagName('body')[0].textContent  //把body里面的内容打出来
                //以上三行用别的简单的结构数据表示
                
                
                //js解析服务器返回的json格式的字符串
                let string = request.responseText
                //把符合 json 语法的字符串转换成 js 对应的值
                let object = window.JSON.parse(string)//JSON.parse是浏览器提供的API
                console.log(typeof object)
                console.log(object)
                console.log("object.note") //打印字符串
                console.log(object.note)    //打印真正的值
                console.log('object.note.from')
                console.log(object.note.from)
                console.log('object.note.heading')
                console.log(object.note.heading)
                console.log('object.note.body')
                console.log(object.note.body)

            } else if (request.status >= 400) {
                console.log('请求失败了')
            }

        }
    }

    
})