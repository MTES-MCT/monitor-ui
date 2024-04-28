## [16.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v15.0.1...v16.0.0) (2024-04-28)


### ⚠ BREAKING CHANGES

* **entities:** `isEmailSubscriptionContact` & `isSmsSubscriptionContact` props are added to `ControlUnit.ControlUnitContact`.

### Features

* **entities:** add new ControlUnitContact props ([437eb37](https://github.com/MTES-MCT/monitor-ui/commit/437eb37ebd5c5dc531514dcc9bbdafebb87cd987))


### Styles

* **components:** specify solid border in Message ([78d2f40](https://github.com/MTES-MCT/monitor-ui/commit/78d2f4001cc67b77694ea8ae3d97167e091c5cd8))
* **elements:** specify solid border in IconButton ([f7deba3](https://github.com/MTES-MCT/monitor-ui/commit/f7deba3abae79bf9f0de6c289b1999fba93fd1d9))

## [15.0.1](https://github.com/MTES-MCT/monitor-ui/compare/v15.0.0...v15.0.1) (2024-04-28)


### Bug Fixes

* **components:** add missing default class name in Message ([462ebf3](https://github.com/MTES-MCT/monitor-ui/commit/462ebf3c16cf32f7de326e36b8d27d8eecb863ef))
* **components:** replace span box with div in Message ([d4e31e1](https://github.com/MTES-MCT/monitor-ui/commit/d4e31e10ca98a7a89e1c3e132d1386e954a2f651))

## [15.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v14.3.1...v15.0.0) (2024-04-28)


### ⚠ BREAKING CHANGES

* **components:** The default `Message.level` is now "INFO" instead of "WARNING".

### Features

* **components:** add Icon & iconColor props to Message ([e8d1520](https://github.com/MTES-MCT/monitor-ui/commit/e8d1520db170594c767300a28fe355b3d2002483))


### Bug Fixes

* **fields:** prevent textarea from being horizontally reduced ([76d3057](https://github.com/MTES-MCT/monitor-ui/commit/76d305748fa6afc09254efe3e77b66af4dd9ddbe))


### Code Refactoring

* **elements:** start cleaning & simplifying IconButton logic ([afffc00](https://github.com/MTES-MCT/monitor-ui/commit/afffc00a65218f9f8645de252ab476764baf0881))


### Buid System & Dependencies

* **dev-deps:** bunp storybook from 8.0.0-beta.4 to 8.0.9 ([b1b9aa1](https://github.com/MTES-MCT/monitor-ui/commit/b1b9aa113e4497c11ccdad057573747333d2632c))

## [14.3.1](https://github.com/MTES-MCT/monitor-ui/compare/v14.3.0...v14.3.1) (2024-04-22)


### Bug Fixes

* **component:** display hide text in red when level isError in banner component ([1e10ef2](https://github.com/MTES-MCT/monitor-ui/commit/1e10ef2ea7fd0b1e7d07ef616980306aee416099))

## [14.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v14.2.0...v14.3.0) (2024-04-19)


### Features

* **components:** add automatic closing ([759c131](https://github.com/MTES-MCT/monitor-ui/commit/759c13101f048ecd7745480d775c6953d2a31229))

## [14.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v14.1.0...v14.2.0) (2024-04-18)


### Features

* **icons:** add new icons ([887c14e](https://github.com/MTES-MCT/monitor-ui/commit/887c14ee4c8246131f21f89d9391d9c010a88d9d))

## [14.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v14.0.0...v14.1.0) (2024-04-17)


### Features

* **components:** introduce Banner component ([537b641](https://github.com/MTES-MCT/monitor-ui/commit/537b641eadbe28efcbd2e8376b91b896e8e9b873))
* **elements:** introduce LinkButton component ([c8c39e0](https://github.com/MTES-MCT/monitor-ui/commit/c8c39e0155cafed8ca2faad1413011408babf92a))


### Buid System & Dependencies

* **deps:** bump tar from 6.2.0 to 6.2.1 ([2cc4fee](https://github.com/MTES-MCT/monitor-ui/commit/2cc4fee18acbd3d11f1477f011b96fcf910b6bb1))
* **dev-deps:** bump vite from 5.1.4 to 5.1.7 in /e2e/release/sample ([76c1d53](https://github.com/MTES-MCT/monitor-ui/commit/76c1d537064f6ea01b00049d0001d2ef49774ab1))

## [14.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.10.0...v14.0.0) (2024-04-08)


### ⚠ BREAKING CHANGES

* **elements:** delete bullet and bulletColor props
* **icons:** delete Dot and DotFilled icons

### Features

* **colors:** add mayaBlue color ([319aea1](https://github.com/MTES-MCT/monitor-ui/commit/319aea159aaa18974ac348708d9febf92feb4011))
* **elements:** delete bullet and bulletColor props to Tag component and add withCircleColor ([3c81afe](https://github.com/MTES-MCT/monitor-ui/commit/3c81afe8904749839c3eab0e4ab82c14a226a267))
* **entities:** add RapportNav to MissionSourceEnum ([9b868fc](https://github.com/MTES-MCT/monitor-ui/commit/9b868fc88b5a0aad4690f557b3b054f7d5f11e05))
* **icons:** add AttentionFilledClockDashed, Circle and CircleFilled icons and delete Dot and DotFilled icons ([496f11a](https://github.com/MTES-MCT/monitor-ui/commit/496f11ab78f2bb3320aaf9755b61bc23a6563bb1))
* **symbols:** create Dot component ([fd6c0c3](https://github.com/MTES-MCT/monitor-ui/commit/fd6c0c3e4bbc2dec1901d4b59cd7d5e6e9377ee7))


### Bug Fixes

* **icons:** fix controlUnit and controlUnitFilled icons ([6edfc83](https://github.com/MTES-MCT/monitor-ui/commit/6edfc83ddfef7b2ce5a08b1c21743589f77996fb))


### Buid System & Dependencies

* **deps:** bump @babel/runtime from 7.22.15 to 7.24.4 ([43a0def](https://github.com/MTES-MCT/monitor-ui/commit/43a0defe621b6ab3e7771d75c1bfdee8ca8285be))
* **deps:** bump express from 4.18.2 to 4.19.2 ([acb4412](https://github.com/MTES-MCT/monitor-ui/commit/acb44120a29e7313b383ab64eacad1c4bfd1fb76))
* **dev-deps:** bump @tsconfig/vite-react in /e2e/release/sample ([5ee6ef7](https://github.com/MTES-MCT/monitor-ui/commit/5ee6ef73123ef2c4ddcd4827e3ff934215dd9e10))
* **dev-deps:** bump @types/node in /e2e/release/sample ([2f49b9f](https://github.com/MTES-MCT/monitor-ui/commit/2f49b9ffedd2064a8d8671e08c0f6f4becaefc32))
* **dev-deps:** bump @types/react from 18.2.37 to 18.2.74 ([5057fbf](https://github.com/MTES-MCT/monitor-ui/commit/5057fbf1b6c436f5e2db73c350d0eacdd68ef70e))
* **dev-deps:** bump @types/react-dom in /e2e/release/sample ([555e2cf](https://github.com/MTES-MCT/monitor-ui/commit/555e2cf15b446eb7bb43a49546b8b8ec14853a1c))
* **dev-deps:** bump cypress in /e2e/release/sample ([4d6445e](https://github.com/MTES-MCT/monitor-ui/commit/4d6445ef190aa1a22b013b5065df63c004e76492))
* **dev-deps:** bump jest and @types/jest ([b915184](https://github.com/MTES-MCT/monitor-ui/commit/b91518483233ab98690540baf24ef0eac187f945))
* **dev-deps:** bump prettier from 3.1.1 to 3.2.5 ([ccb5b90](https://github.com/MTES-MCT/monitor-ui/commit/ccb5b908a503af59b44497ac27abc6519762ab3b))
* **dev-deps:** bump rsuite in /e2e/release/sample ([c0f7606](https://github.com/MTES-MCT/monitor-ui/commit/c0f76061bed49037edbd3d9988b90e1e3b469a0f))
* **dev-deps:** bump vite from 5.1.4 to 5.1.7 ([71faafb](https://github.com/MTES-MCT/monitor-ui/commit/71faafbd4aaf3ea3b5b8436e4af71ab4810e1fc5))
* **dev-deps:** bump yup from 1.3.3 to 1.4.0 ([92c906d](https://github.com/MTES-MCT/monitor-ui/commit/92c906dc31b16ab2758d106d12ef15684e9eaaae))

## [13.10.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.9.0...v13.10.0) (2024-03-25)


### Features

* **icons:** introduce title props on icons for additional info on hover ([5849aa1](https://github.com/MTES-MCT/monitor-ui/commit/5849aa103ed6039e31b92b06ed4f0b70f86a43e7))
* **symbols:** rework ExclamationPoint to resize dynamically ([ce6a398](https://github.com/MTES-MCT/monitor-ui/commit/ce6a3981a2e5544cf630a7185bce4171a648140e))

## [13.9.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.8.0...v13.9.0) (2024-03-24)


### Features

* **cypress:** handle searchable MultiCascader in fill() command ([b943f93](https://github.com/MTES-MCT/monitor-ui/commit/b943f93466b491b5f8afe9cf934e43de55d43071))


### Bug Fixes

* **cypress:** clear CheckPicker search input in fill() command ([899842c](https://github.com/MTES-MCT/monitor-ui/commit/899842cf53195f9d624144a7368a530726adff8b))

## [13.8.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.7.4...v13.8.0) (2024-03-22)


### Features

* **utils:** add getSelectedTreeOptionFromTreeOptionValue() ([551079a](https://github.com/MTES-MCT/monitor-ui/commit/551079a1be73698784f7540476bfa44e1a9d32f2))
* **utils:** rename getSelectedTreeOptionFromTreeOptionValue() to getSelectedOptionFromOptionValueInTree() ([12b918e](https://github.com/MTES-MCT/monitor-ui/commit/12b918e653a56cbd845c9003e1690ebf32ce70ec))

## [13.7.4](https://github.com/MTES-MCT/monitor-ui/compare/v13.7.3...v13.7.4) (2024-03-21)


### Bug Fixes

* **e2e:** fix e2e MultiRadio test with boolean ([5344063](https://github.com/MTES-MCT/monitor-ui/commit/5344063517f3740fea062600522b6cb76094533f))
* **fields:** fix MultiRadio with booleans ([cd25778](https://github.com/MTES-MCT/monitor-ui/commit/cd2577800e9d9a0fcc49034f522bb1998524ad66))

## [13.7.3](https://github.com/MTES-MCT/monitor-ui/compare/v13.7.2...v13.7.3) (2024-03-20)


### Bug Fixes

* **cypress:** handle searchable MultiSelect in fill() command ([9a66bb1](https://github.com/MTES-MCT/monitor-ui/commit/9a66bb19b07b482dbab49bdaf7c96d359e7aa1e6))
* **fields:** the CoordinatesInput now displays the * when isRequired ([e38c209](https://github.com/MTES-MCT/monitor-ui/commit/e38c209f06a221b14a1a9917fe3925048fbea405))

## [13.7.2](https://github.com/MTES-MCT/monitor-ui/compare/v13.7.1...v13.7.2) (2024-03-18)


### Bug Fixes

* **components:** update Dialog padding ([2cacb4e](https://github.com/MTES-MCT/monitor-ui/commit/2cacb4ed492415971ac61a05f8903b9ad1edc3f2))

## [13.7.1](https://github.com/MTES-MCT/monitor-ui/compare/v13.7.0...v13.7.1) (2024-03-15)


### Bug Fixes

* **tables:** stop click event propagation in RowCheckbox ([7e218ec](https://github.com/MTES-MCT/monitor-ui/commit/7e218eccc1d84c51e5c342c5eb4bfef20744e9f0))
* **utils:** remove conditional types from getFilteredCollection() ([472e11f](https://github.com/MTES-MCT/monitor-ui/commit/472e11fe02b65ae4295a8b0a2322ff14af370365))

## [13.7.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.6.0...v13.7.0) (2024-03-15)


### Features

* **utils:** add getFilteredCollection() ([47eb5ff](https://github.com/MTES-MCT/monitor-ui/commit/47eb5ff8dc75a0b5c3dfc8ea081a21a0aa16840f))

## [13.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.5.0...v13.6.0) (2024-03-14)


### Features

* **utils:** include undefined value in getMaybeBooleanFromRichBoolean() ([31c7f5f](https://github.com/MTES-MCT/monitor-ui/commit/31c7f5f8f7949a96536203e300e530471169489b))


### Buid System & Dependencies

* **deps:** bump follow-redirects from 1.15.5 to 1.15.6 ([3b8002c](https://github.com/MTES-MCT/monitor-ui/commit/3b8002c29ddd0b5e9108440b40cfd1875eae4d9c))

## [13.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.4.0...v13.5.0) (2024-03-14)


### Features

* **utils:** add getMaybeBooleanFromRichBoolean() ([f4d7b59](https://github.com/MTES-MCT/monitor-ui/commit/f4d7b5982ab78c4fc7f762f0b276173af95b0a95))

## [13.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.3.2...v13.4.0) (2024-03-14)


### Features

* **icons:** add ControlUnitFilled icon and delete useless icons ([3fe4d30](https://github.com/MTES-MCT/monitor-ui/commit/3fe4d305a96dc34a7bf834ad3067f80f10df6fdf))


### Bug Fixes

* **fields:** fix style ([f785c43](https://github.com/MTES-MCT/monitor-ui/commit/f785c43b6e7d05e2d120b2837b9ae32e8aea11f7))

## [13.3.2](https://github.com/MTES-MCT/monitor-ui/compare/v13.3.1...v13.3.2) (2024-03-13)


### Bug Fixes

* **components:** update some style and fix typo ([9a0d16a](https://github.com/MTES-MCT/monitor-ui/commit/9a0d16a42fcbf23b105f9e72cd542cb0a9d28792))
* **fields:** prevent Textarea resizing from exceeding 100% parent width ([5323f0c](https://github.com/MTES-MCT/monitor-ui/commit/5323f0c8d20d8a7668573adde5e6af5645ab9be3))

## [13.3.1](https://github.com/MTES-MCT/monitor-ui/compare/v13.3.0...v13.3.1) (2024-03-08)


### Bug Fixes

* **cypress:** fix function waitForLastRequestFunction ([7ad541d](https://github.com/MTES-MCT/monitor-ui/commit/7ad541d54f5d18966c97ecad5779a2668b75678f))

## [13.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.2.0...v13.3.0) (2024-03-08)


### Features

* **cypress:** add delay option to fill command ([592b941](https://github.com/MTES-MCT/monitor-ui/commit/592b941daebf6a5deb8d68c110adc3b3900bb71b))

## [13.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.1.0...v13.2.0) (2024-03-07)


### Features

* **utils:** delete "(UTC)"  from humanizePastDate function ([91507d1](https://github.com/MTES-MCT/monitor-ui/commit/91507d17426190f38fddba32c03c50937c0ba6f2))

## [13.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v13.0.0...v13.1.0) (2024-03-07)


### Features

* **fields:** add isRequired prop and update label color on error ([88b1bd1](https://github.com/MTES-MCT/monitor-ui/commit/88b1bd10c6c989bffab5125994775c5d0ca23139))


### Bug Fixes

* **components:** fix Dropdown border-radius ([77afbd1](https://github.com/MTES-MCT/monitor-ui/commit/77afbd15abc0cbc4297fdebb8079be80107f8775))

## [13.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v12.4.0...v13.0.0) (2024-03-01)


### ⚠ BREAKING CHANGES

* **github:** - `baseContainer` prop has been removed in `MultiCascader`.
- `baseContainer` prop has been removed in `MultiSelect`.
- `baseContainer` prop has been removed in `Search`.

### Buid System & Dependencies

* **tsconfig:** exclude coverage/ directory ([f5a42a8](https://github.com/MTES-MCT/monitor-ui/commit/f5a42a87195b4a9181b48e2bbb4f81dc3531178f))
* **tsconfig:** migrate to bundler module resolution & enable incremental compilation ([c677f77](https://github.com/MTES-MCT/monitor-ui/commit/c677f77cee788683a30681ed48659ab65fb09f9a))
* **vite:** set projects in viteTsconfigPaths to silence e2e release sample errors ([dfa7bfa](https://github.com/MTES-MCT/monitor-ui/commit/dfa7bfae8f7004ca45ff6a06bf9b61e7d8a214f3))
* **vite:** use ts extension instead of mts for config ([4eaaedc](https://github.com/MTES-MCT/monitor-ui/commit/4eaaedc923127dc5cf060bd383832361853598ab))


### Continuous Integration

* **github:** fix typo in E2E Test job ([26f4809](https://github.com/MTES-MCT/monitor-ui/commit/26f4809070878c7438ea7daaeb135de7cc0e89c3))

## [12.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v12.3.0...v12.4.0) (2024-03-01)


### Buid System & Dependencies

* **dev-deps:** bump @semantic-release/github from 9.0.4 to 9.2.6 ([4a92e0f](https://github.com/MTES-MCT/monitor-ui/commit/4a92e0f9ffd2870bef0551e3286086d9416892b7))
* **dev-deps:** bump @sentry/react in /e2e/release/sample ([0aa779b](https://github.com/MTES-MCT/monitor-ui/commit/0aa779b7cf001e6041c04674ba8c5aadccfc13ab))
* **dev-deps:** bump @swc/core from 1.4.1 to 1.4.2 ([6a5334b](https://github.com/MTES-MCT/monitor-ui/commit/6a5334b9d0ea83ff80d2b3795be5547d2acd8ab4))
* **dev-deps:** bump @types/node in /e2e/release/sample ([9c1d210](https://github.com/MTES-MCT/monitor-ui/commit/9c1d2106d810dd2bb7983e438d6351f248d6f04a))
* **dev-deps:** bump @types/react in /e2e/release/sample ([d7aa8c6](https://github.com/MTES-MCT/monitor-ui/commit/d7aa8c6bd36c754530e5ab391a3a0ceca3294121))
* **dev-deps:** bump date-fns from 2.30.0 to 3.3.1 ([eba1fae](https://github.com/MTES-MCT/monitor-ui/commit/eba1fae77336f59ed2afe65f599dcc42f5d5a735))
* **dev-deps:** bump eslint-plugin-prettier from 5.1.2 to 5.1.3 ([e07c9ff](https://github.com/MTES-MCT/monitor-ui/commit/e07c9ff21112665014d47c2a6f7301f89489929d))
* **dev-deps:** bump rsuite in /e2e/release/sample ([0c361fa](https://github.com/MTES-MCT/monitor-ui/commit/0c361fa39d968c02537a26702cd8fc49d9ea59e3))
* **dev-deps:** bump vite from 5.0.12 to 5.1.4 in /e2e/release/sample ([ddcbb71](https://github.com/MTES-MCT/monitor-ui/commit/ddcbb71f3efc1d665cdcf7f42f71757501e14473))
* **tsconfig:** remove direct index paths which break release build ([e65c08f](https://github.com/MTES-MCT/monitor-ui/commit/e65c08f08ccf9b07b6086ad160888aac0d262105))


### Features

* **field:** add size prop to Search ([d395e49](https://github.com/MTES-MCT/monitor-ui/commit/d395e499371ea20c6155b218a35f30cdcff6a6d1))
* **fields:** add isRightAligned prop to DatePicker ([d80ce28](https://github.com/MTES-MCT/monitor-ui/commit/d80ce28c1766f55b6029656713520181d01da6e7))
* **fields:** add popupWidth prop to pickers ([aa8b550](https://github.com/MTES-MCT/monitor-ui/commit/aa8b5501c1232d796371fbc93a21e3f9b505d832))
* **utils:** add getSelectedOptionFromOptionValue() ([6a80172](https://github.com/MTES-MCT/monitor-ui/commit/6a801720423f6509954d1a174f26eebd858460ec))


### Code Refactoring

* remove ramda ([e3453a2](https://github.com/MTES-MCT/monitor-ui/commit/e3453a2958bf2d62461fb2d71fa1a5c74f4ebe8e))

## [12.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v12.2.1...v12.3.0) (2024-02-29)


### Features

* **cypress:** add force option to fill() command ([538615f](https://github.com/MTES-MCT/monitor-ui/commit/538615f64fbdbfce3cb4b71eabb4bea5c9c9b919))


### Bug Fixes

* **cypress:** type fill() command as non-chainable ([d4b5c35](https://github.com/MTES-MCT/monitor-ui/commit/d4b5c3568177b44f591462e2ecbf3ba9a39fdb64))

## [12.2.1](https://github.com/MTES-MCT/monitor-ui/compare/v12.2.0...v12.2.1) (2024-02-29)


### Bug Fixes

* **cypress:** widen input type for fill() on TextInput ([e7f9984](https://github.com/MTES-MCT/monitor-ui/commit/e7f998474148d970cc81b9dee23740a991dc1d5b))

## [12.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v12.1.3...v12.2.0) (2024-02-29)


### Features

* **cypress:** add forceCheck() command ([ab382b7](https://github.com/MTES-MCT/monitor-ui/commit/ab382b76e6569e80f305c3abffe9133a2d5cac0c))
* **cypress:** add forceClear() command ([ebd5ad8](https://github.com/MTES-MCT/monitor-ui/commit/ebd5ad86249aaf333ce088b06561b5827bd8a156))
* **cypress:** add forceType() command ([c6017a1](https://github.com/MTES-MCT/monitor-ui/commit/c6017a1b3c0f480b5595563102ff1778d1961841))
* **cypress:** add forceUncheck() command ([d75171a](https://github.com/MTES-MCT/monitor-ui/commit/d75171ab811bd7cbebd61efa617b4d67c2ea874b))


### Bug Fixes

* **cypress:** force all actions in fill() subcommands ([359b752](https://github.com/MTES-MCT/monitor-ui/commit/359b752fbc4186ebfb9e9d2d1a6ba7b8114a6249))
* **cypress:** upse native uncheck for fill() on MultiCheckbox ([f9e2ef9](https://github.com/MTES-MCT/monitor-ui/commit/f9e2ef9a7b80834d28034f4f3303590ae1ee8e9d))

## [12.1.3](https://github.com/MTES-MCT/monitor-ui/compare/v12.1.2...v12.1.3) (2024-02-29)


### Buid System & Dependencies

* **dev-deps:** bump @commitlint/config-conventional ([45fcba7](https://github.com/MTES-MCT/monitor-ui/commit/45fcba7f342dc70c4e29b3cd3d3cb2b0b02cc69a))


### Documentation

* **readme:** add Cypress badge ([f580fb9](https://github.com/MTES-MCT/monitor-ui/commit/f580fb93db6c38d38a6260a22697780ab22c5757))
* **readme:** add documentation badge ([5057133](https://github.com/MTES-MCT/monitor-ui/commit/5057133e7431edcbdd182ff1bbc6dc82aef7a991))


### Bug Fixes

* **cypress:** fix forceClick() ability to be properly chained with other commands ([ffc733c](https://github.com/MTES-MCT/monitor-ui/commit/ffc733c22999f47a65408bb45a6728df26828839))
* **cypress:** use forced click instead of click in fill() on MultiSelect ([b14f63a](https://github.com/MTES-MCT/monitor-ui/commit/b14f63a890ce355ed66d3b64e22f65d2936c40cb))

## [12.1.2](https://github.com/MTES-MCT/monitor-ui/compare/v12.1.1...v12.1.2) (2024-02-28)


### Bug Fixes

* **cypress:** target right input during fill() search for MultiSelect ([1692c0b](https://github.com/MTES-MCT/monitor-ui/commit/1692c0bce324eeb172c58d77e0bb268d918226c8))

## [12.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v12.1.0...v12.1.1) (2024-02-28)


### Bug Fixes

* **cypress:** fix inner findElementParentBySelector() util ([a2dc379](https://github.com/MTES-MCT/monitor-ui/commit/a2dc37935989c54f4151d5fc47fde6956707cdf0))
* **cypress:** handle nested fieldsets in fill() command ([b5cb9f2](https://github.com/MTES-MCT/monitor-ui/commit/b5cb9f2ae1dff27e9d17d76022299ba36e9b2f19))


### Buid System & Dependencies

* **dev-deps:** bump @commitlint/cli from 18.4.3 to 19.0.1 ([65e3b1c](https://github.com/MTES-MCT/monitor-ui/commit/65e3b1cbf6ff50ab61683e649638ca982074e993))
* **dev-deps:** bump @storybook/addon-storysource ([e5de861](https://github.com/MTES-MCT/monitor-ui/commit/e5de861a5710c119a68d17ca4c1e077893f79aef))
* **dev-deps:** bump @types/node in /e2e/release/sample ([e2f88b0](https://github.com/MTES-MCT/monitor-ui/commit/e2f88b0db3e73c9336c232e9e09f7b8cb614c729))
* **dev-deps:** bump @types/react in /e2e/release/sample ([214db7a](https://github.com/MTES-MCT/monitor-ui/commit/214db7a3a0bcac96e329808fa46d297954e35ec9))
* **dev-deps:** bump @types/react-dom in /e2e/release/sample ([8e74dd4](https://github.com/MTES-MCT/monitor-ui/commit/8e74dd4bf76753db7885244e7ebd2397faf186a1))
* **dev-deps:** bump cypress in /e2e/release/sample ([16e73ad](https://github.com/MTES-MCT/monitor-ui/commit/16e73add39ef203ea48ed782414d4f13748fa35b))
* **dev-deps:** bump prettier in /e2e/release/sample ([34d3b00](https://github.com/MTES-MCT/monitor-ui/commit/34d3b005e4a263fe6251a936282ab359c2cbb7ce))
* **dev-deps:** bump rollup-plugin-import-css from 3.4.0 to 3.5.0 ([69351ea](https://github.com/MTES-MCT/monitor-ui/commit/69351eab749ac534f267abd0e3fe2bde16bb0b54))

## [12.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v12.0.3...v12.1.0) (2024-02-27)


### Features

* **cypress:** add logs in fill() and all its subcommands ([f9b320f](https://github.com/MTES-MCT/monitor-ui/commit/f9b320fc335745bb562da34f00b98ef78bf5ef74))


### Bug Fixes

* **cypress:** replace picker popup closure check with a wait in fill() ([9b4108b](https://github.com/MTES-MCT/monitor-ui/commit/9b4108be9479fb25d99902ca451dc329192bdb18))


### Buid System & Dependencies

* **vite:** disable CSS minification for storybook build ([c98d7c9](https://github.com/MTES-MCT/monitor-ui/commit/c98d7c99c053f4084bec5c044a8ff1050e2029aa))

## [12.0.3](https://github.com/MTES-MCT/monitor-ui/compare/v12.0.2...v12.0.3) (2024-02-27)


### Styles

* **fields:** fix MultiCheckbox options margin when isInline ([d98f1a5](https://github.com/MTES-MCT/monitor-ui/commit/d98f1a549ac2b7ffb0b82c67435c39f0a6fd9ea8))

## [12.0.2](https://github.com/MTES-MCT/monitor-ui/compare/v12.0.1...v12.0.2) (2024-02-27)


### Styles

* **fields:** fix MultiRadio options margin when isInline ([9c7e15b](https://github.com/MTES-MCT/monitor-ui/commit/9c7e15bdc8dac946d16e06cc7336e4cc2802cbb7))
* **fields:** fix pickers border color when isTransparent ([b10ac28](https://github.com/MTES-MCT/monitor-ui/commit/b10ac286201610cba620291cb525167a01c0d659))

## [12.0.1](https://github.com/MTES-MCT/monitor-ui/compare/v12.0.0...v12.0.1) (2024-02-27)


### Bug Fixes

* **fields:** handle missing boolean option value case in options fields ([966e17c](https://github.com/MTES-MCT/monitor-ui/commit/966e17c5dfea03a48a8387f03cbcbaeff5c68008))

## [12.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.9.1...v12.0.0) (2024-02-26)


### ⚠ BREAKING CHANGES

* **fields:** - Add mandatory `name` prop on `CoordinatesInput`.
- Add mandatory `name` prop on `DatePicker`.
- Add mandatory `name` prop on `DateRangePicker`.
- `isChecked` prop has been renamed to `checked` in Toggle.
* **fields:** - `isReadOnly` has been renamed to `readOnly` in `MultiRadio`.
* **fields:** - `.rs-picker*`, `.rs-tag*`, `.rs-btn*` & `label` styles have been removed from `rsuite-override.css`
* **fields:** - Migrate to Rsuite v5.53.2 and enforce it as minimal version via `^5.53.2` in peer dependencies.
- Remove `baseContainer` property from `MultiSelect` and `FormikMultiSelect`.
- Remove `baseContainer` property from `Select` and `FormikSelect`.
- Forbid Rsuite inherited property `valueKey` in `CheckPicker`.
- Forbid Rsuite inherited property `valueKey` in `MultiSelect` and `FormikMultiSelect`.
- Forbid Rsuite inherited property `valueKey` in `Search`.
- The `Option` type now doesn't allow the `children` property, you need to use `TreeOption` for that instead.

### Features

* **cypress:** use Escape instead of click outside for fill() on DateRangePicker ([3883337](https://github.com/MTES-MCT/monitor-ui/commit/3883337273eb38829e25d77e1b3f8703c23dae4e))
* **field:** add Radio ([0573fc8](https://github.com/MTES-MCT/monitor-ui/commit/0573fc890ccfd5e04028359e7fe2f55f1006da32))
* **fields:** add isLight prop to Checkbox ([9992824](https://github.com/MTES-MCT/monitor-ui/commit/9992824e519f4bb8151aa6d61eade3f87e6992ba))
* **fields:** add MultiCascader ([5900bb6](https://github.com/MTES-MCT/monitor-ui/commit/5900bb6a6234adc904aa01917da05edf14777111))
* **fields:** add readOnly prop to MultiCheckbox ([bd1e21b](https://github.com/MTES-MCT/monitor-ui/commit/bd1e21b00b041be05acb896cc0e65a9b8692a7c0))
* **fields:** close DatePicker calendar & time pickers on Escape ([96344da](https://github.com/MTES-MCT/monitor-ui/commit/96344da55e609a1bd19c82279bbcbc2cdac83031))
* **fields:** close DateRangePicker calendar & time pickers on Escape ([4ae6edd](https://github.com/MTES-MCT/monitor-ui/commit/4ae6edda9367cd078426b651832c590fad36ec53))
* **fields:** normalize disabled, isLight, isTransparent & readOnly props ([88e8308](https://github.com/MTES-MCT/monitor-ui/commit/88e8308c20b216de4925e9258b207798c5d139ef))
* **fields:** rename isReadOnly prop to readOnly in MultiRadio ([71581b4](https://github.com/MTES-MCT/monitor-ui/commit/71581b46129e8a6e90bd4c701eaf41be5bffa20f))
* **fields:** set CheckPicker, MultiCascader, MultiSelect & Select height to 30px ([6caff98](https://github.com/MTES-MCT/monitor-ui/commit/6caff986cacbc73c51b3843764fd5f31fa8cbdda))
* **formiks:** add FormikCheckPicker ([b480014](https://github.com/MTES-MCT/monitor-ui/commit/b4800141a9587f98035d6094d8f0e6b74d255038))
* **formiks:** add FormikMultiCascader ([77effaa](https://github.com/MTES-MCT/monitor-ui/commit/77effaafca094407eee6f8f369423c82254a483d))
* **formiks:** add FormikToggle ([e4e821b](https://github.com/MTES-MCT/monitor-ui/commit/e4e821b162a20eeef40566542ac207b7e974d342))
* **hooks:** add usePressEscapeEffect() ([9e85593](https://github.com/MTES-MCT/monitor-ui/commit/9e85593e37b6e372b621d601af76e07411f6c78e))


### Bug Fixes

* **cypress:** add dedicated function to fill() for Search field ([b20a102](https://github.com/MTES-MCT/monitor-ui/commit/b20a1028eae0d5210fdb9be4e5b7f50543ded818))
* **cypress:** fix fill() command for CheckPicker after Rsuite upgrade ([f987cde](https://github.com/MTES-MCT/monitor-ui/commit/f987cdeba881ff8ed799a16cbe3d953bb9360f72))
* **cypress:** fix fill() command for Select & MultiSelect after Rsuite upgrade ([0112f3b](https://github.com/MTES-MCT/monitor-ui/commit/0112f3b5d9cf696ee0a1a063534f3930e747ba87))
* **field:** fix Checkbox after Rsuite upgrade ([abc0b71](https://github.com/MTES-MCT/monitor-ui/commit/abc0b712b596ed917694af9c7e7a2b36adf3a61a))
* **field:** fix MultiRadio after Rsuite upgrade ([63829b8](https://github.com/MTES-MCT/monitor-ui/commit/63829b83a53f73d32907f9d989e61928bcf3b074))
* **field:** set rsuite value to null when undefined in Select ([e40ae4e](https://github.com/MTES-MCT/monitor-ui/commit/e40ae4ece7fc71963b53e74394ed16737e3cdadd))
* **fields:** finalize DatePicker & DateRangePicker style after Rsuite upgrade ([0004843](https://github.com/MTES-MCT/monitor-ui/commit/00048437b0b72db7659e649550b221640e5e738f))
* **fields:** fix DateRangePicker basic styles after Rsuite upgrade ([e2b853f](https://github.com/MTES-MCT/monitor-ui/commit/e2b853f30bb87f076c87c08e25eb532daef3ae82))


### Code Refactoring

* **cypress:** improve fill() command for Checkbox & basic fields ([747c009](https://github.com/MTES-MCT/monitor-ui/commit/747c009f0bc493dc9fd9d1f5c2f6c466c67415fe))
* **cypress:** improve fill() command for MultiRadio ([30a5f05](https://github.com/MTES-MCT/monitor-ui/commit/30a5f05c7772e4e87c2a6073ac2eddc0a3d6bb7b))
* **cypress:** move fill() utils within fill/ folder ([5be34e2](https://github.com/MTES-MCT/monitor-ui/commit/5be34e2582edce2b64352b3878c133b7ea766a4a))


### Buid System & Dependencies

* **jest:** fix missing SWC paths ([13a98ea](https://github.com/MTES-MCT/monitor-ui/commit/13a98ea0149ee96840a97d2674c4dd0930c7de0a))
* **storybook:** migrate to v8 ([eaa25fb](https://github.com/MTES-MCT/monitor-ui/commit/eaa25fbfc87152204ce577da15e073b9c5271ff9))


### Documentation

* **components:** clean stories ([7536d4e](https://github.com/MTES-MCT/monitor-ui/commit/7536d4e1bbf03cb0efb755da865e5f71d9bd00a0))
* **cypress:** update fill() command tsdoc ([7d1db8d](https://github.com/MTES-MCT/monitor-ui/commit/7d1db8d252468dae1f891de637b26415562c9a09))


### Styles

* **components:** set Dialog action buttons spacing to 8px ([3281d20](https://github.com/MTES-MCT/monitor-ui/commit/3281d2011bc9d605ee8c0765ec8d4b19111e0912))
* **fields:** add 8px padding in DatePicker & DateRangePicker calendars ([3aac367](https://github.com/MTES-MCT/monitor-ui/commit/3aac36748443747be17c0736a69f388208e5f361))
* **fields:** fix Checkbox checkmark color when transparent ([c2dbfae](https://github.com/MTES-MCT/monitor-ui/commit/c2dbfae11f0eae57fcce5e18eda0eeba31879a5e))
* **fields:** fix CoordinatesInput states & height ([9900849](https://github.com/MTES-MCT/monitor-ui/commit/9900849530fcb6ddb3b4120f5a46274e5031333b))
* **fields:** fix counter badge look in CheckPicker & MultiCascader ([9ffeaff](https://github.com/MTES-MCT/monitor-ui/commit/9ffeafffa8f652a7b1637dc616a708513c1e8982))
* **fields:** fix option focus colors in CheckPicker, MultiCascader, MultiSelect & Select ([a76fe8f](https://github.com/MTES-MCT/monitor-ui/commit/a76fe8f6fa27c3ac92a9c7ce21c5b049f26041c8))
* **fields:** fix option hover color in CheckPicker, MultiCascader, MultiSelect & Select ([c91c249](https://github.com/MTES-MCT/monitor-ui/commit/c91c249f2c7fcd007235d325a2087a3c75329502))
* **fields:** fix picker popup column border in MultiCascader ([879f4a8](https://github.com/MTES-MCT/monitor-ui/commit/879f4a893005b712348b1ede5c4b6beefa8d4d52))
* **fields:** fix selected value(s) color in CheckPicker, MultiCascader & Select ([0390555](https://github.com/MTES-MCT/monitor-ui/commit/03905556fb61b6baf139d57bcae4e0fdf6eed1b0))
* **fields:** fix Toggle state colors ([ab9b0ba](https://github.com/MTES-MCT/monitor-ui/commit/ab9b0bad746dd5cb5462f4f49ea6bf958a5dc889))
* remove Rsuite table classes from rsuite-override.css ([f69b89d](https://github.com/MTES-MCT/monitor-ui/commit/f69b89dcbd8d850943ef23cda6be7442465d2a46))

## [11.9.1](https://github.com/MTES-MCT/monitor-ui/compare/v11.9.0...v11.9.1) (2024-02-23)


### Bug Fixes

* **utils:** export humanizePastDate function ([2dafd68](https://github.com/MTES-MCT/monitor-ui/commit/2dafd6883131865c97a4692bd2d93f2c521cf4e0))

## [11.9.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.8.0...v11.9.0) (2024-02-23)


### Features

* **utils:** changes after code review ([8073a81](https://github.com/MTES-MCT/monitor-ui/commit/8073a817581ae418e8dab7551ccc7024574293d6))
* **utils:** create a function to get the formatted mission update date ([9c161b0](https://github.com/MTES-MCT/monitor-ui/commit/9c161b0ffe4d092fb581a885ac795a5f48afb7db))
* **utils:** update name of test ([4f0711d](https://github.com/MTES-MCT/monitor-ui/commit/4f0711d0d686f0d0755c71356ca1cade72702435))

## [11.8.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.7.2...v11.8.0) (2024-02-20)


### Features

* **fields:** add RichBooleanCheckbox ([ac36b4b](https://github.com/MTES-MCT/monitor-ui/commit/ac36b4b9914eba55d412685e3ea79f06e64a44ab))


### Bug Fixes

* **type:** update EngagedControlUnit type ([6bc3cac](https://github.com/MTES-MCT/monitor-ui/commit/6bc3cacc6046aad0e9aafdcaaf352e170a7966e6))

## [11.7.2](https://github.com/MTES-MCT/monitor-ui/compare/v11.7.1...v11.7.2) (2024-02-12)


### Bug Fixes

* **fields:** update background color for MultiRadio component ([3d2108b](https://github.com/MTES-MCT/monitor-ui/commit/3d2108be10f551d2dc7e188755f6f551eed21483))

## [11.7.1](https://github.com/MTES-MCT/monitor-ui/compare/v11.7.0...v11.7.1) (2024-02-08)


### Bug Fixes

* **fields:** fix MultiRadio colors ([42d87c7](https://github.com/MTES-MCT/monitor-ui/commit/42d87c7fc15eb3af9a602242d4f5f8c3f3e683a6))

## [11.7.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.6.0...v11.7.0) (2024-02-08)


### Features

* **fields:** accept JSX Elements for multiradio label ([5776236](https://github.com/MTES-MCT/monitor-ui/commit/577623600d3588733c111b73fe0b341625d03f25))
* **fields:** add field and label to Toggle component ([1ef21e3](https://github.com/MTES-MCT/monitor-ui/commit/1ef21e34d262e56d21a2bd2eac87a7401d34bf1d))
* **fields:** can display custom items for MultiRadio component ([5e75fff](https://github.com/MTES-MCT/monitor-ui/commit/5e75fffdcef9fd47926e2f699e702d024f9c5fe7))
* **fields:** can display custom items for MultiRadio component ([86080d7](https://github.com/MTES-MCT/monitor-ui/commit/86080d755c429ae604ae4ab9c70998dca3ac2389))
* **fields:** create Toggle component ([6a649cd](https://github.com/MTES-MCT/monitor-ui/commit/6a649cd2733055f9b13ebc988e61a2138cfeb637))


### Bug Fixes

* **fields:** update error mode for MultiRadio component ([b7babe9](https://github.com/MTES-MCT/monitor-ui/commit/b7babe98124929cd707ce67e80f710351181eca1))

## [11.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.5.1...v11.6.0) (2024-02-05)


### Features

* **icons:** add warning icon ([1d7cc3f](https://github.com/MTES-MCT/monitor-ui/commit/1d7cc3fc20716454ae4dbb80571959eb8e48f166))

## [11.5.1](https://github.com/MTES-MCT/monitor-ui/compare/v11.5.0...v11.5.1) (2024-02-05)


### Bug Fixes

* **build:** force rsuite version to 5.45.0 before fixing cy.fill() command ([949e6ed](https://github.com/MTES-MCT/monitor-ui/commit/949e6ed04b6f922eaf8cd6118b2aa10e9780ab24))

## [11.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.4.0...v11.5.0) (2024-02-02)


### Features

* **types:** add optional children prop to Option ([0a2a934](https://github.com/MTES-MCT/monitor-ui/commit/0a2a934475b75dc9c81f7057a383bd1e5635653c))
* **types:** add PartialExcept & UndefineExcept ([c33afe1](https://github.com/MTES-MCT/monitor-ui/commit/c33afe1c7745d1e3e0c18eea6a8663748be29a86))
* **types:** expose AnyObject & Native* types ([e9d267f](https://github.com/MTES-MCT/monitor-ui/commit/e9d267f358285a2ee96e36c87d584930465337c7))


### Bug Fixes

* **types:** expose missing PartialExcept & UndefineExcept ([0d59087](https://github.com/MTES-MCT/monitor-ui/commit/0d590876c1df7498347a26a5ee3439cc335bbdc3))

## [11.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.3.0...v11.4.0) (2024-01-24)


### Features

* **entities:** add getControlUnitResourceCategoryFromType() util ([c9a8545](https://github.com/MTES-MCT/monitor-ui/commit/c9a854554ac900794d3bce18f8a539013c8397c8))

## [11.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.2.0...v11.3.0) (2024-01-22)


### Features

* **components:** add warning accent for Buttons ([dbe77d2](https://github.com/MTES-MCT/monitor-ui/commit/dbe77d2e543781d5962e032eab84483707babd21))
* **entities:** add ControlUnitResourceCategory enum ([29a007b](https://github.com/MTES-MCT/monitor-ui/commit/29a007b2cc8958e29731a26602aa15cb7b2015b7))


### Bug Fixes

* **utils:** add missing generic type in getOptionsFromLabelledEnum() ([c1f0a5a](https://github.com/MTES-MCT/monitor-ui/commit/c1f0a5aecc68235eb4a40a2913753879cbe4c47b))

## [11.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.1.0...v11.2.0) (2024-01-18)


### Features

* add Open Sans Variable font ([c2049c5](https://github.com/MTES-MCT/monitor-ui/commit/c2049c5acca76c71b1de39176871314db5599cc0))
* **elements:** add Figure ([0e5a3dc](https://github.com/MTES-MCT/monitor-ui/commit/0e5a3dc04df50bc1940607ed6b394a1ba6ffd010))


### Bug Fixes

* use local Open Sans font from assets instead of dependency ([88e7f2e](https://github.com/MTES-MCT/monitor-ui/commit/88e7f2ec04d338314d51512013902466542d28fa))

## [11.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v11.0.1...v11.1.0) (2024-01-17)


### Features

* **components:** allow title prop on MapMenuDialog.Title ([70e03b3](https://github.com/MTES-MCT/monitor-ui/commit/70e03b39e90b591c3723ac851c4b4745c518ebae))

## [11.0.1](https://github.com/MTES-MCT/monitor-ui/compare/v11.0.0...v11.0.1) (2024-01-17)


### Bug Fixes

* **icon:** fix Attention icon ([72f0161](https://github.com/MTES-MCT/monitor-ui/commit/72f016188dbe016842a693e441ce8a22532354f5))

## [11.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.19.1...v11.0.0) (2024-01-16)


### ⚠ BREAKING CHANGES

* **tables:** Add width prop in TableWithSelectableRows.Td to have fixed columns size.
* **table:** add width prop in TableWithSelectableRows.Td and update table-layout to fixed

### Features

* **tables:** add width prop in TableWithSelectableRows.Td & update table-layout to fixed ([e80f88f](https://github.com/MTES-MCT/monitor-ui/commit/e80f88fb36f5a1210b36e1ef114249c1c1a3586d))


### Bug Fixes

* **table:** add width prop in TableWithSelectableRows.Td and update table-layout to fixed ([38a9d3e](https://github.com/MTES-MCT/monitor-ui/commit/38a9d3ef2f8b756b43dc43ebce89f10965c60fd4))

## [10.19.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.19.0...v10.19.1) (2024-01-15)

### Bug Fixes

- **table:** update padding in row and add prop isHighlight
  ([b129bd1](https://github.com/MTES-MCT/monitor-ui/commit/b129bd1f96a8bee776358d2b6977b284c6e3849f))

## [10.19.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.18.0...v10.19.0) (2024-01-10)

### Features

- **field:** add isSearchInput prop to display Search and close icons
  ([27e14b0](https://github.com/MTES-MCT/monitor-ui/commit/27e14b0852acd82898dc435a138dbf53e3ce061c))

## [10.18.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.17.1...v10.18.0) (2024-01-09)

### Features

- **cypress:** add callback to waitForLastRequest command
  ([aaded2d](https://github.com/MTES-MCT/monitor-ui/commit/aaded2d43f462a6bbcffc8fa32cad526da4e7413))

### Bug Fixes

- **e2e:** fix test with border effect
  ([97c82c9](https://github.com/MTES-MCT/monitor-ui/commit/97c82c9b64dfd72a95bda104bb077d78b216b81a))

## [10.17.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.17.0...v10.17.1) (2024-01-04)

### Bug Fixes

- **components:** truncate long titles in MapMenuDialog
  ([ce25040](https://github.com/MTES-MCT/monitor-ui/commit/ce250400ddd8c955783e1aed5c0253ed14eb3972))

## [10.17.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.16.1...v10.17.0) (2024-01-03)

### Features

- **cypress:** add waitForLastRequest
  ([2739040](https://github.com/MTES-MCT/monitor-ui/commit/2739040cf1f6f74a6a38d9902dc485be5003b21d))
- **hooks:** add useDeepCompareEffect
  ([d74f87a](https://github.com/MTES-MCT/monitor-ui/commit/d74f87ac390b636b50ab44d027aff13618a711bd))

### Bug Fixes

- **hooks:** fix import
  ([bd0449f](https://github.com/MTES-MCT/monitor-ui/commit/bd0449ff7bca816cb1570e2c46aec7bb05a64664))

## [10.16.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.16.0...v10.16.1) (2023-12-20)

### Bug Fixes

- **fields:** fix disabled prop in select component
  ([ab49d6e](https://github.com/MTES-MCT/monitor-ui/commit/ab49d6ecf026992d00165df6eee60b5266ba3c20))

## [10.16.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.15.2...v10.16.0) (2023-12-20)

### Features

- **field:** handle disabled prop on options in Select component
  ([dee4b21](https://github.com/MTES-MCT/monitor-ui/commit/dee4b21f100ae0e7083797b328e5294332f4323e))

## [10.15.2](https://github.com/MTES-MCT/monitor-ui/compare/v10.15.1...v10.15.2) (2023-12-20)

### Bug Fixes

- **MultiSelect:** fix for long labels in virtualized mode
  ([ba2902a](https://github.com/MTES-MCT/monitor-ui/commit/ba2902ac63780a76d884f2c6fedbb469436f143d))

## [10.15.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.15.0...v10.15.1) (2023-12-19)

### Bug Fixes

- **theme:** dummy commit to release
  ([9312c7e](https://github.com/MTES-MCT/monitor-ui/commit/9312c7e6e106d9ce831d66805534be06576ea3cf))

## [10.14.2](https://github.com/MTES-MCT/monitor-ui/compare/v10.14.1...v10.14.2) (2023-12-18)

### Bug Fixes

- **CoordinatesInput:** fix light mode
  ([643d22c](https://github.com/MTES-MCT/monitor-ui/commit/643d22c1632d863e6777b9e7c8f97137a69787dd))
- **Multiradio:** rework sizing and centering
  ([46c9325](https://github.com/MTES-MCT/monitor-ui/commit/46c932564a0109f0eb2a66a902de6457231b52ea))

## [10.14.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.14.0...v10.14.1) (2023-12-04)

## [10.14.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.13.0...v10.14.0) (2023-11-22)

### Features

- **utils:** add isEmptyish()
  ([085ebda](https://github.com/MTES-MCT/monitor-ui/commit/085ebdabc165ec637c7ab5258b461c2043e6d53e))
- **utils:** add sortCollectionByLocalizedProps()
  ([3b2c2ed](https://github.com/MTES-MCT/monitor-ui/commit/3b2c2ede747c2f1e4d5363d0892fa7b97f9251e4))

### Bug Fixes

- **utils:** add missing index exports
  ([0dae0a8](https://github.com/MTES-MCT/monitor-ui/commit/0dae0a8635f2f011bc2955e0376f0eec04537eae))

## [10.13.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.12.1...v10.13.0) (2023-11-22)

### Features

- **entities:** add Administration, ControlUnit, DepartmentArea & Station
  ([9f04ac9](https://github.com/MTES-MCT/monitor-ui/commit/9f04ac996d7723504ad5e2d77bc5cc560b68bfcd))
- **field:** handle disabled prop on options in MultiCheckbox component
  ([5f43efc](https://github.com/MTES-MCT/monitor-ui/commit/5f43efcec90b969c2dbad036482bd25366f783fd))

### Bug Fixes

- **elements:** fix checkpicker style
  ([d3e2efd](https://github.com/MTES-MCT/monitor-ui/commit/d3e2efdfc8756fd1058a60eb9d3aebae73c7ef4e))
- **fields:** fix date picker size
  ([6114596](https://github.com/MTES-MCT/monitor-ui/commit/61145962e51206022c3fa27485ce60e926642db9))

## [10.12.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.12.0...v10.12.1) (2023-11-15)

### Bug Fixes

- **icon:** fix info icon
  ([2261c5f](https://github.com/MTES-MCT/monitor-ui/commit/2261c5f9a8ed592017cb9b2604c14619297050e0))
- **icons:** set transparent background color for RapportNav icons
  ([7a002bf](https://github.com/MTES-MCT/monitor-ui/commit/7a002bfb64a05579b6713c28a94b742cedb4f5b9))
- **icons:** update icon components after svg change
  ([8f00fe8](https://github.com/MTES-MCT/monitor-ui/commit/8f00fe88241cf19a9d68a4a416122d6d7af232e5))

## [10.12.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.11.0...v10.12.0) (2023-11-10)

### Features

- **cypress:** add tests e2e
  ([cc1f8b9](https://github.com/MTES-MCT/monitor-ui/commit/cc1f8b98cf409e068010ee040deea034eb7a7571))

### Bug Fixes

- **fields:** return all results when user delete search in CheckPicker, Select and MultiSelect
  ([0e8fa67](https://github.com/MTES-MCT/monitor-ui/commit/0e8fa6703ba29e2abd0de9ba2f48b99abe087e5e))

## [10.11.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.10.0...v10.11.0) (2023-11-08)

### Features

- **elements:** deprecate bulletColor and bullet props
  ([3aa1b94](https://github.com/MTES-MCT/monitor-ui/commit/3aa1b94372a7f6f899f5480cd827bcb4bce9a9b1))
- **elements:** update variable name
  ([1c1f593](https://github.com/MTES-MCT/monitor-ui/commit/1c1f5933b6987fa49053e6f66f71d53c1883199f))
- **elements:** use Dot icon for bullet in tag component
  ([0558562](https://github.com/MTES-MCT/monitor-ui/commit/0558562e66525c991674c6706ea01f0fe6208cc9))

### Bug Fixes

- **icons:** fix command to generate icons
  ([3697d30](https://github.com/MTES-MCT/monitor-ui/commit/3697d30a6ae010f578523a0d13309a9ac536eafb))

## [10.10.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.9.3...v10.10.0) (2023-11-08)

### Features

- **icons:** add Dot and DotFilled icons
  ([527aa30](https://github.com/MTES-MCT/monitor-ui/commit/527aa30d19bee8ade610e4caf249ac236e94c9b2))

## [10.9.3](https://github.com/MTES-MCT/monitor-ui/compare/v10.9.2...v10.9.3) (2023-10-30)

### Bug Fixes

- **utils:** make getHashFromCollection() browser-compatible
  ([16aae19](https://github.com/MTES-MCT/monitor-ui/commit/16aae193ada90e2a0d8a883b5ede491070f21194))

## [10.9.2](https://github.com/MTES-MCT/monitor-ui/compare/v10.9.1...v10.9.2) (2023-10-30)

### Bug Fixes

- **theme:** replace goldenPoppy25 color
  ([5afebe6](https://github.com/MTES-MCT/monitor-ui/commit/5afebe6e93b01e9a2349a3e89da86bf97aa2931d))

## [10.9.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.9.0...v10.9.1) (2023-10-27)

### Bug Fixes

- **field:** fix Select when disabled
  ([a352ecd](https://github.com/MTES-MCT/monitor-ui/commit/a352ecd0081bbf174620379b1b1302f09a50330d))

## [10.9.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.8.0...v10.9.0) (2023-10-26)

### Features

- **cypress:** add pickCheckPickerOptions
  ([6ea2e84](https://github.com/MTES-MCT/monitor-ui/commit/6ea2e844a171d925f460b1cdba115cf598f8991a))
- **field:** clean component typing
  ([371f065](https://github.com/MTES-MCT/monitor-ui/commit/371f06563cfe3aa6e609a9f2eb993a0fa685785f))
- **fields:** create CheckPicker component
  ([ab60aa4](https://github.com/MTES-MCT/monitor-ui/commit/ab60aa4df799282541bf39fdef2d3f2282354788))
- **field:** update check picker story
  ([ec91b02](https://github.com/MTES-MCT/monitor-ui/commit/ec91b02403f675f9fce1cc028876852b9491ff3f))

### Bug Fixes

- **field:** add test and cleans style for CheckPicker component
  ([ea13e7b](https://github.com/MTES-MCT/monitor-ui/commit/ea13e7b093754abd6e0b777206564d7d2e73a419))
- **filed:** fix MultiSelect when disabled
  ([92e45ee](https://github.com/MTES-MCT/monitor-ui/commit/92e45eec198d469542e05f8df82881bf4418f6c2))

## [10.8.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.7.0...v10.8.0) (2023-10-25)

### Features

- extend styled-components to v6 in peer deps
  ([440bd78](https://github.com/MTES-MCT/monitor-ui/commit/440bd7821639b55e7a23f276869cd890109af714))

### Bug Fixes

- **build:** migrate to SWC with full ESM
  ([9854e11](https://github.com/MTES-MCT/monitor-ui/commit/9854e1179ade9805e081faa68db93398188c4d91))
- fix styled-components related types
  ([209a3bf](https://github.com/MTES-MCT/monitor-ui/commit/209a3bf07a85238f6da5bee8a7712021fb88bbfe))
- **formiks:** return undefined in FormikCheckbox handleChange()
  ([369035d](https://github.com/MTES-MCT/monitor-ui/commit/369035dbb69062b84d1098ed4660479918e3ff8e))

## [10.7.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.6.0...v10.7.0) (2023-10-24)

### Features

- **libs:** add withCacheInvalidation option in CustomSearch
  ([537f8c4](https://github.com/MTES-MCT/monitor-ui/commit/537f8c487f96c903d2b0e7b3ad4cafae7e734f0a))
- **utils:** add getHashFromCollection()
  ([b3ea1b6](https://github.com/MTES-MCT/monitor-ui/commit/b3ea1b6eff17cdf6eb8f28e6233488e44fa3d4ea))

## [10.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.5.0...v10.6.0) (2023-10-18)

### Features

- **icons:** add Car ([8bc41e3](https://github.com/MTES-MCT/monitor-ui/commit/8bc41e30ddd50b23751049416062eb2716789386))

## [10.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.4.0...v10.5.0) (2023-10-16)

### Features

- **cypress:** add cy.getTableRowByText() command
  ([944c010](https://github.com/MTES-MCT/monitor-ui/commit/944c0108073d1ff070fa417a0c0399f14a0ceb57))

## [10.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.3.1...v10.4.0) (2023-10-11)

### Features

- **components:** add message component
  ([ee05bc1](https://github.com/MTES-MCT/monitor-ui/commit/ee05bc1ac50185c105560107850213973dd2d741))

### Bug Fixes

- **components:** fix ts types
  ([49ed263](https://github.com/MTES-MCT/monitor-ui/commit/49ed2637efa16262e4f06401cdf1adc2d2667b4b))

## [10.3.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.3.0...v10.3.1) (2023-10-10)

### Bug Fixes

- **theme:** update goldenPoppy25
  ([bb4901f](https://github.com/MTES-MCT/monitor-ui/commit/bb4901ff2a4e19919975540c4be3f2f662969fe8))

## [10.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.2.1...v10.3.0) (2023-10-05)

### Features

- **theme:** add goldenPoppy25
  ([ecc4220](https://github.com/MTES-MCT/monitor-ui/commit/ecc4220a383ddb9fd33372a7df16c625ae04f88e))

## [10.2.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.2.0...v10.2.1) (2023-10-03)

### Bug Fixes

- **elements:** add backgroundColor prop and fix icon size in Tag component
  ([f58b3f4](https://github.com/MTES-MCT/monitor-ui/commit/f58b3f42746286b9a27b04018101e4cd2f2263f6))
- **elements:** add borderColor prop in Tag component
  ([1d54f61](https://github.com/MTES-MCT/monitor-ui/commit/1d54f61d80f2fc1224bcd69fe0e775dda33fbc06))

## [10.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.1.1...v10.2.0) (2023-10-02)

### Features

- **field:** add disabled prop on Option type to handle case where only certain options are disabled
  ([58dc8f8](https://github.com/MTES-MCT/monitor-ui/commit/58dc8f8342dcac01f6d59ca5e05bfc4b05b738a7))

## [10.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v10.1.0...v10.1.1) (2023-09-27)

# [10.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v10.0.0...v10.1.0) (2023-09-27)

### Features

- **cypress:** add getTableRowById() custom command
  ([c9ccd60](https://github.com/MTES-MCT/monitor-ui/commit/c9ccd607cd502bb15c3cd61f504ffcd0a0eb878f))

# [10.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v9.4.0...v10.0.0) (2023-09-25)

### Bug Fixes

- **fields:** prevent onChange event on readOnly mode
  ([73ebb17](https://github.com/MTES-MCT/monitor-ui/commit/73ebb1737fb4044e340e35ada565fa323f47d89f))

- feat(theme)!: add new color and update accentuation colors
  ([0d673f4](https://github.com/MTES-MCT/monitor-ui/commit/0d673f44c27a1b5d9c98a589dc90e2c6b974904e))

### Features

- **fields:** add isReadOnly prop on multiRadio component and add custom style for plaintext
  ([7b903cc](https://github.com/MTES-MCT/monitor-ui/commit/7b903ccb91ba9c227534f25c35edcac12f54fd47))

### BREAKING CHANGES

- Accentuation colors are no longer objects with key accentuation but just string with this pattern
  `colorAccentuationNumber`. Exemple: `blueYonder[25]` becomes `blueYonder25`

# [9.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v9.3.0...v9.4.0) (2023-09-20)

### Features

- **icons:** add EditUnbordered icon
  ([743b90c](https://github.com/MTES-MCT/monitor-ui/commit/743b90ce4f03a0f08c73cf41f9595e956bc6676a))
- **icons:** add Link andUnlink icons
  ([5b001a3](https://github.com/MTES-MCT/monitor-ui/commit/5b001a313539626d88f28100557ddf8fe1abf0d8))

# [9.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v9.2.2...v9.3.0) (2023-09-19)

### Bug Fixes

- **button:** update settings for large button
  ([62eca52](https://github.com/MTES-MCT/monitor-ui/commit/62eca522e98320f5974f654ee97f7be28d6097c6))

### Features

- **icons:** add icons
  ([87e6577](https://github.com/MTES-MCT/monitor-ui/commit/87e657787b200f8605385f8e7b2fd61db45dcc6c))
- **theme:** add custom zones colors
  ([957b7a3](https://github.com/MTES-MCT/monitor-ui/commit/957b7a3a315ca003012788c760a9172f5fbea797))

## [9.2.2](https://github.com/MTES-MCT/monitor-ui/compare/v9.2.1...v9.2.2) (2023-09-08)

### Bug Fixes

- **tables:** remove secondary generic type in DataTable
  ([ff2208c](https://github.com/MTES-MCT/monitor-ui/commit/ff2208c13b2db93260ca3999e2ca85357aa09ba9))

## [9.2.1](https://github.com/MTES-MCT/monitor-ui/compare/v9.2.0...v9.2.1) (2023-09-08)

# [9.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v9.1.1...v9.2.0) (2023-09-08)

### Bug Fixes

- **assets:** add missing namespace prop in PinFilled.svg
  ([45c51e7](https://github.com/MTES-MCT/monitor-ui/commit/45c51e768ad85e2d12c0ccd23e0ad7a72e8fa3fa))
- upgrade tslib from 2.5.3 to 2.6.0
  ([ec49963](https://github.com/MTES-MCT/monitor-ui/commit/ec4996339470eca216884d75abddc8ea58b20655))

### Features

- **components:** add DefaultTable
  ([33926ed](https://github.com/MTES-MCT/monitor-ui/commit/33926ed2b1f69ca22e4ac22c06b3f1dca42a6a51))
- **components:** remove EditButton from DefaultTable
  ([67342ba](https://github.com/MTES-MCT/monitor-ui/commit/67342ba6dd2a5cc4dd041cabf37cd114f49e8c3e))
- **cypres:** add Cypress v13 support
  ([21df390](https://github.com/MTES-MCT/monitor-ui/commit/21df390cd6e7e8960528675dc10413af0a4ec089))
- **icons:** add ControlUnit, Plane & SelectCircle
  ([64a8bfa](https://github.com/MTES-MCT/monitor-ui/commit/64a8bfae3b82f8179e5451b7f54e9f5229e20f07))
- **tables:** rename DefaultTable to DataTable
  ([3904123](https://github.com/MTES-MCT/monitor-ui/commit/390412398bad3862a755c878087c0e9eb6626327))

## [9.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v9.1.0...v9.1.1) (2023-08-30)

### Bug Fixes

- **libs:** ignoreLocation by default when using fuzzySearch
  ([1cee6f2](https://github.com/MTES-MCT/monitor-ui/commit/1cee6f25ea88b5d1fcafdcd0e0233459d2479dc3))

# [9.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v9.0.1...v9.1.0) (2023-08-25)

### Features

- **elements:** add isCompact prop to IconButton
  ([ec25e63](https://github.com/MTES-MCT/monitor-ui/commit/ec25e63a2dc4b5a2ba846c499819ac02c6a91651))

## [9.0.1](https://github.com/MTES-MCT/monitor-ui/compare/v9.0.0...v9.0.1) (2023-08-23)

### Bug Fixes

- **components:** fix secondary dropdown item size
  ([1cb5c9c](https://github.com/MTES-MCT/monitor-ui/commit/1cb5c9c95c349581fb4ae1b9ac9bf3cd04718698))

# [9.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.8.0...v9.0.0) (2023-08-23)

### Bug Fixes

- **utils:** fix getCoordinates rounding
  ([622d9fc](https://github.com/MTES-MCT/monitor-ui/commit/622d9fc887b663a92a30b74bd8a64bfb56acf40d))

- feat(utils)!: add prop to getOptionsFromLabelledEnum function for sorted or not the options
  ([4ff53fe](https://github.com/MTES-MCT/monitor-ui/commit/4ff53fe398f3ac2d24a858f2f4c305d7880a22d0))

### BREAKING CHANGES

- - add mustSort prop with default value to false for sorted or not the options

# [8.8.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.7.0...v8.8.0) (2023-08-22)

### Features

- **utils:** add pluralize()
  ([57663f7](https://github.com/MTES-MCT/monitor-ui/commit/57663f78110e0ea66771a74699c712eb757431d1))
- **utils:** expose cleanString() & normalizeString()
  ([41a6a6f](https://github.com/MTES-MCT/monitor-ui/commit/41a6a6f936e403aa66bf999664f0e5ad1f7c63fd))

# [8.7.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.6.1...v8.7.0) (2023-08-22)

### Features

- **icons:** add icons
  ([ace2a82](https://github.com/MTES-MCT/monitor-ui/commit/ace2a821c9baf8b78091111e4801706b37b3c2ee))

## [8.6.1](https://github.com/MTES-MCT/monitor-ui/compare/v8.6.0...v8.6.1) (2023-08-21)

### Bug Fixes

- **components:** fix style and rename MapMenuModal in MapMenuDialog
  ([680b320](https://github.com/MTES-MCT/monitor-ui/commit/680b32091858f05151e0d627d3b85c96757af465))

# [8.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.5.0...v8.6.0) (2023-08-21)

### Features

- **types:** add Filter public type
  ([bac46f9](https://github.com/MTES-MCT/monitor-ui/commit/bac46f90fa20802e0b2745b7deca4a4c52cca589))

# [8.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.4.0...v8.5.0) (2023-08-20)

### Features

- add internal Native types
  ([41f0329](https://github.com/MTES-MCT/monitor-ui/commit/41f03299a08b32e12ffefaf55c5f1331a5ac08f3))
- **types:** add public type UndefineExceptArrays
  ([931edc8](https://github.com/MTES-MCT/monitor-ui/commit/931edc814a333be0333e8ccc2a6ef59e95ff43a7))
- **utils:** add getOptionsFromIdAndName()
  ([e9b8865](https://github.com/MTES-MCT/monitor-ui/commit/e9b8865243215b66e9ae8cdd067f55d7fa0ad60a))
- **utils:** add getOptionsFromLabelledEnum()
  ([c4b185e](https://github.com/MTES-MCT/monitor-ui/commit/c4b185e5f7ada189d5a101ec29feda6e31aeb86b))
- **utils:** add isArray()
  ([7d9bd10](https://github.com/MTES-MCT/monitor-ui/commit/7d9bd10b66908949fa4b65794597cb23653a1ba9))
- **utils:** add isDefined()
  ([0e49bc9](https://github.com/MTES-MCT/monitor-ui/commit/0e49bc9b9a7663dff61cc9dc0ab64abace81e60c))
- **utils:** add isObject()
  ([9e1595a](https://github.com/MTES-MCT/monitor-ui/commit/9e1595a330ff3f3f7afb4af9cabdea592558434b))
- **utils:** add nullify()
  ([9d21221](https://github.com/MTES-MCT/monitor-ui/commit/9d21221d126e1d27e5aa56b038ebae24766175f2))
- **utils:** add undefine()
  ([2fbfcf4](https://github.com/MTES-MCT/monitor-ui/commit/2fbfcf4064822efbbf6aca5a386ff3f4e3c2c1a6))

# [8.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.3.0...v8.4.0) (2023-08-17)

### Bug Fixes

- **ci:** fix ci for dependabot
  ([d386c4d](https://github.com/MTES-MCT/monitor-ui/commit/d386c4d952a0695678475af7f4c727dfd35b4948))
- **components:** fix MapMenuModal z-index
  ([802e9fa](https://github.com/MTES-MCT/monitor-ui/commit/802e9fa32561932823fa0eaf4a5931a709454859))
- **components:** fix MapMenuModal.Footer z-index
  ([03f55fc](https://github.com/MTES-MCT/monitor-ui/commit/03f55fca037894f3e6abe2082c0456b6666130de))
- **components:** fix SingleTag component max size
  ([fb20e3a](https://github.com/MTES-MCT/monitor-ui/commit/fb20e3a87af185c7fa2ba218a865e71f1985da48))
- **fields:** add style for single calendar in DateRangePicker component
  ([f70380f](https://github.com/MTES-MCT/monitor-ui/commit/f70380f2de3ca7a82b4a265ed042ea8694d07a13))
- **fields:** update dateRangePicker style
  ([8a783a8](https://github.com/MTES-MCT/monitor-ui/commit/8a783a850c21ef3b787218fdd2778d7e21a10677))
- **tests:** update DateRangePicker story
  ([c20a373](https://github.com/MTES-MCT/monitor-ui/commit/c20a373c37e487b2d5cdc0bdf7d70feedf2089ea))

### Features

- **fields:** add showOneCalendar prop to DateRangerPicker component
  ([804296a](https://github.com/MTES-MCT/monitor-ui/commit/804296afb955f329f0cd55973d8d1c7ea28db9fc))

# [8.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.2.0...v8.3.0) (2023-08-11)

### Features

- **component:** create MapMenuModal component
  ([07ff8b5](https://github.com/MTES-MCT/monitor-ui/commit/07ff8b5f41a9367e3131b47e904a6861d5f8c752))
- **components:** create secondary accent for single tag component
  ([259bb32](https://github.com/MTES-MCT/monitor-ui/commit/259bb3206f31231ba4af755c2f083c287e1136b4))

# [8.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.1.1...v8.2.0) (2023-08-10)

### Features

- **components:** create primary and secondary accent for dropdown component
  ([7e29c6a](https://github.com/MTES-MCT/monitor-ui/commit/7e29c6a6d81a610b5a97c2fc4271adfd6504d8f1))
- **elements:** add buttonsGroup component in TableWithSelectableRows component
  ([4a144d6](https://github.com/MTES-MCT/monitor-ui/commit/4a144d6571ac365339d89f20e792ea3f72217bf4))

## [8.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v8.1.0...v8.1.1) (2023-08-09)

### Bug Fixes

- **elements:** clean RowCheckbox component
  ([0128e98](https://github.com/MTES-MCT/monitor-ui/commit/0128e98ec19e3a302f696b8e62f33aa949601193))
- **elements:** update checkbox style for TableWithSelectableRows components
  ([aa15faa](https://github.com/MTES-MCT/monitor-ui/commit/aa15faae2adb7359d11ad548c23c8c67353505c7))

# [8.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v8.0.0...v8.1.0) (2023-08-07)

### Bug Fixes

- **components:** anyify children type in NewWindow
  ([5a73dfa](https://github.com/MTES-MCT/monitor-ui/commit/5a73dfadb676417f1436245e9824bd1b96761a19))
- **components:** re-type ToastContainer in Notifier
  ([b2f8e74](https://github.com/MTES-MCT/monitor-ui/commit/b2f8e747ca1fbfb5fe0a3ba25d2a76f719bcaa58))

### Features

- **elements:** add TableWithRowSelection
  ([93ed01e](https://github.com/MTES-MCT/monitor-ui/commit/93ed01ef5d96644f1ce04a11d59225eb02af69b2))
- **elements:** use SimpleTable style
  ([90beafa](https://github.com/MTES-MCT/monitor-ui/commit/90beafa5f3905781a7b59d85389028427713d9b7))

# [8.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v7.6.2...v8.0.0) (2023-07-19)

- build(deps)!: upgrade rsuite
  ([e17df4c](https://github.com/MTES-MCT/monitor-ui/commit/e17df4c0b8c41ee0803b2596f9a20ec6beab28e7))

### BREAKING CHANGES

- upgrade rsuite peer deps

## [7.6.2](https://github.com/MTES-MCT/monitor-ui/compare/v7.6.1...v7.6.2) (2023-07-17)

### Bug Fixes

- **build:** update bundle types path
  ([1565c73](https://github.com/MTES-MCT/monitor-ui/commit/1565c7319b0f918ebccced9ad34f3aa44f0c9fdf))

## [7.6.1](https://github.com/MTES-MCT/monitor-ui/compare/v7.6.0...v7.6.1) (2023-07-14)

### Bug Fixes

- **fields:** auto-focus start time on calendar pick in DateRangePicker
  ([b077c32](https://github.com/MTES-MCT/monitor-ui/commit/b077c32acb1afef224f369f89126384e2294b80e))
- **fields:** fix calendar pick to time focus switching in DatePicker
  ([1300b79](https://github.com/MTES-MCT/monitor-ui/commit/1300b797375216bdeef7e3b4395cd09d977eba12))
- **fields:** fix calendar pick to time focus switching when filled in DatePicker
  ([59cd4af](https://github.com/MTES-MCT/monitor-ui/commit/59cd4af98d8980276b586a8c97f765a536829169))
- **fields:** fix hour to minute focus switching when filled in DateRangePicker
  ([340533f](https://github.com/MTES-MCT/monitor-ui/commit/340533f3ad4e362a82eefdfac829cb577f22665b))
- **fields:** fix partially calendar update on date input change in DateRangePicker
  ([5712e6a](https://github.com/MTES-MCT/monitor-ui/commit/5712e6a3b7bc49fd14617f4033aed0ed1499f9a5))
- **fields:** fix partially filled date update on calendar pick in DatePicker & DateRangePicker
  ([9c138be](https://github.com/MTES-MCT/monitor-ui/commit/9c138be011dc3839438fe9990a9770ae97371efd))
- **fields:** remove internal min/max for year in DatePicker & DateRangePicker
  ([388f069](https://github.com/MTES-MCT/monitor-ui/commit/388f06942b29ba4219a8724fb80dc87d112f48d6))
- **fields:** update backspace when filled behavior in DatePicker & DateRangePicker
  ([599aacd](https://github.com/MTES-MCT/monitor-ui/commit/599aacdbd1767a607f2477398ee2874ce7774499))

# [7.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v7.5.0...v7.6.0) (2023-07-05)

### Features

- **theme:** add amp colors
  ([46cf039](https://github.com/MTES-MCT/monitor-ui/commit/46cf039a94a403ff9522a521c423a1488d652337))
- **theme:** add story for colors + yarncache
  ([b848553](https://github.com/MTES-MCT/monitor-ui/commit/b84855336c0dd5c6cc988e1c3a81a82d0f32de55))

# [7.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v7.4.3...v7.5.0) (2023-06-29)

### Features

- **fields:** add lowercase handling in DMD coordinates input
  ([efc25f0](https://github.com/MTES-MCT/monitor-ui/commit/efc25f09eb62e5f32ad7fcdc1f019777fea8c42d))
- **fields:** remove precision on DMD minute decimals
  ([31498d3](https://github.com/MTES-MCT/monitor-ui/commit/31498d39912dba785472aaed295a9493c7014fae))

## [7.4.3](https://github.com/MTES-MCT/monitor-ui/compare/v7.4.2...v7.4.3) (2023-06-23)

### Bug Fixes

- **icons:** update summary icon
  ([9bfaa18](https://github.com/MTES-MCT/monitor-ui/commit/9bfaa18cfbc086bcea9ec2d18862b05bab6e9f55))

## [7.4.2](https://github.com/MTES-MCT/monitor-ui/compare/v7.4.1...v7.4.2) (2023-06-22)

### Bug Fixes

- **icons:** update mission icon
  ([452140f](https://github.com/MTES-MCT/monitor-ui/commit/452140f2625ee35cde020cddd3e0fd077622ed1e))

## [7.4.1](https://github.com/MTES-MCT/monitor-ui/compare/v7.4.0...v7.4.1) (2023-06-21)

# [7.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v7.3.1...v7.4.0) (2023-06-15)

### Features

- **icons:** add PinFilled icon
  ([dfef008](https://github.com/MTES-MCT/monitor-ui/commit/dfef008403136f2bc3dfeab66a1ea42aa9b8ff70))

## [7.3.1](https://github.com/MTES-MCT/monitor-ui/compare/v7.3.0...v7.3.1) (2023-06-13)

### Bug Fixes

- **components:** fix style
  ([fa5ddb6](https://github.com/MTES-MCT/monitor-ui/commit/fa5ddb6a351cba430d1a2f2452ac66e756e3722b))

# [7.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v7.2.1...v7.3.0) (2023-06-09)

### Features

- **components:** clean naming for export
  ([83f3b1b](https://github.com/MTES-MCT/monitor-ui/commit/83f3b1bb3eec48b01abdea7444b6c8e2ca0f9c56))
- **components:** create SideMenu component
  ([1ba4358](https://github.com/MTES-MCT/monitor-ui/commit/1ba435820145634ce8449612d2f4e7ff63d894da))

## [7.2.1](https://github.com/MTES-MCT/monitor-ui/compare/v7.2.0...v7.2.1) (2023-06-08)

### Bug Fixes

- **elements:** unbold and italicize FieldError
  ([4ba529e](https://github.com/MTES-MCT/monitor-ui/commit/4ba529e97e1f90a7ea3beff4bf479081687c8e5f))

# [7.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v7.1.0...v7.2.0) (2023-06-05)

### Bug Fixes

- **build:** remove lodash & ol from peer deps
  ([9377efa](https://github.com/MTES-MCT/monitor-ui/commit/9377efa5a668d32206c0bb74f095af2cf6ce53f0))

### Features

- **components:** add Notfier
  ([bc641e7](https://github.com/MTES-MCT/monitor-ui/commit/bc641e7cdf6e5f78028351821c943255075403bd))
- **utils:** add logSoftError()
  ([a867557](https://github.com/MTES-MCT/monitor-ui/commit/a867557a72cc81135ff07236d5e9fe2b94746e13))

# [7.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v7.0.0...v7.1.0) (2023-05-30)

### Features

- **elements:** expose FieldError
  ([1e8efa9](https://github.com/MTES-MCT/monitor-ui/commit/1e8efa9c82812442d532cfce2b8837716570e78a))

# [7.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v6.6.0...v7.0.0) (2023-05-29)

- fix(fields)!: move style prop passing to container level
  ([3d727a1](https://github.com/MTES-MCT/monitor-ui/commit/3d727a17b49898f268c7e7b8405ba60c65211a30))

### BREAKING CHANGES

- Fields `style` & `className` props are now passed to the container.

# [6.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v6.5.2...v6.6.0) (2023-05-28)

### Features

- **formiks:** add onError prop to FormikEffect
  ([6b6ad2e](https://github.com/MTES-MCT/monitor-ui/commit/6b6ad2e191adf1d4a488040990fa2b7633c6b502))

## [6.5.2](https://github.com/MTES-MCT/monitor-ui/compare/v6.5.1...v6.5.2) (2023-05-27)

### Bug Fixes

- **fields:** add missing and normalize error styles
  ([8104328](https://github.com/MTES-MCT/monitor-ui/commit/810432817e7ea1dfa77427a1ea4fac83cdd41713))

## [6.5.1](https://github.com/MTES-MCT/monitor-ui/compare/v6.5.0...v6.5.1) (2023-05-26)

### Bug Fixes

- **fields:** add missing onBlur & onFocus props passing in NumberInput
  ([25c210e](https://github.com/MTES-MCT/monitor-ui/commit/25c210e498c37f275aa32dc5104e0c2824eb4a64))
- **fields:** prevent wheel event in NumberInput, DatePicker & DateRangePicker
  ([21a1c20](https://github.com/MTES-MCT/monitor-ui/commit/21a1c205620e977b411e755793ff92dfc17da20b))

# [6.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v6.4.1...v6.5.0) (2023-05-25)

### Features

- **cypress:** extend retries to caught errors in fill command
  ([6ea6839](https://github.com/MTES-MCT/monitor-ui/commit/6ea6839c489b83c3807f5779ece254d9652dc95e))

## [6.4.1](https://github.com/MTES-MCT/monitor-ui/compare/v6.4.0...v6.4.1) (2023-05-25)

### Bug Fixes

- **fields:** don't display list when no value
  ([7fa81b3](https://github.com/MTES-MCT/monitor-ui/commit/7fa81b367b23f993800addaa5d5667a73c4407d8))

# [6.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v6.3.3...v6.4.0) (2023-05-25)

### Bug Fixes

- **formiks:** delete setTouched in handleChange and delete touched condition for error
  ([17a9e24](https://github.com/MTES-MCT/monitor-ui/commit/17a9e249a74352f0696a9cc2146aa4e88422a542))

### Features

- **fields:** add customSearch prop to Search
  ([53e993a](https://github.com/MTES-MCT/monitor-ui/commit/53e993ac1cd8c218a3bddbd5cef0d36778589166))

## [6.3.3](https://github.com/MTES-MCT/monitor-ui/compare/v6.3.2...v6.3.3) (2023-05-25)

### Bug Fixes

- **fields:** control options internally with customSearch in Select & MultiSelect
  ([251ad18](https://github.com/MTES-MCT/monitor-ui/commit/251ad188dbc388c6efcaa1e2bf0afdd0ba343a65))
- **fields:** reset controlled rsuite data on change with customSearch in MultiSelect
  ([b96b6d5](https://github.com/MTES-MCT/monitor-ui/commit/b96b6d5eb0e3e00170449ec5df0615ee7c6cea96))

## [6.3.2](https://github.com/MTES-MCT/monitor-ui/compare/v6.3.1...v6.3.2) (2023-05-25)

### Bug Fixes

- **libs:** make CustomSearch fully functional
  ([931dda0](https://github.com/MTES-MCT/monitor-ui/commit/931dda03e79ba3710d9ae0d14a45305e0c57b819))

## [6.3.1](https://github.com/MTES-MCT/monitor-ui/compare/v6.3.0...v6.3.1) (2023-05-24)

### Bug Fixes

- **fields:** force searchable when using customSearch prop in MultiSelect
  ([1c195cb](https://github.com/MTES-MCT/monitor-ui/commit/1c195cbe7514e24d3fff4e4af91b310f47a20ec8))
- **fields:** link unreachable customSearch case in Select & MultiSelect
  ([d821901](https://github.com/MTES-MCT/monitor-ui/commit/d82190185bdfaae2e8322fae7dfc847214d645c8))
- **libs:** trim query param in find() method
  ([3a7dd9d](https://github.com/MTES-MCT/monitor-ui/commit/3a7dd9d84f3782b5fa1fc8c76711015975245777))

# [6.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v6.2.2...v6.3.0) (2023-05-24)

### Bug Fixes

- **fields:** fix multiple performance issues in Select & MultiSelect
  ([771e33e](https://github.com/MTES-MCT/monitor-ui/commit/771e33e9fcad59f2dbbea1aeb7ef9efeba85d840))

### Features

- **fields:** add customSearch prop to Select & MultiSelect
  ([217bd58](https://github.com/MTES-MCT/monitor-ui/commit/217bd58142898e8fff89fd7ea748ba3bf7d42144))
- **libs:** add CustomSearch
  ([6dfe696](https://github.com/MTES-MCT/monitor-ui/commit/6dfe696d7b11b941ba257da20d59b7ceabb7a7be))
- **libs:** add isStrict & threshold options to CustomSearch
  ([c059a57](https://github.com/MTES-MCT/monitor-ui/commit/c059a57ffbfa052bbf3fb7d83e145421dd2c5a57))

## [6.2.2](https://github.com/MTES-MCT/monitor-ui/compare/v6.2.1...v6.2.2) (2023-05-21)

### Bug Fixes

- **formiks:** set touched to true on change
  ([2507de9](https://github.com/MTES-MCT/monitor-ui/commit/2507de91c5ba117ecda97916e58414958bb40107))

## [6.2.1](https://github.com/MTES-MCT/monitor-ui/compare/v6.2.0...v6.2.1) (2023-05-21)

### Bug Fixes

- **fields:** replace deprecated Rsuite disabledDate prop with shouldDisableDate
  ([6ff1a1c](https://github.com/MTES-MCT/monitor-ui/commit/6ff1a1cbf037010858b07db0f1c84a8faf9d2bd5))

# [6.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v6.1.1...v6.2.0) (2023-05-21)

### Features

- **elements:** add withUnpropagatedClick prop to Button & IconButton
  ([67943f5](https://github.com/MTES-MCT/monitor-ui/commit/67943f5c2bc9e225a13b0185869fef86bebec069))

## [6.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v6.1.0...v6.1.1) (2023-05-21)

### Bug Fixes

- **formiks:** show error when touched
  ([f554973](https://github.com/MTES-MCT/monitor-ui/commit/f554973c68901406b08e3adbe37fc49a1407580b))

# [6.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v6.0.1...v6.1.0) (2023-05-19)

### Bug Fixes

- **fields:** delete queryMap and queryUrl props
  ([5e00cb0](https://github.com/MTES-MCT/monitor-ui/commit/5e00cb0baa8dc6937b44a800e24f61d04a258ab7))

### Features

- **fields:** add Icon prop to TextInput
  ([a885011](https://github.com/MTES-MCT/monitor-ui/commit/a885011f2cd0d09034e9d45a54a356b4ffdd7d6c))
- **icons:** update and add icons
  ([efd44f2](https://github.com/MTES-MCT/monitor-ui/commit/efd44f243fa2f2914b1c15a755245c99f2c06a76))

## [6.0.1](https://github.com/MTES-MCT/monitor-ui/compare/v6.0.0...v6.0.1) (2023-05-19)

### Bug Fixes

- add missing classnames
  ([23f83f1](https://github.com/MTES-MCT/monitor-ui/commit/23f83f13a2b909712bf1580e8e9545a314236dbb))

# [6.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.9.2...v6.0.0) (2023-05-17)

### Bug Fixes

- **fields:** fix search component
  ([8776915](https://github.com/MTES-MCT/monitor-ui/commit/87769151f5152c05810b6849e267d73f9f4eb8d3))

- fix(fields)!: format options and create test e2e
  ([69b3070](https://github.com/MTES-MCT/monitor-ui/commit/69b3070409a3f5c3aa9063b12bf990d6cb92fa65))

### BREAKING CHANGES

- - pass option in `onChange` function instead of value

* rename prop to display search icon
* replace defaultValue with value
* add optionValueKey prop

## [5.9.2](https://github.com/MTES-MCT/monitor-ui/compare/v5.9.1...v5.9.2) (2023-05-10)

### Bug Fixes

- **elements:** delete stop click event propagation in Button & IconButton
  ([b2d70ad](https://github.com/MTES-MCT/monitor-ui/commit/b2d70adf14ce7780b6ef45ff9bbba0d026ac77ef))

## [5.9.1](https://github.com/MTES-MCT/monitor-ui/compare/v5.9.0...v5.9.1) (2023-05-05)

### Bug Fixes

- **components:** add default class name to Dialog
  ([b74ea15](https://github.com/MTES-MCT/monitor-ui/commit/b74ea15a9ae9d629e99eb2917a2acc3b88936736))

# [5.9.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.8.1...v5.9.0) (2023-05-05)

### Features

- **components:** add Dialog
  ([89057d2](https://github.com/MTES-MCT/monitor-ui/commit/89057d25674f76b8298fc432a6bd1f521b25f605))

## [5.8.1](https://github.com/MTES-MCT/monitor-ui/compare/v5.8.0...v5.8.1) (2023-05-04)

### Bug Fixes

- **fields:** add missing isUndefinedWhenDisabled prop to DatePicker & DateRangePicker
  ([17ba4f8](https://github.com/MTES-MCT/monitor-ui/commit/17ba4f8a60204c9a297d59c167c0ae2d872070cf))

# [5.8.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.7.1...v5.8.0) (2023-05-04)

### Bug Fixes

- **components:** retype onChangeFocus callback param in NewWindow
  ([da16a87](https://github.com/MTES-MCT/monitor-ui/commit/da16a87d9e461de08beb61b0f6875742ea22c19a))
- **elements:** code review of SimpleTable
  ([34d7466](https://github.com/MTES-MCT/monitor-ui/commit/34d7466117fd8d08c6921e8f04e17b251ebbc957))
- **elements:** improve style of SimpleTable
  ([6bfac8d](https://github.com/MTES-MCT/monitor-ui/commit/6bfac8d58141e7c3911f8f5aed605d3dc5df1abf))
- **elements:** lint and type of SimpleTable
  ([9e45fde](https://github.com/MTES-MCT/monitor-ui/commit/9e45fde0e47089a0f053b48e6b702660d942050a))

### Features

- **elements:** add SimpleTable
  ([6517305](https://github.com/MTES-MCT/monitor-ui/commit/6517305af0b999c7dd2090460ed05d18ee797818))
- **elements:** export component and move story in elements folder
  ([ca7c012](https://github.com/MTES-MCT/monitor-ui/commit/ca7c0122eae40a60f1fa405b29541e41d432525b))

## [5.7.1](https://github.com/MTES-MCT/monitor-ui/compare/v5.7.0...v5.7.1) (2023-05-03)

### Bug Fixes

- **components:** type all allowed features in NewWindow
  ([1883816](https://github.com/MTES-MCT/monitor-ui/commit/18838169cc7a642c0e0d6e12fc833c23f5c69416))

# [5.7.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.6.0...v5.7.0) (2023-05-03)

### Features

- **components:** add NewWindow
  ([86d066f](https://github.com/MTES-MCT/monitor-ui/commit/86d066f34809fe63a79baaced69bad79c958a228))

# [5.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.5.0...v5.6.0) (2023-04-28)

### Features

- **icons:** add expand icon
  ([3376d0f](https://github.com/MTES-MCT/monitor-ui/commit/3376d0f2e8244effafc5722ae6f4bea0dc46c65b))

# [5.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.4.0...v5.5.0) (2023-04-27)

### Features

- **icons:** add mission action icon
  ([7c8dbf4](https://github.com/MTES-MCT/monitor-ui/commit/7c8dbf4d6a565e5e201aea2f80ae811a9c5e2238))

# [5.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.3.6...v5.4.0) (2023-04-26)

### Bug Fixes

- **fields:** apply lint
  ([4b89b0b](https://github.com/MTES-MCT/monitor-ui/commit/4b89b0baa32fb97de4b35e01df82902df5ea89cb))

### Features

- **fields:** add isCleanable prop to select picker
  ([2924521](https://github.com/MTES-MCT/monitor-ui/commit/2924521b06490774e248c7bfedd843c2c456a848))

## [5.3.6](https://github.com/MTES-MCT/monitor-ui/compare/v5.3.5...v5.3.6) (2023-04-20)

### Bug Fixes

- **fields:** fix value of undefined on controlled inputs
  ([1a5fa11](https://github.com/MTES-MCT/monitor-ui/commit/1a5fa11ba9ce2357ab964e7c6a7b52914f6434f8))

## [5.3.5](https://github.com/MTES-MCT/monitor-ui/compare/v5.3.4...v5.3.5) (2023-04-19)

### Bug Fixes

- **cypress:** enable force in fields clearing
  ([41ce7b4](https://github.com/MTES-MCT/monitor-ui/commit/41ce7b41555501fd798d31d5040ff3dcbfdd777e))

## [5.3.4](https://github.com/MTES-MCT/monitor-ui/compare/v5.3.3...v5.3.4) (2023-04-19)

### Bug Fixes

- **cypress:** wrap fill() DatePicker & DateRangePicker selectors within fieldset
  ([85fa305](https://github.com/MTES-MCT/monitor-ui/commit/85fa3058db87df8a56c3c52a4fc62f3cd47f3e88))

## [5.3.3](https://github.com/MTES-MCT/monitor-ui/compare/v5.3.2...v5.3.3) (2023-04-18)

### Bug Fixes

- **fields:** migrate internal values to fully controlled values in controlled value fields
  ([06ccbe9](https://github.com/MTES-MCT/monitor-ui/commit/06ccbe971e66d65f1ba83c6fe5e39aab18016a08))

## [5.3.2](https://github.com/MTES-MCT/monitor-ui/compare/v5.3.1...v5.3.2) (2023-04-14)

### Bug Fixes

- **cypress:** allow cypress v11 & v12
  ([4bdf77a](https://github.com/MTES-MCT/monitor-ui/commit/4bdf77aeac87a2bff4827252282ccbf26cea6f7e))

# [5.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.2.2...v5.3.0) (2023-04-12)

### Bug Fixes

- **fields:** update value in MultiCheckbox on value prop change
  ([c9a11c8](https://github.com/MTES-MCT/monitor-ui/commit/c9a11c85c4b35f5df2979916588e0ab091ffd06f))
- **fields:** update value in MultiRadio on value prop change
  ([a230925](https://github.com/MTES-MCT/monitor-ui/commit/a230925361a54bad0251159600dba4c87965867b))

### Features

- **fields:** add isErrorMessageHidden prop to fields
  ([f5d498d](https://github.com/MTES-MCT/monitor-ui/commit/f5d498da707133d5cb45105da5675f48b368664b))

## [5.2.1](https://github.com/MTES-MCT/monitor-ui/compare/v5.2.0...v5.2.1) (2023-04-11)

### Bug Fixes

- **cypress:** include registerMonitorUiCustomCommands() typings in module
  ([81373dc](https://github.com/MTES-MCT/monitor-ui/commit/81373dca3f7b3a62770cb858ae601e984834f4c0))

# [5.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.1.1...v5.2.0) (2023-04-11)

### Bug Fixes

- **cypress:** export index file instead of directory
  ([5a0c394](https://github.com/MTES-MCT/monitor-ui/commit/5a0c394919d9a7d8e6910ca1bbdb9a383c019ca0))
- **fields:** fix css on multiselect
  ([ad23dc0](https://github.com/MTES-MCT/monitor-ui/commit/ad23dc0967f6fe0b235518bc03724aa3695672bf))

### Features

- **cypress:** wrap commands registration within a registerMonitorUiCustomCommands() function
  ([2142789](https://github.com/MTES-MCT/monitor-ui/commit/21427893bd628ef8780566fe0b715f3ef5be10d9))

## [5.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v5.1.0...v5.1.1) (2023-04-11)

### Bug Fixes

- **utils:** include Dayjs plugins typings in customDayjs()
  ([bbe5c7c](https://github.com/MTES-MCT/monitor-ui/commit/bbe5c7c7b763567750af0843fbc14ee977e96a09))

# [5.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v5.0.0...v5.1.0) (2023-04-11)

### Features

- **utils:** include more plugins in customDayjs()
  ([4493b00](https://github.com/MTES-MCT/monitor-ui/commit/4493b00c882dd4afb3196fb39dbad22737de13cd))

# [5.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v4.1.0...v5.0.0) (2023-04-11)

- fix!: handle DST correctly in date-related utils & fields
  ([377450b](https://github.com/MTES-MCT/monitor-ui/commit/377450bca0f2c90d7cf1331da3e9f8a50042bb33))
- fix(fields)!: make DatePicker & DateRangePicker onChange value undefined when cleared
  ([b8a0f09](https://github.com/MTES-MCT/monitor-ui/commit/b8a0f09aae3638bebccced2c8c3a0f39d5caa8ab))

### Features

- **fields:** add isEndDate prop to DatePicker
  ([418290e](https://github.com/MTES-MCT/monitor-ui/commit/418290e94f8f7eea9a282ac2d610b57761af2c8b))

### BREAKING CHANGES

- `dayjs` export is now named `customDayjs`.
- rsuite-override.css doesn't include calendar-related CSS anymore.
- DatePicker & DateRangePicker onChange() value can now be undefined.

# [4.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v4.0.7...v4.1.0) (2023-04-05)

### Features

- **fields:** Add isAddButtonDisabled to MultiZoneEditor
  ([3457bc5](https://github.com/MTES-MCT/monitor-ui/commit/3457bc5114de8f040b77daf78678eb8655448737))

## [4.0.7](https://github.com/MTES-MCT/monitor-ui/compare/v4.0.6...v4.0.7) (2023-04-03)

### Bug Fixes

- **cypress:** add number to fill command type
  ([db11067](https://github.com/MTES-MCT/monitor-ui/commit/db11067d9a0f3523bef61b390bd38f8c9c3c6ed4))

## [4.0.6](https://github.com/MTES-MCT/monitor-ui/compare/v4.0.5...v4.0.6) (2023-03-30)

### Bug Fixes

- **cypress:** handle previous subject case in clickButton command
  ([5fc8b34](https://github.com/MTES-MCT/monitor-ui/commit/5fc8b34de09bf79156e348810897b55f0a1839f9))

## [4.0.5](https://github.com/MTES-MCT/monitor-ui/compare/v4.0.4...v4.0.5) (2023-03-30)

### Bug Fixes

- **cypress:** force text input typing in fill command
  ([abdeddd](https://github.com/MTES-MCT/monitor-ui/commit/abdedddebcb12806fff7f02657ca0ed9aea337ab))
- **cypress:** handle button selection by title in clickButton command
  ([d56e711](https://github.com/MTES-MCT/monitor-ui/commit/d56e711b2a08c06129e99cae1a23008f2998389a))

## [4.0.4](https://github.com/MTES-MCT/monitor-ui/compare/v4.0.3...v4.0.4) (2023-03-30)

### Bug Fixes

- **cypress:** improve fill command reliability
  ([26ad3f7](https://github.com/MTES-MCT/monitor-ui/commit/26ad3f7d8e5558181a4adaa9ad4cdb0f9b2ae9c7))

## [4.0.3](https://github.com/MTES-MCT/monitor-ui/compare/v4.0.2...v4.0.3) (2023-03-29)

### Bug Fixes

- **fields:** handle value change in MultiSelect
  ([e4b80fa](https://github.com/MTES-MCT/monitor-ui/commit/e4b80fa78de54085d905a7e1afded79440c157e7))

## [4.0.2](https://github.com/MTES-MCT/monitor-ui/compare/v4.0.1...v4.0.2) (2023-03-29)

### Bug Fixes

- **fields:** handle value prop change in Select & MultiSelect
  ([db2f931](https://github.com/MTES-MCT/monitor-ui/commit/db2f931256b82dd8c1c0c7ddf1b2884154142260))

## [4.0.1](https://github.com/MTES-MCT/monitor-ui/compare/v4.0.0...v4.0.1) (2023-03-29)

### Bug Fixes

- **fields:** add boolean to generic Option type
  ([c6a977a](https://github.com/MTES-MCT/monitor-ui/commit/c6a977ad84045efe56a47e77edd46c1b9305becd))

# [4.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v3.7.1...v4.0.0) (2023-03-29)

- feat(fields)!: switch from uncontrolled to controlled values
  ([e308e1c](https://github.com/MTES-MCT/monitor-ui/commit/e308e1cdf68aea33805e11aba2b7278233286acf))

### Features

- **fields:** handle object options in Select & MultiSelect
  ([cc280c9](https://github.com/MTES-MCT/monitor-ui/commit/cc280c91c4fd374a154996f511f8f76c767b2d27))

### BREAKING CHANGES

- `defaultValue` is replaced by `value` in Checkbox, MultiCheckbox, MultiRadio, MultiSelect, NumberInput, Select,
  Textarea & TextInput

## [3.7.1](https://github.com/MTES-MCT/monitor-ui/compare/v3.7.0...v3.7.1) (2023-03-17)

### Bug Fixes

- **fields:** fix multiple style issues in MultiSelect
  ([061215f](https://github.com/MTES-MCT/monitor-ui/commit/061215f6fdf5dbcffe227d695acced3c57176a5c))

# [3.7.0](https://github.com/MTES-MCT/monitor-ui/compare/v3.6.0...v3.7.0) (2023-03-17)

### Features

- **elements:** add classname .Field to Field
  ([a1dfc98](https://github.com/MTES-MCT/monitor-ui/commit/a1dfc985f87b32b2797a00f46ffef4dba4a16101))

# [3.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v3.5.0...v3.6.0) (2023-03-16)

### Features

- **css:** css for errors
  ([e0b5d51](https://github.com/MTES-MCT/monitor-ui/commit/e0b5d51281214db916103311dbe70ab871299d09))

# [3.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v3.4.0...v3.5.0) (2023-03-01)

### Bug Fixes

- **deps:** fix cypress version
  ([399b1fe](https://github.com/MTES-MCT/monitor-ui/commit/399b1fea54ac5897b8cb33614b34845aa6f0a03b))
- **story:** apply linter
  ([e7a0fa7](https://github.com/MTES-MCT/monitor-ui/commit/e7a0fa71084ed5645b5f618f35c416c45fd470c0))

### Features

- **stories:** add custom query search story
  ([c17d4b0](https://github.com/MTES-MCT/monitor-ui/commit/c17d4b05f1653fa4b932d62b991b1f7b8b867566))

# [3.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v3.3.1...v3.4.0) (2023-02-28)

### Features

- **fields:** add throttle to search field
  ([0a29744](https://github.com/MTES-MCT/monitor-ui/commit/0a29744d714d74302f10a3514ab44ee260219491))

## [3.3.1](https://github.com/MTES-MCT/monitor-ui/compare/v3.3.0...v3.3.1) (2023-02-28)

### Bug Fixes

- **deps:** downgrade cypress version
  ([cd7c3bd](https://github.com/MTES-MCT/monitor-ui/commit/cd7c3bd327d8b2463995214dc3d40bd539ba0f0b))

# [3.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v3.2.0...v3.3.0) (2023-02-27)

### Bug Fixes

- **fields:** fix crash when custom type is given
  ([57117d9](https://github.com/MTES-MCT/monitor-ui/commit/57117d9d06fe33020abce79260964fe82ed21405))

### Features

- **fields:** Add generic type, rename and style search input
  ([2fd516c](https://github.com/MTES-MCT/monitor-ui/commit/2fd516cf93cf6f9d89c3b33ef08b1ef2390a9189))

# [3.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v3.1.1...v3.2.0) (2023-02-24)

### Bug Fixes

- **fields:** use baseContainer document for active elements in DatePicker & DateRangePicker
  ([753bd1b](https://github.com/MTES-MCT/monitor-ui/commit/753bd1be2b14c843bf25082e280031a0e1a78ac6))

### Features

- **cypress:** add first commands
  ([b685093](https://github.com/MTES-MCT/monitor-ui/commit/b685093ed178b0e409ff1ef8b1d683f254e098f3))
- **icons:** update ([ebd4fc3](https://github.com/MTES-MCT/monitor-ui/commit/ebd4fc3a6c17a22701c62d886dec5bf10fb464cc))

## [3.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v3.1.0...v3.1.1) (2023-02-23)

### Bug Fixes

- **elements:** expose TagBullet enum
  ([25eed49](https://github.com/MTES-MCT/monitor-ui/commit/25eed49f50629299824d9d8f3002a136ded8c814))

# [3.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v3.0.1...v3.1.0) (2023-02-23)

### Features

- **elements:** add bulletColor prop to Tag
  ([3ab795c](https://github.com/MTES-MCT/monitor-ui/commit/3ab795ca8db39faacfcfd644c85c9d2fed9195b2))

## [3.0.1](https://github.com/MTES-MCT/monitor-ui/compare/v3.0.0...v3.0.1) (2023-02-22)

### Bug Fixes

- **formiks:** remove useMemo on fieldValue
  ([3ec8602](https://github.com/MTES-MCT/monitor-ui/commit/3ec86027dbcaf0f0faa4e92ad05d86a134e6c575))

# [3.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.19.2...v3.0.0) (2023-02-21)

- feat(fields)!: add disabled, error & label props to CoordinatesInput
  ([556de36](https://github.com/MTES-MCT/monitor-ui/commit/556de362cbaf0250523ea710f2d753712a13cf21))

### Features

- **formiks:** add FormikCoordinatesInput
  ([89d5455](https://github.com/MTES-MCT/monitor-ui/commit/89d54554ce6a6f90b608b0d8c37a089f4b934b99))

### BREAKING CHANGES

- CoordinatesInput onChange can now send undefined params
- label is now mandatory in CoordinatesInput

## [2.19.2](https://github.com/MTES-MCT/monitor-ui/compare/v2.19.1...v2.19.2) (2023-02-20)

### Bug Fixes

- **css:** use selector
  ([3088eb1](https://github.com/MTES-MCT/monitor-ui/commit/3088eb1a973c1ab02411aad69fe8a28b77f025c6))
- **multiselect:** add css when using isLight
  ([a9a6131](https://github.com/MTES-MCT/monitor-ui/commit/a9a61314bc5aae340211aff9c528e48994fa1fb1))

## [2.19.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.19.0...v2.19.1) (2023-02-20)

# [2.19.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.18.1...v2.19.0) (2023-02-17)

### Features

- **fieds:** Update coordinates input style
  ([90a72f6](https://github.com/MTES-MCT/monitor-ui/commit/90a72f6fd73f635fcc9f284112fcd69fd6467d1b))

## [2.18.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.18.0...v2.18.1) (2023-02-17)

### Bug Fixes

- **elements:** center Button horizontally
  ([69004ea](https://github.com/MTES-MCT/monitor-ui/commit/69004eacf73d2cab3318653f769ca01d0521ffea))

# [2.18.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.17.0...v2.18.0) (2023-02-17)

### Features

- **elements:** add ellipsis to long Button labels
  ([287a56b](https://github.com/MTES-MCT/monitor-ui/commit/287a56bd1c598da0cd25feae50c466062cafc725))

# [2.17.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.16.0...v2.17.0) (2023-02-17)

### Features

- **fields:** add coordinates input
  ([7912c7a](https://github.com/MTES-MCT/monitor-ui/commit/7912c7a47aa1afeb90e6bc7bbeb49bcf1b9bd17f))

# [2.16.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.15.0...v2.16.0) (2023-02-13)

### Features

- **hooks:** expose useKey()
  ([abf6b6d](https://github.com/MTES-MCT/monitor-ui/commit/abf6b6d02ef014ca104b7d3eeefcaaa75b6374f1))
- **hooks:** expose usePrevious()
  ([e39c857](https://github.com/MTES-MCT/monitor-ui/commit/e39c857528fce65d8c321caa754a8d840eea4018))

# [2.15.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.14.5...v2.15.0) (2023-02-10)

### Features

- **elements:** stop click event propagation in Button & IconButton
  ([0796b02](https://github.com/MTES-MCT/monitor-ui/commit/0796b02b12fed5fe170fb9b8ce5734f9b54b8c9b))
- **fields:** add ellipsis for long options in MultiSelect & Select
  ([0c14f05](https://github.com/MTES-MCT/monitor-ui/commit/0c14f05582d9b8b5454a57908cb5a614837460dd))
- **fields:** add title to MultiSelect & Select options label
  ([0d5bca5](https://github.com/MTES-MCT/monitor-ui/commit/0d5bca51b659564c4bac034290b0609b7f693233))

## [2.14.5](https://github.com/MTES-MCT/monitor-ui/compare/v2.14.4...v2.14.5) (2023-02-09)

### Bug Fixes

- **fields:** add css selector for toggle event
  ([2c61e67](https://github.com/MTES-MCT/monitor-ui/commit/2c61e672fc979d92b43e3912b382754bfcc40eef))

## [2.14.4](https://github.com/MTES-MCT/monitor-ui/compare/v2.14.3...v2.14.4) (2023-02-09)

### Bug Fixes

- **formiks:** initialize FormikCheckbox form value on mount
  ([741505f](https://github.com/MTES-MCT/monitor-ui/commit/741505f7a6705cec2fa439284dff04de43fce962))

## [2.14.3](https://github.com/MTES-MCT/monitor-ui/compare/v2.14.2...v2.14.3) (2023-02-09)

### Bug Fixes

- **fields:** enforce error margins
  ([eb69017](https://github.com/MTES-MCT/monitor-ui/commit/eb69017e720bb97a64fac46cd3d35ae18b6b60a5))

## [2.14.2](https://github.com/MTES-MCT/monitor-ui/compare/v2.14.1...v2.14.2) (2023-02-08)

### Bug Fixes

- **elements:** make secondary Button background transparent
  ([7f1e490](https://github.com/MTES-MCT/monitor-ui/commit/7f1e4909d1a075a90de683c603dfc1b7dd586010))
- **fields:** make MultiZoneEditor row background white when isLight
  ([96f7a00](https://github.com/MTES-MCT/monitor-ui/commit/96f7a00bd7eab7755de13e8202aa64367e8d7b18))
- **formiks:** remove touched condition for errors
  ([91ac524](https://github.com/MTES-MCT/monitor-ui/commit/91ac524d0916390bc5308083390264d018dad980))

## [2.14.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.14.0...v2.14.1) (2023-02-08)

### Bug Fixes

- **fields:** remove value setting to undefined on destroy
  ([71f409b](https://github.com/MTES-MCT/monitor-ui/commit/71f409b699df131a70454204b87b0e563798cac9))

# [2.14.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.13.2...v2.14.0) (2023-02-07)

### Features

- **components:** add SingleTag
  ([0379159](https://github.com/MTES-MCT/monitor-ui/commit/0379159f6eec3a8d880e0f44f447bac8b5173bf8))

## [2.13.2](https://github.com/MTES-MCT/monitor-ui/compare/v2.13.1...v2.13.2) (2023-02-07)

### Bug Fixes

- **fields:** add missing Option component type generic (bis)
  ([b03ffc5](https://github.com/MTES-MCT/monitor-ui/commit/b03ffc53be2097724b6e481cb5addaf7587b5e82))

## [2.13.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.13.0...v2.13.1) (2023-02-07)

### Bug Fixes

- **fields:** add missing Option component type generic
  ([27ac60d](https://github.com/MTES-MCT/monitor-ui/commit/27ac60d3da117f134f8613d59f3a672d84820625))

# [2.13.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.12.1...v2.13.0) (2023-02-07)

### Features

- **fields:** make option value generic in MultiCheckbox, MultiRadio, MultiSelect & Select
  ([d92ae33](https://github.com/MTES-MCT/monitor-ui/commit/d92ae332495407e3dbbcdc5d17d13161002f34ef))

## [2.12.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.12.0...v2.12.1) (2023-02-07)

### Bug Fixes

- **fields:** skip MultiCheckbox render on onChange prop change
  ([7eab714](https://github.com/MTES-MCT/monitor-ui/commit/7eab714adb8a235a8f28aa2c23ccf8912cafd99e))

# [2.12.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.11.0...v2.12.0) (2023-02-07)

### Features

- **fields:** add error prop
  ([26d7494](https://github.com/MTES-MCT/monitor-ui/commit/26d7494157528d853da4a26077f4d63012bd2bd0))
- **fields:** set onChange value to undefined on disabled
  ([323ef7a](https://github.com/MTES-MCT/monitor-ui/commit/323ef7ace51acdc117187118bc2a3a8b7ac59ed6))

# [2.11.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.10.0...v2.11.0) (2023-02-07)

### Features

- **formiks:** set value to undefined on destroy
  ([8d810ad](https://github.com/MTES-MCT/monitor-ui/commit/8d810ad5dae3990628b3a63744adcc5fb339a3ad))

# [2.10.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.9.5...v2.10.0) (2023-01-31)

### Features

- **utils:** expose multiple utils
  ([0a72cbc](https://github.com/MTES-MCT/monitor-ui/commit/0a72cbc44279d02b0dfeee1251ca723c57468ff3))

## [2.9.5](https://github.com/MTES-MCT/monitor-ui/compare/v2.9.4...v2.9.5) (2023-01-27)

### Bug Fixes

- **fields:** fix searchable Select toggling behavior
  ([f3b3eca](https://github.com/MTES-MCT/monitor-ui/commit/f3b3eca41b6f2d3d48f21f2b388cf5dc7f6d24d1))

## [2.9.4](https://github.com/MTES-MCT/monitor-ui/compare/v2.9.3...v2.9.4) (2023-01-27)

### Bug Fixes

- **elements:** make Fieldset width 100% of parent width
  ([63d10c6](https://github.com/MTES-MCT/monitor-ui/commit/63d10c60ab12ebe437ea236ea5cde12fa13fd6ff))
- **fields:** fix MultiSelect placeholder alignment
  ([8c335b2](https://github.com/MTES-MCT/monitor-ui/commit/8c335b2d26208f2b7faecc9434ef1e0c201698e3))
- **fields:** improve MultiZoneEditor alignments
  ([b7d5784](https://github.com/MTES-MCT/monitor-ui/commit/b7d5784edefba4bf6e294f5cdf6cf27b79c309db))

## [2.9.3](https://github.com/MTES-MCT/monitor-ui/compare/v2.9.2...v2.9.3) (2023-01-27)

### Bug Fixes

- **components:** use px instead of rem for Dropdown icon size
  ([c0b24ac](https://github.com/MTES-MCT/monitor-ui/commit/c0b24ac4c90f666bbdeeae533c3d6153088a80eb))

## [2.9.2](https://github.com/MTES-MCT/monitor-ui/compare/v2.9.1...v2.9.2) (2023-01-27)

### Bug Fixes

- **fields:** set MutliSelect initial isOpen to false
  ([06fc475](https://github.com/MTES-MCT/monitor-ui/commit/06fc475fcd41e00e5e79a5636ba0e720899e3a1f))

## [2.9.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.9.0...v2.9.1) (2023-01-27)

### Bug Fixes

- **fields:** fix DateRangePicker calendar selection update
  ([4fb68f8](https://github.com/MTES-MCT/monitor-ui/commit/4fb68f86278094e8fb8255b1f2bf9ce531bbc721))
- **fields:** fix MultiSelect closing behavior
  ([1e832e6](https://github.com/MTES-MCT/monitor-ui/commit/1e832e6042cf7734f2084074672ea52220fb9fa8))
- **fields:** fix Select not closing on selection
  ([c132a1f](https://github.com/MTES-MCT/monitor-ui/commit/c132a1f153a3e51eb59cf2cfd363e873604efe29))
- **fields:** make MultiSelect width 100% of parent width
  ([aa38376](https://github.com/MTES-MCT/monitor-ui/commit/aa38376d0a57961bcdd385165e842b101cd037b1))
- **fields:** make Select width 100% of parent width
  ([9aa3f71](https://github.com/MTES-MCT/monitor-ui/commit/9aa3f71f9e258ca66989ef24860dceb4333348b9))

# [2.9.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.8.1...v2.9.0) (2023-01-25)

### Features

- **types:** restrict component props types to handle exact optional prop types
  ([296acf4](https://github.com/MTES-MCT/monitor-ui/commit/296acf48a7c701f85cbee72ceeea4071d60f0ea6))

## [2.8.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.8.0...v2.8.1) (2023-01-19)

### Bug Fixes

- **fields:** fix string date wrong default value offset in DatePicker & DateRangePicker
  ([18bc2aa](https://github.com/MTES-MCT/monitor-ui/commit/18bc2aa729cbe88c8e87fac294515a2fa75abbe7))

# [2.8.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.7.2...v2.8.0) (2023-01-17)

### Features

- **fields:** handle both Date & string dates in DatePicker & DateRangePicker
  ([6aacf70](https://github.com/MTES-MCT/monitor-ui/commit/6aacf7007bcbc789b9de643be2d192a1808b0afc))

## [2.7.2](https://github.com/MTES-MCT/monitor-ui/compare/v2.7.1...v2.7.2) (2023-01-13)

### Bug Fixes

- **elements:** set Button icon size in px instead of rem
  ([363ffab](https://github.com/MTES-MCT/monitor-ui/commit/363ffab6d6d2c65e997eafa7378f4ead377cb6f2))

## [2.7.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.7.0...v2.7.1) (2023-01-13)

### Bug Fixes

- **fields:** handle detached click outside for time in DatePicker & DateRangePicker
  ([afa0a13](https://github.com/MTES-MCT/monitor-ui/commit/afa0a13394f650b0d26a5cf868a325cc79335dcb))

# [2.7.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.6.0...v2.7.0) (2023-01-12)

### Features

- **fields:** add baseContainer prop to fields with global event listeners
  ([ebbb874](https://github.com/MTES-MCT/monitor-ui/commit/ebbb874be7352ce8830e94b7654fe27bbd00e544))

# [2.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.5.1...v2.6.0) (2023-01-10)

### Features

- **fields:** make AutoComplete, MultiSelect & Select container ref internal
  ([712cfd7](https://github.com/MTES-MCT/monitor-ui/commit/712cfd7a51feb23ad131e4d37eb3cb44702beed6))

## [2.5.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.5.0...v2.5.1) (2023-01-06)

### Bug Fixes

- **fields:** force width for DateRangePicker calendar container
  ([2c3bab7](https://github.com/MTES-MCT/monitor-ui/commit/2c3bab7a1f6ab5a70ad2e679045eef8822f310d5))

# [2.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.4.1...v2.5.0) (2023-01-06)

### Features

- add OnlyFontGlobalStyle for legacy integration
  ([16fb494](https://github.com/MTES-MCT/monitor-ui/commit/16fb4941ed0a6420f56ed85333bd2231317b9972))

## [2.4.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.4.0...v2.4.1) (2023-01-04)

### Bug Fixes

- **build:** remove useless npm engine version
  ([16a4b43](https://github.com/MTES-MCT/monitor-ui/commit/16a4b4335c9a6dfeb8dfed4d6598d3ba8fd05b3e))

# [2.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.3.2...v2.4.0) (2022-12-21)

### Bug Fixes

- **build:** externalize Rsuite localization
  ([10a581d](https://github.com/MTES-MCT/monitor-ui/commit/10a581d2947c6d2a80234b0d43d203b808d5933e))
- **fields:** focus next date part input when already filled in DatePicker & DateRangePicker
  ([38219de](https://github.com/MTES-MCT/monitor-ui/commit/38219de79c0cd4d6aefce125452c662428419765))
- **fields:** improve DatePicker UX & UI
  ([a57f977](https://github.com/MTES-MCT/monitor-ui/commit/a57f977fcf9fa999e80b6ba7e256766b35cd10c4))
- **fields:** normalize calendar header title in DatePicker & DateRangePicker
  ([611f811](https://github.com/MTES-MCT/monitor-ui/commit/611f8118f8f596b2c8972a06928d6bbc98d2062c))
- **fields:** normalize colors between states in DatePicker & DateRangePicker
  ([9cebad3](https://github.com/MTES-MCT/monitor-ui/commit/9cebad36c053202f12fee0f0c2c78809c272b7ee))
- **fields:** normalize sizes in DatePicker & DateRangePicker
  ([b76c78e](https://github.com/MTES-MCT/monitor-ui/commit/b76c78e515c58ed421e5ca8cb5e6b5b7ac391092))
- **fields:** remove dependency cycle in DateRangePicker
  ([226941a](https://github.com/MTES-MCT/monitor-ui/commit/226941a8299f2f8a7918f5546e65868705cc0528))

### Features

- **icons:** add Target and Vms ([#154](https://github.com/MTES-MCT/monitor-ui/issues/154))
  ([af70cfc](https://github.com/MTES-MCT/monitor-ui/commit/af70cfc85d56f9c7be689e305470b1a6ef4c1e86))

## [2.3.2](https://github.com/MTES-MCT/monitor-ui/compare/v2.3.1...v2.3.2) (2022-12-19)

### Bug Fixes

- **types:** update type definitions path ([#152](https://github.com/MTES-MCT/monitor-ui/issues/152))
  ([e6d95fb](https://github.com/MTES-MCT/monitor-ui/commit/e6d95fb91630c72f96ee78ed005a1109a6ad1a76))

## [2.3.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.3.0...v2.3.1) (2022-12-19)

### Bug Fixes

- **fields:** restore DatePicker calendar as body modal ([#146](https://github.com/MTES-MCT/monitor-ui/issues/146))
  ([b5f300f](https://github.com/MTES-MCT/monitor-ui/commit/b5f300f40ab3078b4b676b0663603f088492a0aa))

# [2.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.2.1...v2.3.0) (2022-12-16)

### Features

- **fields:** add NumberInput ([#144](https://github.com/MTES-MCT/monitor-ui/issues/144))
  ([649cc6c](https://github.com/MTES-MCT/monitor-ui/commit/649cc6cf0c7c1d416c7b6a774472df30d436bf00))

## [2.2.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.2.0...v2.2.1) (2022-12-15)

### Bug Fixes

- **elements:** use gap instead of margin in TagGroup ([#142](https://github.com/MTES-MCT/monitor-ui/issues/142))
  ([b6d73ea](https://github.com/MTES-MCT/monitor-ui/commit/b6d73eaa1daaf4f7c112dd9e5b6542265a2fbb1c))

# [2.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.1.1...v2.2.0) (2022-12-15)

### Features

- **elements:** add TagGroup ([#139](https://github.com/MTES-MCT/monitor-ui/issues/139))
  ([f12aadb](https://github.com/MTES-MCT/monitor-ui/commit/f12aadb9bdbc684116e19f7c867483d6dc69955a))

## [2.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v2.1.0...v2.1.1) (2022-12-15)

### Bug Fixes

- **formiks:** remove set undefined on destruction ([#137](https://github.com/MTES-MCT/monitor-ui/issues/137))
  ([fd375ae](https://github.com/MTES-MCT/monitor-ui/commit/fd375aec5047ba3aad31237bec4863f56fb1043f))

# [2.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v2.0.0...v2.1.0) (2022-12-15)

### Features

- **elements:** add isLight & hasBorder props to Fieldset ([#134](https://github.com/MTES-MCT/monitor-ui/issues/134))
  ([761ea73](https://github.com/MTES-MCT/monitor-ui/commit/761ea733f1441c32986b64f2ad6be4541073a485))
- **fields:** add MultiZoneEditor ([#135](https://github.com/MTES-MCT/monitor-ui/issues/135))
  ([8a3d653](https://github.com/MTES-MCT/monitor-ui/commit/8a3d6537484f8a0b85289f6903e5567cdef0673b))

# [2.0.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.14.0...v2.0.0) (2022-12-14)

- feat(fields)!: convert MultiSelect fixedWidth prop from rem to px (#132)
  ([6ab4d7f](https://github.com/MTES-MCT/monitor-ui/commit/6ab4d7fb4cf253964ba7074ab0e845c182a39928)), closes
  [#132](https://github.com/MTES-MCT/monitor-ui/issues/132)
- feat(elements)!: convert Icon size prop from rem to px (#131)
  ([30d3639](https://github.com/MTES-MCT/monitor-ui/commit/30d363933c0cd733874ed9999646a332a7b3c2f3)), closes
  [#131](https://github.com/MTES-MCT/monitor-ui/issues/131)

### BREAKING CHANGES

- Both MultiSelect and FormikMultiSelect `fixedWidth` prop are now in px instead of rem.
- Both Icon and ButtonIcon `size` prop is now in px instead of rem.

# [1.14.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.13.0...v1.14.0) (2022-12-14)

### Bug Fixes

- **fields:** prefix styled custom props with $ ([#127](https://github.com/MTES-MCT/monitor-ui/issues/127))
  ([05d03ba](https://github.com/MTES-MCT/monitor-ui/commit/05d03ba933cf6c3d684b5cb1456a8115c9df5af1))

### Features

- **elements:** add iconSize prop to IconButton ([#123](https://github.com/MTES-MCT/monitor-ui/issues/123))
  ([e6b03ce](https://github.com/MTES-MCT/monitor-ui/commit/e6b03ce389e0f35e0ab3f485d34ec682d7474e0b))
- **fields:** add AutoComplete ([#125](https://github.com/MTES-MCT/monitor-ui/issues/125))
  ([8fb5cef](https://github.com/MTES-MCT/monitor-ui/commit/8fb5cef36ce0d1446ceee7019a27da016736205c))
- **formiks:** add FormikAutoComplete ([#126](https://github.com/MTES-MCT/monitor-ui/issues/126))
  ([644cc2b](https://github.com/MTES-MCT/monitor-ui/commit/644cc2be5aa21c9177ff344e65912834095595d0))
- **icons:** update ([#124](https://github.com/MTES-MCT/monitor-ui/issues/124))
  ([81f3287](https://github.com/MTES-MCT/monitor-ui/commit/81f32875b3d5b7f491b038370d5e868e71e73f6a))

# [1.13.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.12.1...v1.13.0) (2022-12-14)

### Features

- **elements:** add Tag ([#121](https://github.com/MTES-MCT/monitor-ui/issues/121))
  ([c9be13e](https://github.com/MTES-MCT/monitor-ui/commit/c9be13e463a8795223e0bafb3287e51aa196495a))

## [1.12.1](https://github.com/MTES-MCT/monitor-ui/compare/v1.12.0...v1.12.1) (2022-12-14)

### Bug Fixes

- **icons:** use currentColor in new icons ([#119](https://github.com/MTES-MCT/monitor-ui/issues/119))
  ([3937553](https://github.com/MTES-MCT/monitor-ui/commit/39375532354d24489ab3aeb024ebe5b2cb61772a))

# [1.12.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.11.0...v1.12.0) (2022-12-13)

### Features

- **icons:** update ([#117](https://github.com/MTES-MCT/monitor-ui/issues/117))
  ([a242cc9](https://github.com/MTES-MCT/monitor-ui/commit/a242cc9a80b2eb5335cc1c466a28398df85ebed7))

# [1.11.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.10.2...v1.11.0) (2022-12-08)

### Bug Fixes

- **elements:** make tertiary IconButton background transparent
  ([#107](https://github.com/MTES-MCT/monitor-ui/issues/107))
  ([1986423](https://github.com/MTES-MCT/monitor-ui/commit/19864235d5a3ba17c466210df8ab654e70e30344))

### Features

- **elements:** add color prop to IconButton ([#108](https://github.com/MTES-MCT/monitor-ui/issues/108))
  ([2b1eede](https://github.com/MTES-MCT/monitor-ui/commit/2b1eedee72eaa23a7ce93ae73e172a225557c2fe))
- **fields:** add isLight prop in MultiSelect, Select, Textarea, TextInput
  ([#106](https://github.com/MTES-MCT/monitor-ui/issues/106))
  ([9484cb6](https://github.com/MTES-MCT/monitor-ui/commit/9484cb6581ae6c1a297e030a7ac0e9c142470f98))

## [1.10.2](https://github.com/MTES-MCT/monitor-ui/compare/v1.10.1...v1.10.2) (2022-12-06)

### Bug Fixes

- **formiks:** add missing default value handling ([#104](https://github.com/MTES-MCT/monitor-ui/issues/104))
  ([8225e5f](https://github.com/MTES-MCT/monitor-ui/commit/8225e5f37f0dfc6072630ccb6b127d0fddcb6182))

## [1.10.1](https://github.com/MTES-MCT/monitor-ui/compare/v1.10.0...v1.10.1) (2022-12-06)

# [1.10.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.9.2...v1.10.0) (2022-12-01)

### Features

- **components:** add Dropdown ([#93](https://github.com/MTES-MCT/monitor-ui/issues/93))
  ([1d5ec1b](https://github.com/MTES-MCT/monitor-ui/commit/1d5ec1b06b0f9ed06b44518de60cd69f0286e8fb))
- **elements:** add IconButton ([#92](https://github.com/MTES-MCT/monitor-ui/issues/92))
  ([5ea52c3](https://github.com/MTES-MCT/monitor-ui/commit/5ea52c3bc2c20226641e46b114a6bea617caeb45))

## [1.9.2](https://github.com/MTES-MCT/monitor-ui/compare/v1.9.1...v1.9.2) (2022-12-01)

### Bug Fixes

- **build:** set include fonts as inline data ([#90](https://github.com/MTES-MCT/monitor-ui/issues/90))
  ([4872817](https://github.com/MTES-MCT/monitor-ui/commit/48728173b37f7842309b4141e8337f5263c64a35))

## [1.9.1](https://github.com/MTES-MCT/monitor-ui/compare/v1.9.0...v1.9.1) (2022-12-01)

### Bug Fixes

- **build:** set right font paths ([#88](https://github.com/MTES-MCT/monitor-ui/issues/88))
  ([172250a](https://github.com/MTES-MCT/monitor-ui/commit/172250a58c990c3c19c5d0162bb4de1f6ab17194))

# [1.9.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.8.0...v1.9.0) (2022-12-01)

### Features

- **elements:** add Button ([#86](https://github.com/MTES-MCT/monitor-ui/issues/86))
  ([00b2e10](https://github.com/MTES-MCT/monitor-ui/commit/00b2e1070516959a3c6a13bcea350c7b4f05d309))

# [1.8.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.7.4...v1.8.0) (2022-11-30)

### Features

- **icons:** add size prop ([#84](https://github.com/MTES-MCT/monitor-ui/issues/84))
  ([5eec53c](https://github.com/MTES-MCT/monitor-ui/commit/5eec53c5afbbb44ef82fea9b36cf0da598e2188c))
- **icons:** integrate normalized icons as React components ([#83](https://github.com/MTES-MCT/monitor-ui/issues/83))
  ([5606ba4](https://github.com/MTES-MCT/monitor-ui/commit/5606ba4cd7dad570039f3246a94b3dee6501e177))

## [1.7.4](https://github.com/MTES-MCT/monitor-ui/compare/v1.7.3...v1.7.4) (2022-11-30)

## [1.7.3](https://github.com/MTES-MCT/monitor-ui/compare/v1.7.2...v1.7.3) (2022-11-30)

### Bug Fixes

- **build:** disable rollup modules preservation ([#77](https://github.com/MTES-MCT/monitor-ui/issues/77))
  ([d4e36ec](https://github.com/MTES-MCT/monitor-ui/commit/d4e36ece43e108f2b69f7d54ea247db3558217ee))
- **fields:** add missing keys in multi fields ([#76](https://github.com/MTES-MCT/monitor-ui/issues/76))
  ([aa40638](https://github.com/MTES-MCT/monitor-ui/commit/aa40638d0a16c648c9f55684634bdbbde7fd2651))

## [1.7.2](https://github.com/MTES-MCT/monitor-ui/compare/v1.7.1...v1.7.2) (2022-11-29)

## [1.7.1](https://github.com/MTES-MCT/monitor-ui/compare/v1.7.0...v1.7.1) (2022-11-29)

### Bug Fixes

- **fields:** make optional labels mandatory ([#42](https://github.com/MTES-MCT/monitor-ui/issues/42))
  ([629c98a](https://github.com/MTES-MCT/monitor-ui/commit/629c98aee5df1717eb1435d79ec015623803bd58))

# [1.7.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.6.0...v1.7.0) (2022-11-29)

### Features

- **fields:** add missing labels ([#40](https://github.com/MTES-MCT/monitor-ui/issues/40))
  ([95f7215](https://github.com/MTES-MCT/monitor-ui/commit/95f7215f28dc389981874eae73445b645c959787))

# [1.6.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.5.1...v1.6.0) (2022-11-29)

### Features

- **fields:** add MultiCheckbox ([#37](https://github.com/MTES-MCT/monitor-ui/issues/37))
  ([405ce01](https://github.com/MTES-MCT/monitor-ui/commit/405ce013e2eeac7d6143c1fab4f6d241133042e5))
- **fields:** add MultiRadio ([#38](https://github.com/MTES-MCT/monitor-ui/issues/38))
  ([de205f9](https://github.com/MTES-MCT/monitor-ui/commit/de205f9431a527bd5baf6dd85ac92d0126546c07))

## [1.5.1](https://github.com/MTES-MCT/monitor-ui/compare/v1.5.0...v1.5.1) (2022-11-29)

### Bug Fixes

- **fields:** add fixedWidth prop to MultiSelect ([#33](https://github.com/MTES-MCT/monitor-ui/issues/33))
  ([bea7a83](https://github.com/MTES-MCT/monitor-ui/commit/bea7a83f60d49e945686dba69ad4dcb13275bf5f))

# [1.5.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.4.0...v1.5.0) (2022-11-29)

### Features

- **fields:** add MultiSelect ([#26](https://github.com/MTES-MCT/monitor-ui/issues/26))
  ([e1123b1](https://github.com/MTES-MCT/monitor-ui/commit/e1123b1e09dd55135b6806fdbe7615eab5f65704))
- **fields:** add Textarea ([#30](https://github.com/MTES-MCT/monitor-ui/issues/30))
  ([0cd9b13](https://github.com/MTES-MCT/monitor-ui/commit/0cd9b132b0607b109dbec4ec54e7184e71b8f9d9))
- **fields:** add TextInput ([#28](https://github.com/MTES-MCT/monitor-ui/issues/28))
  ([cdd610f](https://github.com/MTES-MCT/monitor-ui/commit/cdd610f679bfb967f2f6403f9c4c397bfafb0948))
- **formiks:** add FormikMultiSelect ([#27](https://github.com/MTES-MCT/monitor-ui/issues/27))
  ([414c4da](https://github.com/MTES-MCT/monitor-ui/commit/414c4dad1a6a639ae4b1f7cbf61f851d778f08b7))
- **formiks:** add FormikTextarea ([#31](https://github.com/MTES-MCT/monitor-ui/issues/31))
  ([59aa260](https://github.com/MTES-MCT/monitor-ui/commit/59aa260cc8efeec29d795d73261bc77263b67ab4))
- **formiks:** add FormikTextInput ([#29](https://github.com/MTES-MCT/monitor-ui/issues/29))
  ([8feddd3](https://github.com/MTES-MCT/monitor-ui/commit/8feddd39d05484a2c2469e019baacf5b60a10000))

# [1.4.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.3.0...v1.4.0) (2022-11-28)

### Features

- **fields:** add Checkbox ([#21](https://github.com/MTES-MCT/monitor-ui/issues/21))
  ([37a1746](https://github.com/MTES-MCT/monitor-ui/commit/37a1746676da210f437453cfa3812bd537b33661))
- **formiks:** add FormikCheckbox ([#22](https://github.com/MTES-MCT/monitor-ui/issues/22))
  ([f018046](https://github.com/MTES-MCT/monitor-ui/commit/f01804690b045b0d2e7356eb5c6c1cac6c0a5dbe))

# [1.3.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.2.0...v1.3.0) (2022-11-24)

### Features

- **assets:** add rsuite-override stylesheet ([#19](https://github.com/MTES-MCT/monitor-ui/issues/19))
  ([0619f51](https://github.com/MTES-MCT/monitor-ui/commit/0619f51989a33656c4434f15a7533269a2b9c40b))

# [1.2.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.1.1...v1.2.0) (2022-11-24)

### Bug Fixes

- **build:** fix dist npm exports path ([#17](https://github.com/MTES-MCT/monitor-ui/issues/17))
  ([aad4c07](https://github.com/MTES-MCT/monitor-ui/commit/aad4c07b160ec38fcad68fbfcb8055c971c0f5ed))

### Features

- **formiks:** add FormikDatePicker ([#16](https://github.com/MTES-MCT/monitor-ui/issues/16))
  ([a4db006](https://github.com/MTES-MCT/monitor-ui/commit/a4db006c1f72a39fd7ea8dc2722399783c44826b))
- **formiks:** add FormikDateRangePicker ([#15](https://github.com/MTES-MCT/monitor-ui/issues/15))
  ([e40e53d](https://github.com/MTES-MCT/monitor-ui/commit/e40e53d7c15e54244bde801fd42d57c9e7033947))

## [1.1.1](https://github.com/MTES-MCT/monitor-ui/compare/v1.1.0...v1.1.1) (2022-11-24)

### Bug Fixes

- **semantic-release:** publish to NPM ([#12](https://github.com/MTES-MCT/monitor-ui/issues/12))
  ([2c42952](https://github.com/MTES-MCT/monitor-ui/commit/2c42952dcc8bbc3983aee55f784e0ca082760d0f))

# [1.1.0](https://github.com/MTES-MCT/monitor-ui/compare/v1.0.0...v1.1.0) (2022-11-24)

### Features

- **fields:** add DatePicker ([#7](https://github.com/MTES-MCT/monitor-ui/issues/7))
  ([be4870b](https://github.com/MTES-MCT/monitor-ui/commit/be4870b4b7d341e25392ad44f99b491394ff143c))
- **fields:** add Select ([#8](https://github.com/MTES-MCT/monitor-ui/issues/8))
  ([5ff1daa](https://github.com/MTES-MCT/monitor-ui/commit/5ff1daa298ad8b55fe9661e6449ea88e2cd0f883))
- **formiks:** add FormikSelect ([#10](https://github.com/MTES-MCT/monitor-ui/issues/10))
  ([cf3938d](https://github.com/MTES-MCT/monitor-ui/commit/cf3938d7bc1e1bc61b46b844e77101d621e5ee6f))

# 1.0.0 (2022-11-14)

### Features

- **fields:** add DateRangePicker
  ([bfe8099](https://github.com/MTES-MCT/monitor-ui/commit/bfe80997d6686817d9b14096dcb685df4d31d2bb))
