<style lang="scss" scoped>
.obj-navbar {
    background-color: white;
    .obj-navbar-container {
        height: 76px;
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
                justify-content: flex-end;
                .obj-navbar-menu {
                    display: flex;
                    flex-flow: row wrap;
                    .obj-navbar-item {
                        display: flex;
                        flex: 1 0;
                        align-items: center;
                        justify-content: center;
                        height: 76px;
                        padding: 0 3.5rem;
                        position: relative;
                        cursor: pointer;

                        .obj-navbar-link {
                            font-family: 'Montserrat', sans-serif;
                            font-weight: 300;
                            color: #333333;
                            text-transform: uppercase;
                            text-decoration: none;
                            font-size: 1.1rem;
                            transform: color 0.1s ease;
                        }

                        &::after {
                            content: '';
                            position: absolute;
                            left: 50%;
                            transform: translateX(-50%);
                            bottom: 0;
                            width: 100%;
                            height: 1px;
                            opacity: 0;
                            transition: opacity 0.1s ease;
                            background-color: #e32f12;
                        }

                        &:hover {
                            .obj-navbar-link {
                                color: #e32f12;
                            }
                            &::after {
                                opacity: 1;
                            }
                        }
                    }
                }
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
