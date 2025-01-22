'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">blog-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-3773ee66c50f688b54b5c1788725e955da2e958ba501cc261c452eb0381f8f6e3566d8b60fd20d147942966978cbb4430e55294ab6fb94875e8131b44982f81d"' : 'data-bs-target="#xs-controllers-links-module-AppModule-3773ee66c50f688b54b5c1788725e955da2e958ba501cc261c452eb0381f8f6e3566d8b60fd20d147942966978cbb4430e55294ab6fb94875e8131b44982f81d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3773ee66c50f688b54b5c1788725e955da2e958ba501cc261c452eb0381f8f6e3566d8b60fd20d147942966978cbb4430e55294ab6fb94875e8131b44982f81d"' :
                                            'id="xs-controllers-links-module-AppModule-3773ee66c50f688b54b5c1788725e955da2e958ba501cc261c452eb0381f8f6e3566d8b60fd20d147942966978cbb4430e55294ab6fb94875e8131b44982f81d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-3773ee66c50f688b54b5c1788725e955da2e958ba501cc261c452eb0381f8f6e3566d8b60fd20d147942966978cbb4430e55294ab6fb94875e8131b44982f81d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3773ee66c50f688b54b5c1788725e955da2e958ba501cc261c452eb0381f8f6e3566d8b60fd20d147942966978cbb4430e55294ab6fb94875e8131b44982f81d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3773ee66c50f688b54b5c1788725e955da2e958ba501cc261c452eb0381f8f6e3566d8b60fd20d147942966978cbb4430e55294ab6fb94875e8131b44982f81d"' :
                                        'id="xs-injectables-links-module-AppModule-3773ee66c50f688b54b5c1788725e955da2e958ba501cc261c452eb0381f8f6e3566d8b60fd20d147942966978cbb4430e55294ab6fb94875e8131b44982f81d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthtModule.html" data-type="entity-link" >AuthtModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthtModule-882c764b2b522859cad9c7506f6162f21ff014ef085b945bd3a834e0b0853a5e5c56aa8e34de906e97c975c9d3551398c0c1cfff4a1319979314b5dfaf744ba9"' : 'data-bs-target="#xs-controllers-links-module-AuthtModule-882c764b2b522859cad9c7506f6162f21ff014ef085b945bd3a834e0b0853a5e5c56aa8e34de906e97c975c9d3551398c0c1cfff4a1319979314b5dfaf744ba9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthtModule-882c764b2b522859cad9c7506f6162f21ff014ef085b945bd3a834e0b0853a5e5c56aa8e34de906e97c975c9d3551398c0c1cfff4a1319979314b5dfaf744ba9"' :
                                            'id="xs-controllers-links-module-AuthtModule-882c764b2b522859cad9c7506f6162f21ff014ef085b945bd3a834e0b0853a5e5c56aa8e34de906e97c975c9d3551398c0c1cfff4a1319979314b5dfaf744ba9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthtModule-882c764b2b522859cad9c7506f6162f21ff014ef085b945bd3a834e0b0853a5e5c56aa8e34de906e97c975c9d3551398c0c1cfff4a1319979314b5dfaf744ba9"' : 'data-bs-target="#xs-injectables-links-module-AuthtModule-882c764b2b522859cad9c7506f6162f21ff014ef085b945bd3a834e0b0853a5e5c56aa8e34de906e97c975c9d3551398c0c1cfff4a1319979314b5dfaf744ba9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthtModule-882c764b2b522859cad9c7506f6162f21ff014ef085b945bd3a834e0b0853a5e5c56aa8e34de906e97c975c9d3551398c0c1cfff4a1319979314b5dfaf744ba9"' :
                                        'id="xs-injectables-links-module-AuthtModule-882c764b2b522859cad9c7506f6162f21ff014ef085b945bd3a834e0b0853a5e5c56aa8e34de906e97c975c9d3551398c0c1cfff4a1319979314b5dfaf744ba9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-15ae5de2385f054de735ec2d33c38b4c1f8f6eaee37a2b515b2b08275982c01c08117351f3d9403d18da30edc27f7718beb01367f0ec2b5aea60a821c7df1d90"' : 'data-bs-target="#xs-controllers-links-module-PostModule-15ae5de2385f054de735ec2d33c38b4c1f8f6eaee37a2b515b2b08275982c01c08117351f3d9403d18da30edc27f7718beb01367f0ec2b5aea60a821c7df1d90"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-15ae5de2385f054de735ec2d33c38b4c1f8f6eaee37a2b515b2b08275982c01c08117351f3d9403d18da30edc27f7718beb01367f0ec2b5aea60a821c7df1d90"' :
                                            'id="xs-controllers-links-module-PostModule-15ae5de2385f054de735ec2d33c38b4c1f8f6eaee37a2b515b2b08275982c01c08117351f3d9403d18da30edc27f7718beb01367f0ec2b5aea60a821c7df1d90"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-15ae5de2385f054de735ec2d33c38b4c1f8f6eaee37a2b515b2b08275982c01c08117351f3d9403d18da30edc27f7718beb01367f0ec2b5aea60a821c7df1d90"' : 'data-bs-target="#xs-injectables-links-module-PostModule-15ae5de2385f054de735ec2d33c38b4c1f8f6eaee37a2b515b2b08275982c01c08117351f3d9403d18da30edc27f7718beb01367f0ec2b5aea60a821c7df1d90"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-15ae5de2385f054de735ec2d33c38b4c1f8f6eaee37a2b515b2b08275982c01c08117351f3d9403d18da30edc27f7718beb01367f0ec2b5aea60a821c7df1d90"' :
                                        'id="xs-injectables-links-module-PostModule-15ae5de2385f054de735ec2d33c38b4c1f8f6eaee37a2b515b2b08275982c01c08117351f3d9403d18da30edc27f7718beb01367f0ec2b5aea60a821c7df1d90"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-d2e0c9f13b23998644a0473dcb44853106c7d90a435efc580489763540c11a4778d66392b9da0533e980be2bc0435cd52bc8551a10cfa35650a167999a4e54af"' : 'data-bs-target="#xs-controllers-links-module-UserModule-d2e0c9f13b23998644a0473dcb44853106c7d90a435efc580489763540c11a4778d66392b9da0533e980be2bc0435cd52bc8551a10cfa35650a167999a4e54af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-d2e0c9f13b23998644a0473dcb44853106c7d90a435efc580489763540c11a4778d66392b9da0533e980be2bc0435cd52bc8551a10cfa35650a167999a4e54af"' :
                                            'id="xs-controllers-links-module-UserModule-d2e0c9f13b23998644a0473dcb44853106c7d90a435efc580489763540c11a4778d66392b9da0533e980be2bc0435cd52bc8551a10cfa35650a167999a4e54af"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-d2e0c9f13b23998644a0473dcb44853106c7d90a435efc580489763540c11a4778d66392b9da0533e980be2bc0435cd52bc8551a10cfa35650a167999a4e54af"' : 'data-bs-target="#xs-injectables-links-module-UserModule-d2e0c9f13b23998644a0473dcb44853106c7d90a435efc580489763540c11a4778d66392b9da0533e980be2bc0435cd52bc8551a10cfa35650a167999a4e54af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-d2e0c9f13b23998644a0473dcb44853106c7d90a435efc580489763540c11a4778d66392b9da0533e980be2bc0435cd52bc8551a10cfa35650a167999a4e54af"' :
                                        'id="xs-injectables-links-module-UserModule-d2e0c9f13b23998644a0473dcb44853106c7d90a435efc580489763540c11a4778d66392b9da0533e980be2bc0435cd52bc8551a10cfa35650a167999a4e54af"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMethodOptionsDto.html" data-type="entity-link" >CreatePostMethodOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsersDto.html" data-type="entity-link" >CreateUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamsDto.html" data-type="entity-link" >GetUsersParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamsDto-1.html" data-type="entity-link" >GetUsersParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostsDto.html" data-type="entity-link" >PatchPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUsersDto.html" data-type="entity-link" >PatchUsersDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});