1. json中可以运行js代码（上海面试问题）

js引擎中提供了一个eval函数以用于运行js代码，但是需要解析的json数据并不能保证安全甚至可以被恶意篡改，为避免这种情况的出现，
可使用js提供的JSON.parse() 和json.stringify函数进行解码。

