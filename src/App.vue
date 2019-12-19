<template>
  <div id="app">
    <nav class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item is-size-4"
            @click="$router.push({name: 'inbox'})"
          >
            ExisMail
          </a>

          <div
            class="navbar-burger burger"
            data-target="navMenu"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Account
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Dashboard
              </a>
              <a class="navbar-item">
                Profile
              </a>
              <a class="navbar-item">
                Settings
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns main">
      <!--  SIDEBAR          -->
      <aside class="column is-2 aside is-fullheight">
        <div>
          <div class="compose has-text-centered">
            <router-link
              class="button is-danger is-block is-bold"
              :to="{name: 'compose'}"
            >
              <span
                class="compose"
              >
                Compose
              </span>
            </router-link>
          </div>
          <div class="main">
            <router-link
              :to="{name: 'inbox'}"
              class="item active"
            >
              <span class="icon"><i
                class="fa fa-inbox"
              />
              </span>
              <span class="name">Inbox</span>
            </router-link>
            <a
              href="#"
              class="item"
            ><span class="icon">
               <i class="fa fa-star" />
             </span>
              <span class="name">Starred</span>
            </a>
            <a
              href="#"
              class="item"
            >
              <span class="icon"><i class="fa fa-envelope" /></span><span
                class="name"
              >Sent Mail</span>
            </a> <a
              href="#"
              class="item"
            ><span class="icon"><i
              class="fa fa-folder"
            />
            </span><span class="name">Folders</span></a>
          </div>
        </div>
      </aside>
      <!--        MAIN -->
      <router-view />
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            By Exis
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>


<style lang="sass" scoped>

    #app
        height: 100%
        min-height: 100vh
        display: flex
        flex-direction: column

        .main
            margin: 0 !important
            flex-grow: 1

        .nav
            &.is-dark
                background-color: #232B2D
                color: #F6F7F7

                .nav-item a, a.nav-item
                    color: #F6F7F7

                .nav-item a.button.is-default
                    color: #F6F7F7
                    background-color: transparent
                    border-width: 2px

            &.menu
                border-bottom: 1px solid #e1e1e1

                .nav-item
                    .icon-btn
                        border: 3px solid #B7C6C9
                        border-radius: 90px
                        padding: 5px 7px
                        color: #B7C6C9

                    &.is-active .icon-btn
                        color: #2EB398
                        border: 3px solid #2EB398

                    .icon-btn .fa
                        font-size: 20px
                        color: #B7C6C9

                    &.is-active .icon-btn .fa
                        color: #2EB398

</style>
<style lang="sass">

    html, body
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif
        font-size: 14px
        line-height: 1.5
        height: 100%
        background-color: #fff
</style>
