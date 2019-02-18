<script src='./js/search.js'></script>

<template>
    <div id="search-ip">
        <div>
            <p v-text="ip" class="ip-text"></p>

            <div class="btn-area">
                <input @click="getIp" 
                    class="btn"
                    type="button" 
                    value="IPを取得する"
                >
            </div>
            
        </div>
    </div>
</template>
