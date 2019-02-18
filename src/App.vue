<template>
  <div id="app">
    
    <div class="bg-image">

      <ul class="navigation">
        <li class="navigation-link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navigation-link">
          <router-link to="/search_ip">Search IP</router-link>
        </li>
      </ul>

      <router-view class="main"/>

    </div>

  </div>
</template>
