1. link元素的title属性值生成一个候选样式列表，可以提供用户选择不同的网站主题。
    ```
    <link rel="stylesheet" type="text/css" href="sheet1.css" title="Default" />
    <link rel="stylesheet" type="text/css" href="sheet2.css" title="Black" />
    <link rel="stylesheet" type="text/css" href="sheet3.css" title="Big Text" />
    ```
2. 属性选择器：
    ```
    h1[class] {color: red;}
    *[title] {color: red;}
    h1[class][href] {color: red;}
    h1[title^="bar"] {color: red;} //开头
    h1[title$="bar"] {color: red;} //结尾
    h1[title*="bar"] {color: red;} //包含
    ```
3. 用rem，JS动态改变html的font-size可以屏幕自适应
5. CSS3的属性pointer-events能控制JS事件的触发：
    ```
    pointer-events：none //禁止所有事件
    pointer-events：all  //启用所有事件监听
    ```
20. 元素垂直居中： 

    1. 父元素高度确定的单行文本设置  height = line-height  
    2. inline-block
        ```
        display: inline-block; 
        vertical-align: middle;
        ```
    3.  
        ```
        //子元素
        position: relative; /*脱离文档流*/
        top: 50%; /*偏移*/
        transform: translateY(-50%);
        ```
    4. [flex教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)   
    
        ```
        //父元素
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
        ```  
    5. 父容器设置为display:table ，然后将子元素也就是要垂直居中显示的元素设置为 display:table-cell （不推荐使用）

6. 元素水平居中：  

    1. 行内元素：设置  text-align:center  
    2. 定宽块状元素：设置左右margin值为auto  
    3. transform
        ```
        //子元素
        position: relative; /*脱离文档流*/
        left: 50%; /*偏移*/
        transform: translateX(-50%);
        ```  
    4. flex布局

7. 清除浮动：
    1. 父元素：overflow：auto;
    2. 父元素内部最后加<br style="clear:both">
8. 元素设置为display:inline-block;之后会往下移：那是因为display:inline-block成了内联，inline box有一个叫做baseline的东西，想要更改很简单只要vertical-align: top;和vertical-align: bottom;
9. div剩余高度自动填充：  
    1. position:absolute 
        ```
        #nav {
            background-color: #85d989;
            width: 100%;
            height: 50px;
        }
        #content {
            background-color: #cc85d9;
            width: 100%;
            position: absolute;
            top: 50px;
            bottom: 0px;
            left: 0px;
        }
        ```  
    2. 也可利用CSS的calc方法实现

        ```
        height: calc(100% - 3.4986rem);
        ```
10. CSS超出宽度的文本用'...'

    ```
    <!---- 正常 >
    .div {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis; //裁剪文本 用...
        white-space: nowrap; //不换行
    }
    <!---- 表格 >
    table{
        
    　　table-layout: fixed;
    
    }
    td{
    
    　　white-space: nowrap;
    　　overflow: hidden;
    　　text-overflow: ellipsis;
    
    }
    ```
11. CSS 设置table下tbody滚动条
    ```
    table tbody {
    
        display:block;
    
        height:195px;
    
        overflow-y:scroll;
    
    }
    
    table thead, tbody tr {
    
        display:table;
    
        width:100%;
    
        table-layout:fixed;
    
    }
    ```