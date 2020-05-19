<style lang="scss" scoped>
.obj-navbar {
    background-color: white;
    padding: 0.5rem 0;
    .obj-navbar-container {
        position: relative;
        width: 50%;
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        div {
            display: flex;
            flex: 1 0;
            align-items: center;
            &.obj-navbar-start {
                flex-basis: 25%;
                .obj-navbar-brand {
                    .obj-navbar-logo {
                        width: 64px;
                        vertical-align: middle;
                        border-radius: 4px;
                    }
                }
            }
            &.obj-navbar-end {
                flex-basis: 75%;
            }
        }
    }
}
</style>
<template>
    <div class="obj-navbar">
        <div class="obj-navbar-container">
            <div class="obj-navbar-start">
                <span class="obj-navbar-brand">
                    <img src="../assets/logo.png" alt="" class="obj-navbar-logo">
                </span>
            </div>
            <div class="obj-navbar-end">
                <ul class="obj-navbar-menu">
                    <li class="obj-navbar-item">
                        <a href="" class="obj-navbar-link">
                            test
                        </a>
                    </li>
                    <li class="obj-navbar-item">
                        <a href="" class="obj-navbar-link">
                            test
                        </a>
                    </li>
                    <li class="obj-navbar-item">
                        <a href="" class="obj-navbar-link">
                            test
                        </a>
                    </li>
                    <li class="obj-navbar-item">
                        <a href="" class="obj-navbar-link">
                            test
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
