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
        @media (max-width: 1440px) {
            width: 75%;
        }
        @media (max-width: 960px) {
            width: 90%;
        }
        @media (max-width: 768px) {
            height: unset;
            padding: 0.5rem 0;
        }
        div {
            display: flex;
            flex: 1 0;
            align-items: center;
            @media (max-width: 768px) {
                flex-basis: 100% !important;
                justify-content: center !important;
            }
            &.obj-navbar-start {
                flex-basis: 25%;
                .obj-navbar-button {
                    display: none;
                    cursor: pointer;
                }
                .obj-navbar-brand {
                    .obj-navbar-logo {
                        width: 64px;
                        vertical-align: middle;
                        border-radius: 4px;
                    }
                }
                @media (max-width: 768px) {
                    display: flex;
                    flex-flow: row wrap;
                    span {
                        display: flex;
                        flex: 1 0 calc(100% / 3);
                        align-items: center;
                        &.obj-navbar-button {
                            display: flex;
                            font-size: 2rem;
                            justify-content: flex-end;
                            margin: 0 2rem 0 0;
                        }
                        &.obj-navbar-brand {
                            .obj-navbar-logo {
                                display: flex;
                                justify-content: flex-start;
                                margin: 0 0 0 2rem;
                            }
                        }
                    }
                }
            }
            &.obj-navbar-end {
                flex-basis: 75%;
                justify-content: flex-end;
                @media (max-width: 768px) {
                    margin: 1rem 0 0;
                    display: none;
                }
                &.obj-navbar-opened {
                    display: flex;
                }
                .obj-navbar-menu {
                    display: flex;
                    flex-flow: row wrap;
                    .obj-navbar-item {
                        display: flex;
                        flex: 1 0;
                        align-items: center;
                        justify-content: center;
                        height: 76px;
                        padding: 0 1.5rem;
                        width: 150px;
                        position: relative;
                        cursor: pointer;

                        @media (max-width: 768px) {
                            flex-basis: 100% !important;
                            justify-content: center !important;
                            margin: 1rem 0;
                            padding: 0;
                            height: auto;
                        }

                        .obj-navbar-link {
                            font-family: 'Montserrat', sans-serif;
                            font-weight: 300;
                            color: #333333;
                            text-transform: uppercase;
                            text-decoration: none;
                            font-size: 1.1rem;
                            transform: color 0.1s ease;
                        }

                        &.obj-navbar-button {
                            align-items: center;
                            height: unset !important;
                            z-index: 1;
                            &::after {
                                content: '';
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                background-color: #e32f12;
                                z-index: -1;
                            }
                            @media (min-width: 768px) {
                                &:hover {
                                    .obj-navbar-link {
                                        color: white;
                                    }
                                }
                            }
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

                        @media (min-width: 768px) {
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
}
</style>
<template>
    <div class="obj-navbar">
        <div class="obj-navbar-container">
            <div class="obj-navbar-start">
                <span class="obj-navbar-brand">
                    <img src="../assets/logo.png" alt="" class="obj-navbar-logo">
                </span>
                <span class="obj-navbar-button">
                    <i class="fas fa-bars"></i>
                </span>
            </div>
            <div class="obj-navbar-end">
                <ul class="obj-navbar-menu">
                    <li class="obj-navbar-item obj-navbar-button">
                        <a href="" class="obj-navbar-link">
                            get started
                        </a>
                    </li>
                    <li class="obj-navbar-item">
                        <a href="" class="obj-navbar-link">
                            home
                        </a>
                    </li>
                    <li class="obj-navbar-item">
                        <a href="" class="obj-navbar-link">
                            documentation
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
