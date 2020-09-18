<template>
    <div id="app">
        <div id="db-nav-sns" class="nav">
        <div class="nav-wrap">
            <div class="nav-primary">

                <div class="nav-logo">
                    <a href="https://www.douban.com">豆瓣社区</a>
                </div>

                <div class="nav-search">
                    <form action="https://www.douban.com/search" method="get">
                        <fieldset>
                            <legend>搜索：</legend>
                            <label for="inp-query">搜索你感兴趣的内容和人...</label>
                            <div class="inp">
                                <input type="hidden" name="source" value="suggest">
                                <input id="inp-query" name="q" size="22" maxlength="60" autocomplete="off" value="">
                            </div>
                            <div class="inp-btn"><input type="submit" value="搜索"></div>
                        </fieldset>
                    </form>
                </div>

                <div class="nav-items">
                    <ul>
                        <li>
                            <router-link to="/" exact>首页</router-link>
                        </li>
                        <li>
                            <router-link to="/mine">我的豆瓣</router-link>
                        </li>
                        <li>
                            <router-link to="/explore">浏览发现</router-link>
                        </li>
                        <li class="new">
                            <router-link to="/gallery">话题广场</router-link>
                            <img src="https://img3.doubanio.com/f/shire/e49eca1517424a941871a2667a8957fd6c72d632/pics/new_menu.gif" alt="new" style="position: absolute; top: -7px; right: -13px;" />
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>

</style>
 