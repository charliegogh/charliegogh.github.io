# api

## watch 

### immediate

当watch一个变量的时候,初始化时并不会去执行

``` javascript
    // bad
    created() {
      this.fetchUserList();
    },
    watch: {
      searchText: 'fetchUserList',
    }
```

使用immediate在初始化的时候会立即触发,代码简化为

```javascript
// good
watch: {
  searchText: {
    handler: 'fetchUserList',
    immediate: true,
  }
}
```

### deep深度监听

当deep设置成true时,会进行深度监听
```
const obj={a:1,b:2}
```
obj里任意一个key发生变化都会去触发watch

