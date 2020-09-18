<template>
    <div class="wrapper">
    <div class="content">
        <div class="clearfix ">
            <div class="article col-md-8">
                <div class="isay">
                    <!-- 图标区 -->
                    <ul class="isay-links">
                        <li style="margin-left:-40px"><img src="@/assets/images/home/icon1.png"><a href="#">说句话</a></li>
                        <li><img src="@/assets/images/home/icon2.png"><a href="#">发照片</a></li>
                        <li><img src="@/assets/images/home/icon3.png"><a href="#">推荐网页</a></li>
                        <li><img src="@/assets/images/home/icon4.png"><a href="#" title="添加日记">写日记</a></li>
                    </ul>
                    <!-- 输入框区 -->
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="分享生活点滴">
                        <span id="scan" class="md-center-focus-weak fa-lg input-icon-md" style="display: inline;">
                            <img src="@/assets/images/home/icon5.png" style="width: 24px;height: 20px;margin-right: 5px;">
                            <img src="@/assets/images/home/icon6.png" style="width: 20px;height: 22px;">
                        </span>
                    </div>
                    <!-- 评论区 -->
                    <div class="comment">
                        <div class="comment-img">
                            <img src="@/assets/images/home/bean-time3.jpg" alt="">
                        </div>
                        <div class="mes">
                            <p><span><a style="color:#555;font-weight:bolder">fefuir</a></span>说:</p>
                            <p class="time">周二</p>
                            <p><span>3分钟前</span>
                                <span><a>回应</a></span>
                                <span><a>转发</a></span>
                                <span><a>删除</a></span>
                            </p>
                        </div>
                    </div>
                    <!-- 页码区 -->
                    <div class="page">
                        <span class="prev">
                            &lt;前页
                        </span>
                        <span class="thispage" style="margin-right:7px">1</span>
                        <a class="ye" href="?p=2">2</a>
                        <a class="ye" href="?p=3">3</a>
                        <a class="ye" href="?p=4">4</a>
                        <a class="ye" href="?p=5">5</a>
                        <a class="ye" href="?p=6">6</a>
                        <a class="ye" href="?p=7">7</a>
                        <a class="ye" href="?p=8">8</a>
                        <a class="ye" href="?p=9">9</a>
                        <span class="break" style="margin-right:20px">...</span>
                        <span class="next">
                            <link rel="next" href="?p=2">
                            <a href="?p=2">后页&gt;</a>
                        </span>
                    </div>
                </div>
            </div>
            <!-- 侧边栏 -->
            <div class="aside col-md-4 pull-right">
                <!-- 豆瓣正在发生 -->
                <div class="notify-mod">
                    <h2>
                        豆瓣正在发生
                        &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                    </h2>
                    <ul>
                        <li>
                            <a target="_blank" href="#" onclick="moreurl(this, {category:'sns', type:'side_entry'})">豆瓣读书会｜探讨现代小说的可能性</a>
                        </li>
                        <li>
                            <a target="_blank" href="#" onclick="moreurl(this, {category:'sns', type:'side_entry'})">豆瓣豆品｜豆瓣读书书签</a>
                        </li>
                    </ul>
                </div>
                <!-- 豆瓣时间 -->
                <div class="bean-time">
                    <h2>
                        豆瓣时间
                        &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        <span class="pl">&nbsp;(
                            <a href="#" target="_blank" style="font-size: 13px;">查看全部</a>
                            ) </span>
                    </h2>
                    <ul class="time-list">
                        <li class="left">

                            <a href="#" target="_blank">
                                <img src="@/assets/images/home/bean-time1.jpg" alt="用金钱丈量人生可能——32堂简七极简理财课">
                            </a>
                            <a class="title" href="#" target="_blank">用金钱丈量人生可能——32堂简七极简理财课</a>
                            <p class="type">音频专栏</p>
                        </li>
                        <li class="right">

                            <a href="#" target="_blank">
                                <img src="@/assets/images/home/bean-time2.jpg" alt="苗炜·文学体验30讲——陪你度过这时代的晚上">
                            </a>
                            <a class="title" href="#">苗炜·文学体验30讲——陪你度过这时代的晚上</a>
                            <p class="type">音频专栏</p>
                        </li>
                    </ul>
                </div>
                <!-- 豆瓣话题 -->
                <div class="mod">

                    <h2>
                        热门话题
                        &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        <span class="pl">&nbsp;(

                            <a href="#" target="_self" style="font-size: 13px;">去话题广场</a>
                            ) </span>
                    </h2>

                    <ul>
                        <li class="topics">
                            <a href="#" class="name">秋天开始的瞬间</a>

                            <span class="look">1706.5万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">纪念海蒂</a>

                            <span class="look">2.0万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">文学圣地巡礼</a>

                            <span class="look">157.8万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">小朋友语录</a>

                            <span class="look">8.5万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">国漫中印象深刻的文字设计</a>

                            <span class="look">3244次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">拍一段以假乱真的倒放视频</a>

                            <span class="look">4.7万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">在美术馆工作的日常</a>

                            <span class="look">4937次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">图书馆借阅历史</a>

                            <span class="look">8930次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#">&gt; 我被邀请参与的话题(0)</a>
                        </li>
                        <li class="topics">
                            <a href="#">+ 发起新话题</a>
                        </li>
                    </ul>
                </div>
                <!-- 书签 -->
                <div class="book">
                    <a href="#" target="_blank">
                        <img src="@/assets/images/home/bean-time3.jpg" alt="">
                    </a>
                    <div class="director">
                        <p class="title">
                            <a href="#" target="_blank">鬼才导演大卫·林奇首部自传，附送林奇手写体贴纸</a>
                        </p>
                        <p class="author">
                            豆瓣书店
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
    @import "../assets/css/home.css";
</style>
 