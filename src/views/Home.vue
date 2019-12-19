<template>
    <div class="column is-10">
        <div class="columns">
            <div class="column is-4 messages hero is-fullheight">
                <div class="action-buttons">
                    <div class="control is-grouped"><a class="button is-small"><i
                            class="fas fa-chevron-down"></i></a> <a
                            class="button is-small"><i class="fas fa-refresh"></i></a></div>
                    <div class="control is-grouped"><a class="button is-small"><i class="fas fa-inbox"></i></a>
                        <a
                                class="button is-small"><i class="fas fa-exclamation-circle"></i></a> <a
                                class="button is-small"><i class="fas fa-trash"></i></a></div>
                    <div class="control is-grouped"><a class="button is-small"><i class="fas fa-folder"></i></a>
                        <a
                                class="button is-small"><i class="fas fa-tag"></i></a></div>
                    <div class="control is-grouped pg">
                        <div class="title">1-10 of 100</div>
                        <a class="button is-link"><i class="fas fa-chevron-left"></i></a> <a
                            class="button is-link"><i
                            class="fas fa-chevron-right"></i></a></div>
                </div>
                <div class="inbox-messages">
                    <div data-preview- class="card">
                        <div class="card-content">
                            <div class="msg-header"><span
                                    class="msg-from"><small>From: Ms. Jaclyn Murazik</small></span> <span
                                    class="msg-timestamp"></span> <span class="msg-attachment"><i
                                    class="fas fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong>Alias voluptatibus totam reprehenderit s</strong></span>
                            </div>
                            <div class="msg-snippet"><p>Omnis saepe et dicta saepe id consequatur
                                iusto.</p></div>
                        </div>
                    </div>
                    <div data-preview- class="card active">
                        <div class="card-content">
                            <div class="msg-header"><span class="msg-from"><small>From: Josephine Crooks</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fas fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong>Voluptatem veritatis ut excepturi minima</strong></span>
                            </div>
                            <div class="msg-snippet"><p>Sit non voluptates sit minima et quasi
                                saepe.
                                Voluptatibus corporis a quam.</p></div>
                        </div>
                    </div>
                    <div data-preview- class="card">
                        <div class="card-content">
                            <div class="msg-header"><span
                                    class="msg-from"><small>From: Jalen DuBuque</small></span>
                                <span class="msg-timestamp"></span> <span class="msg-attachment"><i
                                        class="fas fa-paperclip"></i></span></div>
                            <div class="msg-subject"><span class="msg-subject"><strong>Velit quisquam omnis quaerat dignissimos</strong></span>
                            </div>
                            <div class="msg-snippet"><p>Ut aut est rem culpa tenetur at aut
                                mollitia.
                                Explicabo explicabo voluptas illum.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-6 message is-fullheight">
                <div class="action-buttons">
                    <div class="control is-grouped"><a class="button is-small"><i class="fas fa-inbox"></i></a>
                        <a
                                class="button is-small"><i class="fas fa-exclamation-circle"></i></a> <a
                                class="button is-small"><i class="fas fa-trash"></i></a></div>
                    <div class="control is-grouped"><a class="button is-small"><i
                            class="fas fa-exclamation-circle"></i></a>
                        <a class="button is-small"><i class="fas fa-trash"></i></a></div>
                    <div class="control is-grouped"><a class="button is-small"><i class="fas fa-folder"></i></a>
                        <a
                                class="button is-small"><i class="fas fa-tag"></i></a></div>
                </div>
                <div class="box message-preview">
                    <div class="top">
                        <div class="avatar"><img src="https://placehold.it/128x128"></div>
                        <div class="address">
                            <div class="name">Josephine Crooks</div>
                            <div class="email">Regan_Kutch16@gmail.com</div>
                        </div>
                        <hr>
                        <div class="content"><p>Sit non voluptates sit minima et quasi saepe.
                            Voluptatibus corporis a quam.</p><br></div>
                    </div>
                </div>
            </div>

        </div>
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
    html, body
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif
        font-size: 14px
        line-height: 1.5
        height: 100%
        background-color: #fff

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

        .aside
            display: block
            background-color: #F9F9F9
            border-right: 1px solid #DEDEDE

        .messages
            display: block
            background-color: #fff
            border-right: 1px solid #DEDEDE
            padding: 40px 20px

        .message
            display: block
            background-color: #fff
            padding: 40px 20px

        .aside
            .compose
                height: 95px
                margin: 0 -10px
                padding: 25px 30px

                .button
                    color: #F6F7F7

                    .compose
                        font-size: 14px
                        font-weight: 700

            .main
                padding: 40px
                color: #6F7B7E

            .title
                color: #6F7B7E
                font-size: 12px
                font-weight: bold
                text-transform: uppercase

            .main
                .item
                    display: block
                    padding: 10px 0
                    color: #6F7B7E

                    &.active
                        background-color: #F1F1F1
                        margin: 0 -50px
                        padding-left: 50px

                    &:active, &:hover
                        background-color: #F2F2F2
                        margin: 0 -50px
                        padding-left: 50px

                .icon
                    font-size: 19px
                    padding-right: 30px
                    color: #A0A0A0

                .name
                    font-size: 15px
                    color: #5D5D5D
                    font-weight: 500

        .messages .action-buttons
            padding: 0
            margin-top: -20px

        .message .action-buttons
            padding: 0
            margin-top: -5px

        .action-buttons .control.is-grouped
            display: inline-block
            margin-right: 30px

            &:last-child
                margin-right: 0

            .button
                &:first-child
                    border-radius: 5px 0 0 5px

                &:last-child
                    border-radius: 0 5px 5px 0

                margin-right: -5px
                border-radius: 0

        .pg
            display: inline-block
            top: 10px

        .action-buttons .pg
            .title
                display: block
                margin-top: 0
                padding-top: 0
                margin-bottom: 3px
                font-size: 12px
                color: #AAAAA

            a
                font-size: 12px
                color: #AAAAAA
                text-decoration: none

        .is-grouped .button
            background-image: linear-gradient(#F8F8F8, #F1F1F1)

            .fa
                font-size: 15px
                color: #AAAAAA

        .inbox-messages, .message-preview
            margin-top: 60px

        .inbox-messages
            .card
                width: 100%

            strong
                color: #5D5D5D

            .msg-check
                padding: 0 20px

            .msg-subject
                padding: 10px 0
                color: #5D5D5D

            .msg-attachment
                float: right

            .msg-snippet
                padding: 5px 20px 0px 5px

            .msg-subject .fa
                font-size: 14px
                padding: 3px 0

            .msg-timestamp
                float: right
                padding: 0 20px
                color: #5D5D5D

        .message-preview
            .avatar
                display: inline-block

            .top .address
                display: inline-block
                padding: 0 20px

        .avatar img
            width: 40px
            border-radius: 50px
            border: 2px solid #999
            padding: 2px

        .address
            .name
                font-size: 16px
                font-weight: bold

            .email
                font-weight: bold
                color: #B6C7D1

        .card.active
            background-color: #F5F5F5
</style>
