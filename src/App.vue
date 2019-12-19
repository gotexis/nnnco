<template>
    <div>
        <nav class="navbar has-shadow">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                        <img src="http://bulma.io/images/bulma-logo.png"
                             alt="Bulma: a modern CSS framework based on Flexbox">
                    </a>

                    <div class="navbar-burger burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
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

        <div>
            <div class="columns">
                <aside class="column is-2 aside is-fullheight">
                    <div>
                        <div class="compose has-text-centered"><a class="button is-danger is-block is-bold"><span
                                class="compose"
                                @click="$router.push({name: 'compose'})"
                        >Compose</span></a></div>
                        <div class="main"><a href="#" class="item active"><span class="icon"><i
                                class="fa fa-inbox"></i></span><span class="name">Inbox</span></a> <a href="#"
                                                                                                      class="item"><span
                                class="icon"><i class="fa fa-star"></i></span><span class="name">Starred</span></a> <a
                                href="#" class="item"><span class="icon"><i class="fa fa-envelope"></i></span><span
                                class="name">Sent Mail</span></a> <a href="#" class="item"><span class="icon"><i
                                class="fa fa-folder"></i></span><span class="name">Folders</span></a></div>
                    </div>
                </aside>
                <!--        MAIN -->

                <router-view/>
            </div>
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
      return {
        paginate: {
          pointer: {
            start: 1,
            end: 10
          },
          total: 100
        }
      }
    },
    methods: {
      showMessage: function () {
      }
    }
  }
</script>

<style lang="sass">
</style>
